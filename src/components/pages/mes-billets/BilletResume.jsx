import React from 'react';
import { Divider, Stack, Text } from '@chakra-ui/react';
import _ from 'lodash';

export default function BilletResume({ billet }) {
  const keys = _.keysIn(billet);
  return (
    <Stack direction="column" h="100%" gap="0">
      <Stack p="3">
        <Text fontSize="xl" fontWeight="bold">
          Résumé
        </Text>
      </Stack>
      <Divider w="100%" />
      <Stack
        px="3"
        py="1"
        h="100%"
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
        {_.valuesIn(billet).map((value, id) => {
          return (
            <Stack key={id}>
              <Text fontWeight="bold" textTransform="capitalize">
                {keys[id]}
              </Text>
              <Text lineHeight="1.43" fontWeight="regular">
                {value ? value : '-'}
              </Text>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
