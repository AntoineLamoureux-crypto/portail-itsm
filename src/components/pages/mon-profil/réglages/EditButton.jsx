import React from 'react';
import { Stack, Center, Text, Icon } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

export default function EditButton() {
  return (
    <Stack
      direction="row"
      borderWidth="1px"
      p="2"
      px="3"
      borderRadius="full"
      cursor="pointer"
    >
      <Center gap="2">
        <Text lineHeight="1.33" fontWeight="regular" fontSize="12px">
          Modifier
        </Text>

        <Icon as={FiEdit} />
      </Center>
    </Stack>
  );
}
