import React from 'react';
import { Icon, Text, Stack } from '@chakra-ui/react';

export default function Panel({
  fieldName,
  icon,
  label,
  nBFieldValue,
  onValueChange,
}) {
  return (
    <Stack
      direction="column"
      w="150px"
      h="125px"
      p="3"
      borderRadius="lg"
      borderWidth="1px"
      borderColor="borderColor"
      cursor="pointer"
      textAlign="center"
      justify="center"
      color={nBFieldValue === label ? 'white' : 'darkTextColor'}
      bgColor={nBFieldValue === label ? 'panelInputBg' : 'transparent'}
      onClick={() => onValueChange(fieldName, label)}
    >
      <Stack>
        <Icon as={icon} fontSize="40px" alignSelf="center" />
        <Text fontSize="15px" fontWeight="semibold" alignSelf="center">
          {label}
        </Text>
      </Stack>
    </Stack>
  );
}
