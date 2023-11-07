import React, { useState } from 'react';
import { Icon, Stack, Text } from '@chakra-ui/react';
import { FiChevronDown, FiX } from 'react-icons/fi';

export default function ShowDropdown({ initialValue, children, label }) {
  const [show, setShow] = useState(initialValue || false);

  return (
    <Stack gap="2">
      <Stack justifyContent="space-between" direction="row" py="2">
        <Text fontWeight="bold" fontSize="lg">
          {label}
        </Text>
        <Icon
          onClick={() => setShow(!show)}
          as={!show ? FiChevronDown : FiX}
          fontSize="25px"
          cursor="pointer"
          bg="transparent"
        />
      </Stack>
      {show && <Stack gap="2">{children}</Stack>}
    </Stack>
  );
}
