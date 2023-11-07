import React from 'react';
import { Stack, Text, Tag } from '@chakra-ui/react';

export default function CommuniquésContenu() {
  return (
    <Stack p="4" overflow="clip" gap="2" h="fit-content">
      <Stack gap="0">
        <Stack direction="row" justify="space-between">
          <Text variant="thin" fontSize="xs">
            Publié le 15 juillet 2023
          </Text>
          <Tag>Ressources humaines</Tag>
        </Stack>
        <Text fontSize="md" fontWeight="semibold">
          Vacances estivales 2023
        </Text>
      </Stack>
      <Text fontSize="xs">
        Pour demander des congés pendant cette période, veuillez vous connecter
        à notre portail employé et remplir le formulaire de demande de congés.
        Nous ferons de notre mieux pour accéder à vos préférences, tout en
        tenant compte des contraintes opérationnelles de l'entreprise. Veuillez
        soumettre vos demandes avant la date limite du [date limite de demande].
      </Text>
    </Stack>
  );
}
