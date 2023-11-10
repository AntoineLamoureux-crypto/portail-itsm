import React from 'react';
import { Divider, Stack, Image, Text, useColorMode } from '@chakra-ui/react';
import TextEditor from '../../editor/TextEditor';

export default function BilletDiscussion() {
  const { colorMode } = useColorMode();
  return (
    <Stack w="100%" h="100%" borderRadius="default" gap="0">
      <Stack gap="0" h="100%">
        <Stack
          h="fit-content"
          minH="300px"
          maxH="600px"
          bg={colorMode === 'dark' ? 'hsla(223, 24%, 17%, 1)' : 'white'}
          p="5"
          gap="0"
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '2px',
            },
            '&::-webkit-scrollbar-track': {
              width: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
            },
          }}
        >
          <Stack direction="row" px="40px" py="2" h="fit-content">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556471.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
            <Stack direction="column">
              <Stack
                bg="green.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomRightRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="green.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Nathalie Lachapelle
                </Text>
                <Text
                  fontSize="12px"
                  textColor="green.900"
                  fontWeight="semibold"
                >
                  Merci de nous avoir contacter. Votre ordinateur est
                  présentement en transit
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                16 Juillet, 9:21 AM
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="end"
            px="40px"
            py="2"
            h="fit-content"
          >
            <Stack direction="column">
              <Stack
                bg="gray.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomLeftRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Antoine Lamoureux
                </Text>
                <Text
                  fontSize="12px"
                  textColor="green.900"
                  fontWeight="semibold"
                >
                  Merci ! Je devrais le recevoir quand ?
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                16 Juillet, 4:55 PM
              </Text>
            </Stack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556520.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
          </Stack>

          <Stack direction="row" px="40px" py="2" h="fit-content">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
            <Stack direction="column">
              <Stack
                bg="blue.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomRightRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="blue.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Pierre Lamoureux
                </Text>
                <Text
                  fontSize="12px"
                  textColor="blue.900"
                  fontWeight="semibold"
                >
                  Bonjour Antoine, laissez-nous vérifier!
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                17 Juillet, 8:15 AM
              </Text>
            </Stack>
          </Stack>
          <Stack direction="row" px="40px" py="2" h="fit-content">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556471.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
            <Stack direction="column">
              <Stack
                bg="green.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomRightRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="green.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Nathalie Lachapelle
                </Text>
                <Text
                  fontSize="12px"
                  textColor="green.900"
                  fontWeight="semibold"
                >
                  Normalement d'ici le 23 Juillet AM
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                17 Juillet, 9:02 AM
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="end"
            px="40px"
            py="2"
            h="fit-content"
          >
            <Stack direction="column">
              <Stack
                bg="gray.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomLeftRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Antoine Lamoureux
                </Text>
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="semibold"
                >
                  Merci pour les réponses rapides !
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                17 Juillet, 1:34 PM
              </Text>
            </Stack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556520.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="end"
            px="40px"
            py="2"
            h="fit-content"
          >
            <Stack direction="column">
              <Stack
                bg="gray.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomLeftRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Antoine Lamoureux
                </Text>
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="semibold"
                >
                  Merci pour les réponses rapides !
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                17 Juillet, 1:34 PM
              </Text>
            </Stack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556520.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="end"
            px="40px"
            py="2"
            h="fit-content"
          >
            <Stack direction="column">
              <Stack
                bg="gray.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomLeftRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Antoine Lamoureux
                </Text>
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="semibold"
                >
                  Merci pour les réponses rapides !
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                17 Juillet, 1:34 PM
              </Text>
            </Stack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556520.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="end"
            px="40px"
            py="2"
            h="fit-content"
          >
            <Stack direction="column">
              <Stack
                bg="gray.100"
                px="2"
                pt="1"
                pb="2"
                maxW="350px"
                borderTopRadius="15px"
                borderBottomLeftRadius="15px"
                h="fit-content"
                gap="0"
              >
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="normal"
                  pb="1"
                >
                  Antoine Lamoureux
                </Text>
                <Text
                  fontSize="12px"
                  textColor="gray.900"
                  fontWeight="semibold"
                >
                  Merci pour les réponses rapides !
                </Text>
              </Stack>
              <Text
                fontSize="12px"
                textColor="darkTextColor"
                fontWeight="normal"
              >
                17 Juillet, 1:34 PM
              </Text>
            </Stack>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5556/5556520.png"
              h="35px"
              borderRadius="full"
              alignSelf="flex-end"
              mb="5px"
            />
          </Stack>
        </Stack>

        <Divider w="100%" />

        <Stack maxH="500px" maxW="500px" h="fit-content">
          <TextEditor />
        </Stack>
      </Stack>
    </Stack>
  );
}
