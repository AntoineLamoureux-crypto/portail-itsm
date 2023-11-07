import React from 'react';
import {
  Stack,
  Text,
  Flex,
  Divider,
  Button,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import Tab from '../../../reusable/tab/Tab';
import Field from '../../../reusable/form/TextField';
import EditButton from './EditButton';
import ModifyUserModal from './ModifyUserModal';

export default function Réglages() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tab title="Mon profil" tabH="100%">
      <Flex
        direction="column"
        h="100%"
        w="100%"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            width: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
          },
        }}
      >
        <Stack pr="5px">
          <Stack
            padding="24px"
            borderRadius="6px"
            spacing="24px"
            borderColor="borderColor"
            borderWidth="1px"
          >
            <Stack
              direction="row"
              justify="space-between"
              align="center"
              spacing="24px"
            >
              <Text lineHeight="1.43" fontWeight="bold" fontSize="14px">
                Renseignements personnels
              </Text>

              <Box onClick={onOpen}>
                <EditButton />
              </Box>
            </Stack>
            <Stack direction="row" spacing="24px">
              <Field label="Prénom" value="John" />
              <Field label="Nom" value="Doe" />
            </Stack>

            <Stack direction="row" spacing="24px">
              <Field label="Lieu" value="Québec" />
              <Field
                label="Fuseau horaire"
                value=" (UTC 04:00) Heure Atlantique (Canada)"
              />
            </Stack>
          </Stack>
          <Stack
            padding="24px"
            borderRadius="6px"
            spacing="24px"
            borderColor="borderColor"
            borderWidth="1px"
          >
            <Stack
              direction="row"
              justify="space-between"
              align="center"
              spacing="24px"
            >
              <Text lineHeight="1.43" fontWeight="bold" fontSize="14px">
                Coordonnées
              </Text>
              <Box onClick={onOpen}>
                <EditButton />
              </Box>
            </Stack>
            <Stack direction="row" spacing="24px">
              <Field
                label="Téléphone travail"
                value="(514) 444-5432 Poste 512"
              />
              <Field label="Téléphone mobile" value="(555) 444-5432" />
            </Stack>

            <Stack direction="row" spacing="24px">
              <Field label="Téléphone domicile" value="(555) 555-1234" />
              <Field
                label="Adresse courriel professionnel"
                value="johndoe@mail.com"
              />
            </Stack>
          </Stack>
          <Stack
            padding="24px"
            borderRadius="6px"
            spacing="24px"
            borderColor="borderColor"
            borderWidth="1px"
          >
            <Stack
              direction="row"
              justify="space-between"
              align="center"
              spacing="24px"
            >
              <Text lineHeight="1.43" fontWeight="bold" fontSize="14px">
                Préférences linguistiques
              </Text>
              <Box onClick={onOpen}>
                <EditButton />
              </Box>
            </Stack>
            <Stack direction="row" spacing="24px">
              <Field label="Langue" value="Francais" />
            </Stack>
            <Divider />
            <Text fontSize="sm">
              Cette langue sera utilisée dans l'interface du portail Web et sera
              utilisée pour vous envoyer des communications.
            </Text>
          </Stack>

          <Stack
            padding="24px"
            borderRadius="6px"
            justify="flex-start"
            align="flex-start"
            spacing="24px"
            borderColor="borderColor"
            borderWidth="1px"
            alignSelf="stretch"
          >
            <Text lineHeight="1.43" fontWeight="bold" fontSize="14px">
              Mot de passe
            </Text>
            <Button variant="cyan">Changer le mot de passe</Button>
          </Stack>
        </Stack>
      </Flex>

      <ModifyUserModal isOpen={isOpen} onClose={onClose} />
    </Tab>
  );
}
