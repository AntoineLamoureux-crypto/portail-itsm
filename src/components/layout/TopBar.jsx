import React from 'react';
import {
  Stack,
  HStack,
  Text,
  Icon,
  Box,
  useColorMode,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Divider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import {
  FiBell,
  FiFileText,
  FiLogOut,
  FiMoon,
  FiSun,
  FiUser,
} from 'react-icons/fi';
import { AiOutlineQuestion } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';

export default function TopBar() {
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack bg="topBarBg" alignItems="center">
      <Stack maxW="1600px" p="4" w="100%">
        <HStack justify="space-between" alignItems="center">
          <Text fontSize="25px" fontWeight="bold">
            DAZZM
          </Text>
          <HStack h="60px">
            <Stack direction="row" gap="3">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                borderColor="#354877"
                borderWidth="1px"
                w="40px"
                h="40px"
                borderRadius="full"
                p="2"
                cursor="pointer"
                _hover={{ textColor: 'white', bg: 'gray.800' }}
              >
                <Icon as={AiOutlineQuestion} />
              </Stack>
              <Popover w="450px" isLazy={true}>
                <PopoverTrigger>
                  <Stack
                    w="fit-content"
                    h="40px"
                    direction="row"
                    alignItems="center"
                    borderColor="#354877"
                    borderWidth="1px"
                    borderRadius="full"
                    p="2"
                    cursor="pointer"
                    _hover={{ textColor: 'white', bg: 'gray.800' }}
                  >
                    <Icon as={FiBell} />
                    <Box
                      bg="#037F36"
                      h="18px"
                      w="19px"
                      borderRadius="10px"
                      position="sticky"
                    >
                      <Text
                        position="absolute"
                        right="0"
                        top="1px"
                        bottom="0"
                        left="6.5px"
                        fontSize="11px"
                        textColor="white"
                        fontWeight="semibold"
                      >
                        2
                      </Text>
                    </Box>
                  </Stack>
                </PopoverTrigger>
                <PopoverContent bg="tabBg">
                  <PopoverCloseButton />
                  <PopoverHeader>
                    <Text fontSize="sm" fontWeight="semibold">
                      Mes Notifications
                    </Text>
                  </PopoverHeader>
                  <PopoverBody p="0" borderRadius="default">
                    <Stack gap="0">
                      <Stack
                        p="2"
                        direction="row"
                        cursor="pointer"
                        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <Icon
                          as={FiFileText}
                          fontSize="x-large"
                          color="blue.500"
                        />
                        <Stack w="100%" mt="5px">
                          <Stack gap="0">
                            <Text fontSize="xs">Assignation de billet</Text>

                            <Text
                              lineHeight="1.5"
                              fontWeight="semibold"
                              fontSize="16px"
                            >
                              Le billet #343cd vous a ete assigne !
                            </Text>

                            <Text fontSize="xs">
                              Pierre Lamoureux vous a assigner ce billet
                            </Text>
                            <Text fontSize="xs" textColor="GrayText">
                              Il y a 20 minutes
                            </Text>
                          </Stack>
                        </Stack>
                      </Stack>
                      <Divider />
                      <Stack
                        p="2"
                        direction="row"
                        cursor="pointer"
                        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <Icon
                          as={BiError}
                          fontSize="x-large"
                          color="orange.400"
                        />
                        <Stack w="100%" mt="5px">
                          <Stack gap="0">
                            <Text fontSize="xs">Interuption de service</Text>

                            <Text
                              lineHeight="1.5"
                              fontWeight="semibold"
                              fontSize="16px"
                            >
                              Routeur #2281 ne fonctionne plus
                            </Text>

                            <Text fontSize="xs">Creer par Eric Lapointe</Text>
                            <Text fontSize="xs" textColor="GrayText">
                              Il y a 2 heures
                            </Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <Stack
                w="40px"
                h="40px"
                justifyContent="center"
                direction="row"
                alignItems="center"
                borderColor="#354877"
                borderWidth="1px"
                borderRadius="full"
                p="2"
                cursor="pointer"
                _hover={{ textColor: 'white', bg: 'gray.800' }}
                onClick={toggleColorMode}
              >
                <Icon as={colorMode === 'light' ? FiMoon : FiSun} />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                borderColor="#354877"
                borderWidth="1px"
                borderRadius="full"
                py="1"
                px="3"
                h="40px"
                onClick={() => navigate('/compte/reglages')}
                cursor="pointer"
                _hover={{ textColor: 'white', bg: 'gray.800' }}
              >
                <Icon as={FiUser} />
                <Text fontSize="sm" fontWeight="bold">
                  Antoine
                </Text>
              </Stack>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              gap="1"
              _hover={{ textColor: 'red.700' }}
              textColor="red.600"
              cursor="pointer"
              pl="1"
            >
              <Icon as={FiLogOut} fontSize="xl" fontWeight="normal" />
              <Text fontWeight="bold" fontSize="15px">
                Déconnexion
              </Text>
            </Stack>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  );
}
