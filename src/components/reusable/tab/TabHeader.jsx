import React from 'react';
import { Stack, Text, Icon } from '@chakra-ui/react';

export default function TabHeader({ title, subTitle, icon }) {
  return (
    <Stack direction="row" spacing="4px" h="fit-content" pb="2">
      {icon && (
        <Icon as={icon.data} color={icon.color} fontSize="x-large" mr="4px" />
      )}
      <Stack direction="column">
        <Text fontSize="lg" fontWeight="bold" color="darkTextColor">
          {title}
        </Text>
        {subTitle && (
          <Text
            variant="subtitle"
            colorScheme="subtitle"
            textStyle="secondary"
            color="darkTextColor"
          >
            {subTitle}
          </Text>
        )}
      </Stack>
    </Stack>
  );
}
