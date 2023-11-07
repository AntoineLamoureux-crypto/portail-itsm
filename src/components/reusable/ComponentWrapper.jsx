import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function ComponentWrapper({ children, direction }) {
  return (
    <Flex
      w="100%"
      h="100%"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          width: '10px',
          marginTop: '15px',
          marginBottom: '15px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '5px',
        },
      }}
      overflowX="hidden"
      direction={direction ? direction : 'row'}
    >
      {children}
    </Flex>
  );
}
