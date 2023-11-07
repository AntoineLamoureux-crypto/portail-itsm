import React from 'react';
import { Stack, Tag, TagLabel } from '@chakra-ui/react';

export default function ListFilter({
  options,
  currentOption,
  setCurrentOption,
}) {
  return (
    <Stack
      spacing="16px"
      alignSelf="stretch"
      background="tabBg"
      p="20px"
      w="325px"
      h="fit-content"
      borderRadius="default"
      borderColor="borderColor"
      borderWidth="1px"
    >
      {options.map((filtre, id) => (
        <Tag
          key={id}
          size="md"
          cursor="pointer"
          p="7px"
          w="100%"
          textColor={currentOption === filtre ? 'white' : 'default'}
          bg={currentOption === filtre ? 'selected' : 'none'}
          onClick={() => setCurrentOption(filtre)}
        >
          <TagLabel>{filtre}</TagLabel>
        </Tag>
      ))}
    </Stack>
  );
}
