import { Button, Icon, Stack } from '@chakra-ui/react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_TEXT_COMMAND } from 'lexical';

import {
  BiBold,
  BiCode,
  BiHighlight,
  BiItalic,
  BiUnderline,
} from 'react-icons/bi';

export const CustomTextActions = () => {
  const [editor] = useLexicalComposerContext();

  const actions = [
    { icon: BiBold, value: 'Bold' },
    { icon: BiItalic, value: 'Italic' },
    { icon: BiUnderline, value: 'Underline' },
    { icon: BiCode, value: 'Code' },
    { icon: BiHighlight, value: 'Highlight' },
  ];

  const handleOnClick = formatType => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  return (
    <Stack
      direction="row"
      size="sm"
      cursor="pointer"
      w="fit-content"
      borderRadius="sm"
    >
      {actions.map(action => {
        return (
          <Button
            onClick={() => handleOnClick(action.value.toLowerCase())}
            size="sm"
            p="1"
            borderRadius="sm"
          >
            <Icon as={action.icon} />
          </Button>
        );
      })}
    </Stack>
  );
};
