import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function PanelWrapper({ children }) {
  return (
    <Flex flexWrap="wrap" direction="row" gap="4" w="100%">
      {children}
    </Flex>
  );
}
