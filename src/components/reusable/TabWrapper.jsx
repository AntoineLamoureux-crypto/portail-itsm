import React from 'react';
import { motion } from 'framer-motion';

export default function TabWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ height: '100%', width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
