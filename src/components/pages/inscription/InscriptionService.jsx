import React, { useState } from 'react';
import {
  Text,
  Stack,
  Input,
  InputGroup,
  Button,
  HStack,
  Image,
  Icon,
  Box,
} from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../../images/Dazzm_shape_expand_2.svg';

export default function InscriptionService() {
  const [state, setState] = useState('inscription');
  const navigate = useNavigate();

  function updateState(state) {
    setState(state);
  }

  return (
    <HStack w="100vw" maxH="100vh">
      {state === 'inscription' ? (
        <Stack align="center" w="40%">
          <Stack spacing="32px" width="384px" maxWidth="100%">
            <Stack spacing="16px">
              <Text fontSize="24px" fontWeight="700">
                Inscription au service
              </Text>
              <Text
                lineHeight="1.43"
                fontWeight="regular"
                fontSize="14px"
                width="384px"
                maxWidth="100%"
              >
                Veuillez choisir un nom d’utilisateur et cliquer sur envoyer.
              </Text>
            </Stack>
            <Stack spacing="24px">
              <Stack width="384px" maxWidth="100%" spacing="16px">
                <Stack
                  direction="row"
                  align="center"
                  spacing="0px"
                  alignSelf="stretch"
                >
                  <Text lineHeight="1.43" fontWeight="bold" fontSize="14px">
                    Nom d’utilisateur
                  </Text>
                </Stack>
                <InputGroup size="lg">
                  <Input size="lg" />
                </InputGroup>
              </Stack>
              <Button
                size="lg"
                bgColor="gray.400"
                width="384px"
                height="48px"
                maxWidth="100%"
                _hover={{ bgColor: 'cyan.700' }}
                onClick={() => updateState('inscription-envoyé')}
              >
                Envoyer
              </Button>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            align="center"
            spacing="4px"
            bottom={10}
            pos="absolute"
            cursor="pointer"
            _hover={{ textDecoration: 'underline' }}
          >
            <Icon as={FiArrowLeft} />
            <Stack spacing="4px">
              <Stack direction="row" align="center">
                <Text lineHeight="1.43" fontWeight="regular" fontSize="14px">
                  Retour à l’accueil
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <Stack align="center" w="40%">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Stack
              justify="flex-start"
              align="flex-start"
              spacing="24px"
              width="384px"
              maxWidth="100%"
            >
              <Stack justify="flex-start" align="flex-start" spacing="24px">
                <Text fontSize="24px" fontWeight="700">
                  Votre demande est envoyé.
                </Text>
                <Text
                  lineHeight="1.43"
                  fontWeight="regular"
                  fontSize="14px"
                  width="384px"
                  maxWidth="100%"
                >
                  Votre demande d'enregistrement a été acheminée au Centre de
                  services.
                </Text>
              </Stack>
              <Stack
                direction="row"
                justify="flex-start"
                align="center"
                spacing="4px"
                cursor="pointer"
                _hover={{ textDecoration: 'underline' }}
              >
                <Icon as={FiArrowLeft} />
                <Stack justify="flex-start" align="flex-start" spacing="4px">
                  <Stack direction="row" justify="flex-start" align="center">
                    <Text
                      lineHeight="1.43"
                      fontWeight="regular"
                      fontSize="14px"
                      onClick={() => navigate('/connexion')}
                    >
                      Retour à l’accueil
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </motion.div>
        </Stack>
      )}
      <Stack w="60%">
        {state === 'inscription' ? (
          <Box background="gray.800">
            <Image src={loginImage} objectFit="cover" maxH="100vh" />
          </Box>
        ) : (
          <motion.div
            animate={{
              backgroundColor: ['hsl(220, 26%, 14%)', 'hsl(190, 88%, 27%)'],
            }}
          >
            <Image src={loginImage} objectFit="cover" maxH="100vh" />
          </motion.div>
        )}
      </Stack>
    </HStack>
  );
}
