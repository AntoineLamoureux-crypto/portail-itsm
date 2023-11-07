import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/react';

export default function TagFiltre({ label }) {
  return (
    <Tag cursor="pointer" _hover={{ bg: 'cyan.700', textColor: 'white' }}>
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
}
