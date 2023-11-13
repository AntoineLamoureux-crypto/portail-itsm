import React from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_COLOR_COMMAND } from './CustomColorPlugin';
import { Select, Text } from '@chakra-ui/react';

export const CustomColorActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = event => {
    const color = event.target.value;
    editor.dispatchCommand(FORMAT_COLOR_COMMAND, color);
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
      onChange={handleOnClick}
    >
      <option value="white">
        <Text>White</Text>
      </option>
      <option value="red">
        <Text>Red</Text>
      </option>
      <option value="black">
        <Text>Black</Text>
      </option>
    </Select>
  );
};
