import React from 'react';
import { Flex } from '@chakra-ui/react';
import Panel from './PanelField';

export default function Panels({ field, nBFieldValue, onValueChange }) {
  return (
    <Flex direction="row" flexWrap="wrap" flex="1" gap="4" w="100%">
      {field.options.map((option, id) => {
        return (
          <Panel
            key={id}
            label={option.value}
            icon={option.icon}
            name={field.name}
            nBFieldValue={nBFieldValue}
            onValueChange={onValueChange}
          />
        );
      })}
    </Flex>
  );
}
