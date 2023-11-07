import React from 'react';
import { Stack, Input, InputGroup, Text as TextC } from '@chakra-ui/react';

export default function Text({ nBFieldValue, onValueChange, field }) {
  return (
    <Stack gap="2" w="100%">
      <TextC fontWeight="bold" fontSize="14px">
        {field.label}
      </TextC>
      {field.helperText && (
        <TextC fontWeight="normal" fontSize="13px">
          {field.helperText}
        </TextC>
      )}
      <InputGroup>
        <Input
          type="text"
          value={nBFieldValue}
          onChange={event => onValueChange(field.name, event.target.value)}
        />
      </InputGroup>
    </Stack>
  );
}
