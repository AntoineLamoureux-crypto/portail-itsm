import React from 'react';
import { Stack, Text, Radio as RadioC } from '@chakra-ui/react';

export default function Radio({ options, field, onValueChange, nBFieldValue }) {
  return (
    <Stack direction="column" spacing="10px">
      {field.label && (
        <Text fontWeight="bold" fontSize="14px">
          {field.label}
        </Text>
      )}
      {options.map((option, id) => {
        return (
          <Stack
            onClick={() => onValueChange(field.name, option.value)}
            key={id}
          >
            <RadioC
              value={option.value}
              isChecked={nBFieldValue === option.value}
            >
              {option.value}
            </RadioC>
          </Stack>
        );
      })}
    </Stack>
  );
}
