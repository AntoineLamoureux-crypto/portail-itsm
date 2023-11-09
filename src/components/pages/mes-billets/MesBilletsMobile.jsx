import React from 'react';
import { Flex, Stack, Text, Badge, Center, Icon } from '@chakra-ui/react';
import { mesBillets } from './data';
import { FiCheckCircle } from 'react-icons/fi';
import MobilePageWrapper from '../../reusable/MobilePageWrapper';

export default function MesBilletsMobile() {
  return (
    <MobilePageWrapper>
      <Flex w="100%" h="100%" direction="column">
        {mesBillets.length > 0 ? (
          mesBillets.map((billet, id) => (
            <Billet key={id} id={id} billet={billet} />
          ))
        ) : (
          <Stack align="center" py="50%">
            <Icon as={FiCheckCircle} fontSize="40px" color="green.500" />
            <Text textStyle="primary" fontWeight="semibold">
              Aucun billet de disponible
            </Text>
          </Stack>
        )}
      </Flex>
    </MobilePageWrapper>
  );
}

function Billet({ billet, id }) {
  const color =
    billet.etat === 'Brouillon'
      ? 'purple.500'
      : billet.etat === 'Nouveau'
      ? 'blue.500'
      : 'teal.500';
  return (
    <Stack bg={id % 2 === 0 ? 'secondary.100' : 'white'} px="20px" py="20px">
      <Stack direction="row" w="100%" justifyContent="space-between">
        <Text textStyle="primary" fontWeight="semibold">
          10 juil 2023
        </Text>
        <Center>
          <Badge
            border="1px solid"
            borderColor={color}
            color={color}
            _hover={{
              bg: color,
              color: 'text.default',
            }}
            cursor="pointer"
            borderRadius="8"
            px="1"
            w="75px"
          >
            <Center>
              <Text fontWeight="semibold">{billet.etat}</Text>
            </Center>
          </Badge>
        </Center>
      </Stack>
      <Stack direction="row" gap="3" pb="2">
        <Text>{billet.numero}</Text>
        <Text>{billet.description}</Text>
      </Stack>
    </Stack>
  );
}
