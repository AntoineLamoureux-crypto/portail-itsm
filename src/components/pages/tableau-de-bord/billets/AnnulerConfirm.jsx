import React from 'react';
import { Button, Stack, Text, Center } from '@chakra-ui/react';

export default function AnnulerConfirm({ onClose, setShowAnnulerConfirm }) {
  return (
    <Stack h="3xl" size="5xl" justifyContent="center">
      <Center>
        <Stack direction="column" gap="8">
          <Text fontSize="xx-large" fontWeight="bold">
            Souhaitez-vous vraiment annuler votre requete ?
          </Text>
          <Center>
            <Stack direction="column" w="200px" gap="4">
              <Button variant="cancel" onClick={() => onClose()}>
                Annuler la requête
              </Button>
              <Button
                variant="default"
                onClick={() => setShowAnnulerConfirm(false)}
              >
                Revenir au formulaire
              </Button>
            </Stack>
          </Center>
        </Stack>
      </Center>
    </Stack>
  );
}
