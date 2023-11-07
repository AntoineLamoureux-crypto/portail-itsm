import React from 'react';
import { Divider, Stack, Text } from '@chakra-ui/react';

export default function QuickActions() {
  return (
    <Stack minW="200px" w="200px">
      <Text fontWeight="bold" fontSize="x-large">
        Liens rapides
      </Text>
      <Stack pt="2" gap="4">
        <Text
          textColor="#4387CD"
          cursor="pointer"
          direction="row"
          fontSize="sm"
          fontWeight="normal"
          _hover={{ textDecor: 'underline', color: '#276acc' }}
        >
          Lien rapide 1
        </Text>
        <Divider borderColor="#D1E7F8" />
        <Text
          textColor="#4387CD"
          cursor="pointer"
          direction="row"
          fontSize="sm"
          fontWeight="normal"
          _hover={{ textDecor: 'underline', color: '#276acc' }}
        >
          Lien rapide 2
        </Text>
        <Divider borderColor="#D1E7F8" />
        <Text
          textColor="#4387CD"
          cursor="pointer"
          direction="row"
          fontSize="sm"
          fontWeight="normal"
          _hover={{ textDecor: 'underline', color: '#276acc' }}
        >
          Modifier mon mot de passe
        </Text>
        <Divider borderColor="#D1E7F8" />
        <Text
          textColor="#4387CD"
          cursor="pointer"
          direction="row"
          fontSize="sm"
          fontWeight="normal"
          _hover={{ textDecor: 'underline', color: '#276acc' }}
        >
          Personaliser mon portail
        </Text>

        <Divider borderColor="#D1E7F8" />
        <Text
          textColor="#4387CD"
          cursor="pointer"
          direction="row"
          fontSize="sm"
          fontWeight="normal"
          _hover={{ textDecor: 'underline', color: '#276acc' }}
        >
          Modifier la langue
        </Text>
        <Divider borderColor="#D1E7F8" />
        <Text
          textColor="#4387CD"
          cursor="pointer"
          direction="row"
          fontSize="sm"
          fontWeight="normal"
          _hover={{ textDecor: 'underline', color: '#276acc' }}
        >
          Wiki
        </Text>
      </Stack>
    </Stack>
  );
}
