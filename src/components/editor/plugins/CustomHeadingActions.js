import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { HiMenuAlt1 } from 'react-icons/hi';
import { Stack } from '@chakra-ui/react';
import { $getSelection, $isRangeSelection } from 'lexical';
import { $setBlocksType } from '@lexical/selection';
import { $createHeadingNode } from '@lexical/rich-text';

export const CustomHeadingActions = () => {
  const [editor] = useLexicalComposerContext();

  const actions = [
    { icon: HiMenuAlt1, value: 'h1' },
    { icon: HiMenuAlt1, value: 'h2' },
    { icon: HiMenuAlt1, value: 'h3' },
    { icon: HiMenuAlt1, value: 'h4' },
    { icon: HiMenuAlt1, value: 'h5' },
  ];

  const handleOnClick = value => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(value));
      }
    });
  };

  return (
    <Stack direction="row">
      {actions.map(action => {
        return (
          <button
            key={action.value}
            onClick={() => handleOnClick(action.value)}
            cursor="pointer"
          >
            {action.value}
          </button>
        );
      })}
    </Stack>
  );
};
