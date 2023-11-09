import React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function MobilePageWrapper({ children }) {
  return (
    <Flex
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '2px',
        },
        '&::-webkit-scrollbar-track': {
          width: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
        },
      }}
      overflowX="hidden"
      h="100vh"
      w="100%"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </Flex>
  );
}
