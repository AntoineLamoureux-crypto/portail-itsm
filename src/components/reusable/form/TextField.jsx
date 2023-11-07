import React from 'react';
import { Stack, Text } from '@chakra-ui/react';

export default function TextField({ label, value }) {
  return (
    <Stack justify="flex-start" align="flex-start" flex="1">
      <Text fontWeight="bold" fontSize="12px">
        {label}
      </Text>
      <Text lineHeight="1.43" fontWeight="regular" fontSize="14px">
        {value}
      </Text>
    </Stack>
  );
}
