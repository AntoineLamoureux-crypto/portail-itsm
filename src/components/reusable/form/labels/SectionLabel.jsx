import React from 'react';
import { Stack, Tag, TagLabel } from '@chakra-ui/react';

export default function SectionLabel({ label }) {
  return (
    <Stack gap="4">
      <Tag w="fit-content" bgColor="cyan.900" size="md">
        <TagLabel color="white">{label}</TagLabel>
      </Tag>
    </Stack>
  );
}
