import React from 'react';
import { Stack, Icon, Text } from '@chakra-ui/react';
export default function CardItem({ data }) {
  return (
    <Stack
      padding="24px"
      borderColor="borderColor"
      borderRadius="8"
      borderWidth="1px"
      cursor="pointer"
      w="300px"
      _hover={{ bgColor: 'cardBg' }}
    >
      <Stack
        justify="flex-start"
        align="flex-start"
        spacing="16px"
        alignSelf="stretch"
      >
        <Icon as={data.icon} fontSize="x-large" color="darkTextColor" />
        <Text
          lineHeight="1.56"
          fontWeight="extrabold"
          fontSize="18px"
          alignSelf="stretch"
        >
          {data.titre}
        </Text>
        <Text
          lineHeight="1.43"
          fontWeight="regular"
          fontSize="14px"
          alignSelf="stretch"
        >
          {data.description}
        </Text>
      </Stack>
    </Stack>
  );
}
