import React from 'react';
import { Icon, useColorMode, Button } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} bg="primary.300">
      <Icon
        cursor="pointer"
        fontSize="lg"
        color="text.default"
        as={colorMode === 'light' ? FiSun : FiMoon}
      />
    </Button>
  );
}
