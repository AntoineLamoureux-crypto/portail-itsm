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

export default function Réinitialisation() {
  const [state, setState] = useState('reset-password');
  const navigate = useNavigate();

  function updateState(state) {
    setState(state);
  }
  return (
    <HStack maxW="100vw" maxH="100vh">
      {state === 'reset-password' ? (
        <Stack
          paddingY="32px"
          justify="flex-end"
          align="center"
          spacing="314px"
          w="40%"
        >
          <Stack
            justify="flex-start"
            align="flex-start"
            spacing="32px"
            width="384px"
          >
            <Text fontSize="24px" fontWeight="700">
              Réinitialiser mon mot de passe
            </Text>
            <Text
              lineHeight="1.43"
              fontWeight="regular"
              fontSize="14px"
              width="384px"
            >
              Veuillez saisir votre nom d'utilisateur. Une fois envoyé, une
              demande de réinitialisation sera envoyée à l'adresse e-mail
              associée à votre compte.
            </Text>
            <Text lineHeight="1.43" fontWeight="bold" fontSize="14px">
              Nom d’utilisateur
            </Text>
            <InputGroup size="lg">
              <Input size="lg" />
            </InputGroup>
            <Button
              size="lg"
              width="384px"
              height="48px"
              textColor="white"
              onClick={() => updateState('reset-password-envoyé')}
            >
              Envoyer
            </Button>
          </Stack>
          <Stack
            direction="row"
            align="center"
            spacing="4px"
            pos="absolute"
            bottom="10"
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => navigate('/connexion')}
          >
            <Icon as={FiArrowLeft} />
            <Text lineHeight="1.43" fontWeight="regular" fontSize="14px">
              Retour à l’accueil
            </Text>
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
            >
              <Text fontSize="24px" fontWeight="700">
                Votre demande est envoyé.
              </Text>
              <Text
                lineHeight="1.43"
                fontWeight="regular"
                fontSize="14px"
                width="384px"
              >
                Votre demande de changement de mot de passe a été acheminée au
                centre de services. La procédure de changement de mot de passe
                sera envoyée sous peu à l'adresse courriel associée à votre
                compte.
              </Text>
              <Stack
                direction="row"
                spacing="4px"
                justifyContent="center"
                alignItems="center"
              >
                <Icon as={FiArrowLeft} />
                <Text
                  lineHeight="1.43"
                  fontWeight="regular"
                  fontSize="14px"
                  cursor="pointer"
                  _hover={{ textDecoration: 'underline' }}
                  onClick={() => navigate('/connexion')}
                >
                  Retour à l’accueil
                </Text>
              </Stack>
            </Stack>
          </motion.div>
        </Stack>
      )}
      <Stack w="60%">
        {state === 'reset-password' ? (
          <Box>
            <Image src={loginImage} objectFit="cover" maxH="100vh" />
          </Box>
        ) : (
          <motion.div
            animate={{
              backgroundColor: ['	hsl(220, 26%, 14%)', 'hsl(254, 41%, 34%)'],
            }}
          >
            <Image src={loginImage} objectFit="cover" maxH="100vh" />
          </motion.div>
        )}
      </Stack>
    </HStack>
  );
}
