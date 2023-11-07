import React from 'react';
import { Stack, Text, InputGroup, Input } from '@chakra-ui/react';

export default function DateField({ onValueChange, field, nBFieldValue }) {
  return (
    <Stack gap="2">
      <Stack direction="row">
        <Text fontWeight="bold" fontSize="14px">
          {field.label}
        </Text>
        <Text fontWeight="normal" fontSize="14px">
          (facultatif)
        </Text>
      </Stack>
      <InputGroup>
        <Input
          type="date"
          value={nBFieldValue}
          onChange={event => onValueChange(field.name, event.target.value)}
        />
      </InputGroup>
    </Stack>
  );
}
