import { Button, Icon, Stack } from '@chakra-ui/react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_ELEMENT_COMMAND } from 'lexical';
import { FiAlignCenter, FiAlignLeft, FiAlignRight } from 'react-icons/fi';

export const CustomAlignActions = () => {
  const [editor] = useLexicalComposerContext();

  const actions = [
    { icon: FiAlignLeft, value: 'Left' },
    { icon: FiAlignCenter, value: 'Center' },
    { icon: FiAlignRight, value: 'Right' },
  ];

  const handleOnClick = formatType => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, formatType);
  };

  return (
    <Stack direction="row">
      {actions.map(action => {
        return (
          <Button
            size="sm"
            p="1"
            borderRadius="sm"
            onClick={() => handleOnClick(action.value.toLowerCase())}
          >
            <Icon as={action.icon} />
          </Button>
        );
      })}
    </Stack>
  );
};
