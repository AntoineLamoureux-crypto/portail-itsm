import React from 'react';
import { Stack, Text, Icon } from '@chakra-ui/react';

export default function ÉtatsDesServicesCard({ card }) {
  return (
    <Stack
      padding="16px"
      borderColor="borderColor"
      borderWidth="1px"
      borderRadius="8"
      bg="cardBg"
      cursor="pointer"
    >
      <Stack
        direction="row"
        justify="space-between"
        align="center"
        spacing="16px"
        alignSelf="stretch"
      >
        <Icon as={card.icon.data} color={card.icon.color} fontSize="xl" />
        <Stack justify="flex-start" align="flex-start" flex="1">
          <Text fontSize="sm">{card.title}</Text>
          <Text variant="thin" fontSize="xs">
            {card.date}
          </Text>
        </Stack>
      </Stack>
      <Stack paddingStart="40px" direction="row">
        <Text variant="thin" fontSize="sm">
          {card.service}
        </Text>
      </Stack>
    </Stack>
  );
}
