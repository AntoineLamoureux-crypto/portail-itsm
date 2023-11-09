import { useEffect } from 'react';
import { UNDO_COMMAND, REDO_COMMAND } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Button, Icon, Stack } from '@chakra-ui/react';
import { BiRedo, BiUndo } from 'react-icons/bi';

export const CustomHistoryActions = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);
  return (
    <Stack direction="row">
      <Button
        size="sm"
        p="1"
        borderColor="borderColor"
        bg="rgba(255, 255, 255, 0.05)"
        borderRadius="sm"
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
      >
        <Icon as={BiUndo} />
      </Button>
      <Button
        size="sm"
        p="1"
        borderRadius="sm"
        borderColor="borderColor"
        bg="rgba(255, 255, 255, 0.05)"
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
      >
        <Icon as={BiRedo} />
      </Button>
    </Stack>
  );
};
