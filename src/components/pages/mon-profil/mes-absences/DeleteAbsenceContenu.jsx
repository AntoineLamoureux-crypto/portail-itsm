import React from 'react';
import { Center, Text } from '@chakra-ui/react';

export default function DeleteAbsenceContenu() {
  return (
    <Center textAlign="center">
      <Text variant="normal">
        Êtes-vous sûr ? <br /> Vous ne pourrez pas annuler cette action par la
        suite.
      </Text>
    </Center>
  );
}
