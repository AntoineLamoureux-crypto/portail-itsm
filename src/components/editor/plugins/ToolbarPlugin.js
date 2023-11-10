import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
} from 'lexical';
import { $wrapNodes } from '@lexical/selection';
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from '@lexical/list';
import { $createHeadingNode, $isHeadingNode } from '@lexical/rich-text';
import { Button, Icon, Select, Stack, Text } from '@chakra-ui/react';
import { BiHighlight, BiRedo, BiUndo } from 'react-icons/bi';

import { BsTypeBold } from 'react-icons/bs';
import { AiOutlineItalic } from 'react-icons/ai';
import { MdFormatUnderlined } from 'react-icons/md';

const LowPriority = 1;

function Divider() {
  return <div className="divider" />;
}

const blockTypeToBlockName = {
  code: 'Code Block',
  h1: 'Large Heading',
  h2: 'Small Heading',
  h3: 'Heading',
  h4: 'Heading',
  h5: 'Heading',
  ol: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote',
  ul: 'Bulleted List',
};

function BlockOptionsDropdownList({ editor, blockType, toolbarRef }) {
  const dropDownRef = useRef(null);

  useEffect(() => {
    const toolbar = toolbarRef.current;
    const dropDown = dropDownRef.current;

    if (toolbar !== null && dropDown !== null) {
      const { top, left } = toolbar.getBoundingClientRect();
      dropDown.style.top = `${top + 40}px`;
      dropDown.style.left = `${left}px`;
    }
  }, [dropDownRef, toolbarRef]);

  useEffect(() => {
    const dropDown = dropDownRef.current;
    const toolbar = toolbarRef.current;

    if (dropDown !== null && toolbar !== null) {
      const handle = event => {
        const target = event.target;
      };
      document.addEventListener('click', handle);

      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, toolbarRef]);

  const formatParagraph = () => {
    if (blockType !== 'paragraph') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    }
  };

  const formatLargeHeading = () => {
    if (blockType !== 'h1') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode('h1'));
        }
      });
    }
  };

  const formatSmallHeading = () => {
    if (blockType !== 'h2') {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode('h2'));
        }
      });
    }
  };

  const formatBulletList = () => {
    if (blockType !== 'ul') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
    }
  };

  const formatNumberedList = () => {
    if (blockType !== 'ol') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND);
    } else {
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
    }
  };

  const handleChange = event => {
    const blockType = event.target.value;

    switch (blockType) {
      case 'ol':
        formatNumberedList();
        break;
      case 'ul':
        formatBulletList();
        break;
      case 'h2':
        formatSmallHeading();
        break;
      case 'h1':
        formatLargeHeading();
        break;
      case 'paragraph':
        formatParagraph();
        break;
      default:
        return null;
    }
  };

  return (
    <Select
      w="125px"
      outline="none"
      overflowY="auto"
      size="sm"
      borderRadius="md"
      borderColor="transparent"
      cursor="pointer"
      bg="rgba(255, 255, 255, 0.1)"
      onChange={handleChange}
      value={blockTypeToBlockName[blockType]}
    >
      <option value="paragraph">
        <Text>Normal</Text>
      </option>
      <option value="h1">
        <Text>Large Heading</Text>
      </option>
      <option value="h2">
        <Text>Small Heading</Text>
      </option>
      <option value="ul">
        <Text>Bullet List</Text>
      </option>
      <option value="ol">
        <Text>Numbered List</Text>
      </option>
    </Select>
  );
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState('paragraph');

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isHighLigth, setIsHighLigth] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          setBlockType(type);
        }
      }
      // Update text format
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsHighLigth(selection.hasFormat('highligth'));
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar();
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        payload => {
          setCanUndo(payload);
          return false;
        },
        LowPriority
      ),
      editor.registerCommand(
        CAN_REDO_COMMAND,
        payload => {
          setCanRedo(payload);
          return false;
        },
        LowPriority
      )
    );
  }, [editor, updateToolbar]);

  return (
    <Stack direction="row" ref={toolbarRef} alignItems="center">
      <Button
        size="sm"
        p="1"
        isDisabled={!canUndo}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND);
        }}
        aria-label="Undo"
      >
        <Icon as={BiUndo} />
      </Button>

      <Button
        size="sm"
        p="1"
        isDisabled={!canRedo}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND);
        }}
        aria-label="Redo"
      >
        <Icon as={BiRedo} />
      </Button>

      <BlockOptionsDropdownList
        editor={editor}
        blockType={blockType}
        toolbarRef={toolbarRef}
      />

      <Divider />

      <Button
        size="sm"
        p="1"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        }}
        bg={isBold ? 'rgba(223, 232, 250, 0.3)' : 'rgba(223, 232, 250, 0.05)'}
        aria-label="Format Bold"
      >
        <Icon as={BsTypeBold} />
      </Button>
      <Button
        size="sm"
        p="1"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        }}
        bg={isItalic ? 'rgba(223, 232, 250, 0.3)' : 'rgba(223, 232, 250, 0.05)'}
        aria-label="Format Italics"
      >
        <Icon as={AiOutlineItalic} />
      </Button>
      <Button
        size="sm"
        p="1"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        }}
        bg={
          isUnderline ? 'rgba(223, 232, 250, 0.3)' : 'rgba(223, 232, 250, 0.05)'
        }
        aria-label="Format Underline"
      >
        <Icon as={MdFormatUnderlined} />
      </Button>
      <Button
        size="sm"
        p="1"
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'highlight');
        }}
        bg={
          isHighLigth ? 'rgba(223, 232, 250, 0.3)' : 'rgba(223, 232, 250, 0.05)'
        }
        aria-label="Insert Code"
      >
        <Icon as={BiHighlight} />
      </Button>
    </Stack>
  );
}
