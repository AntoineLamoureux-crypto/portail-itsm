import React from 'react';
import { Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function PageWrapper({ children }) {
  return (
    <Stack
      overflowY="hidden"
      overflowX="hidden"
      h="100%"
      w="100%"
      maxW="1350px"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ height: '100%', width: '100%' }}
      >
        {children}
      </motion.div>
    </Stack>
  );
}
