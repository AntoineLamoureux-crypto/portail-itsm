import React from 'react';
import PageWrapper from '../../reusable/PageWrapper';
import {
  Icon,
  Image,
  Stack,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  Button,
} from '@chakra-ui/react';
import { FiMapPin, FiUser } from 'react-icons/fi';
import { BiTime } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { IoMdNotificationsOff } from 'react-icons/io';
import { MdDateRange, MdModeEdit } from 'react-icons/md';
import TextField from '../../reusable/form/TextField';
import MesAbsences from './mes-absences/MesAbsences';

export default function MonProfil() {
  return (
    <PageWrapper>
      <Stack direction="column" w="100%" h="100%" gap="4">
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" w="100%" h="100%" gap="4">
            <Stack alignItems="center" justifyContent="center">
              <Image
                src="https://anthoncode.com/wp-content/uploads/2021/12/spiderman-no-way-home-768x768.png?is-pending-load=1"
                h="125px"
                borderRadius="15px"
              />
            </Stack>

            <Stack gap="0">
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap="4"
              >
                <Text fontSize="xx-large" fontWeight="bold">
                  Antoine Lamoureux
                </Text>
                <Stack
                  direction="row"
                  gap="1"
                  justifyContent="center"
                  alignItems="center"
                  pt="10px"
                >
                  <Icon as={FiMapPin} />
                  <Text fontSize="sm" fontWeight="semibold">
                    Montréal, Québec
                  </Text>
                </Stack>
              </Stack>
              <Stack>
                <Text fontWeight="semibold" color="cyan.500">
                  Service Technique
                </Text>
                <Stack direction="row" alignItems="center">
                  <Icon as={BiTime} fontSize="20px" />
                  <Text fontSize="15px" fontWeight="normal">
                    (UTC 04:00) Heure Atlantique (Canada)
                  </Text>
                </Stack>
                <Stack direction="row" alignItems="center">
                  <Icon as={HiOutlineMail} fontSize="20px" />
                  <Text fontSize="15px" fontWeight="normal">
                    johndoe@mail.com
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Button
            leftIcon={<MdModeEdit />}
            bg="transparent"
            borderColor="#354877"
            _hover={{ textColor: 'white', bg: 'gray.800' }}
            borderWidth="1px"
            textColor=""
            p="3"
            size="md"
          >
            <Text fontWeight="semibold" fontSize="13px">
              Modifier
            </Text>
          </Button>
        </Stack>
        <Stack w="100%" h="100%">
          <Tabs h="100%">
            <TabList>
              <Tab p="3">
                <Stack direction="row" alignItems="center">
                  <Icon as={FiUser} fontSize="xl" />
                  <Text>Mon Profil</Text>
                </Stack>
              </Tab>
              <Tab p="3">
                <Stack direction="row" alignItems="center">
                  <Icon as={MdDateRange} fontSize="xl" />
                  <Text>Mes Absences</Text>
                </Stack>
              </Tab>
              <Tab p="3">
                <Stack direction="row" alignItems="center">
                  <Icon as={IoMdNotificationsOff} fontSize="xl" />
                  <Text>Préférences de notifications</Text>
                </Stack>
              </Tab>
            </TabList>

            <TabPanels h="100%">
              <TabPanel px="0" overflowY="clip">
                <Stack direction="row" w="100%">
                  <Stack
                    direction="column"
                    gap="4"
                    justifyContent="space-between"
                  >
                    <Stack
                      bg="tabBg"
                      borderRadius="default"
                      spacing="12px"
                      borderColor="borderColor"
                      borderWidth="1px"
                      h="100%"
                    >
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        lineHeight="initial"
                        pt="2"
                        pl="3"
                      >
                        Coordonnées
                      </Text>
                      <Divider borderColor="borderColor" />
                      <Stack px="3" pb="3">
                        <TextField
                          label="Téléphone travail"
                          value="(514) 444-5432 Poste 512"
                        />
                        <TextField
                          label="Téléphone domicile"
                          value="(555) 555-1234"
                        />
                        <TextField
                          label="Téléphone mobile"
                          value="(555) 444-5432"
                        />
                      </Stack>
                    </Stack>
                    <Stack
                      bg="tabBg"
                      borderRadius="default"
                      spacing="12px"
                      borderColor="borderColor"
                      borderWidth="1px"
                    >
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        lineHeight="initial"
                        pt="2"
                        pl="3"
                      >
                        Préférences linguistiques
                      </Text>
                      <Divider borderColor="borderColor" />

                      <Stack gap="1" px="3" pb="3">
                        <TextField label="Langue" value="Francais" />
                        <Text fontSize="13px" fontWeight="semibold">
                          Cette langue sera utilisée dans l'interface du portail
                          Web et sera utilisée pour vous envoyer des
                          communications.
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack
                    bg="tabBg"
                    borderRadius="default"
                    spacing="12px"
                    h="fit-content"
                    borderColor="borderColor"
                    borderWidth="1px"
                    w="300px"
                  >
                    <Text
                      fontWeight="semibold"
                      fontSize="lg"
                      lineHeight="initial"
                      px="3"
                      pt="2"
                      pl="3"
                    >
                      Mot de passe
                    </Text>
                    <Divider borderColor="borderColor" />

                    <Stack px="3" pb="3">
                      <Button variant="default" w="fit-content" size="sm">
                        Change le mot de passe
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </TabPanel>
              <TabPanel px="0" maxW="700px">
                <MesAbsences />
              </TabPanel>
              <TabPanel maxW="700px">Préférences de notifications</TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </PageWrapper>
  );
}
