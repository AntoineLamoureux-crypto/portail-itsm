import React from 'react';
import {
  Stack,
  HStack,
  Text,
  Icon,
  Image,
  Box,
  useColorMode,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { FiBell, FiLogOut, FiMoon, FiSun, FiUser } from 'react-icons/fi';
import { AiOutlineQuestion } from 'react-icons/ai';

import logo_dark from '../../images/Custom_Logo_Octopus_Dark.png';
import logo_light from '../../images/Custom_Logo_Octopus_Light.png';

export default function TopBar() {
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack p="4" bg="topBarBg">
      <HStack justify="space-between" alignItems="center">
        {/*<Image
          src={colorMode === 'light' ? logo_dark : logo_light}
          h="60px"
          w={colorMode === 'light' ? '200px' : '150px'}>*/}

        <Text fontSize="25px" fontWeight="bold">
          LOGO
        </Text>

        <HStack h="60px">
          <Stack direction="row" gap="3">
            <Stack
              direction="row"
              alignItems="center"
              borderColor="#354877"
              borderWidth="1px"
              borderRadius="full"
              p="2"
              cursor="pointer"
              _hover={{ textColor: 'white', bg: 'gray.800' }}
            >
              <Icon as={AiOutlineQuestion} />
            </Stack>

            <Stack
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
            </Stack>

            <Box
              bg="#037F36"
              h="19px"
              w="19px"
              borderRadius="10px"
              position="absolute"
              right="290px"
              top="27px"
              p="1"
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

            <Stack
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
            <Text fontWeight="bold" fontSize="sm">
              Déconnexion
            </Text>
          </Stack>
        </HStack>
      </HStack>
    </Stack>
  );
}
