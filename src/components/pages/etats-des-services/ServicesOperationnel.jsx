import React from 'react';
import { Stack, Icon, Text } from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';

export default function ServicesOperationnel() {
  return (
    <Stack p="5" borderColor="gray.300" borderWidth="1px" borderRadius="8">
      <Stack direction="row" justify="flex-start" align="center" spacing="16px">
        <Icon as={FiCheckCircle} color="green.500" />
        <Text variant="subtitle">Tous les services sont opérationnels.</Text>
      </Stack>
    </Stack>
  );
}
