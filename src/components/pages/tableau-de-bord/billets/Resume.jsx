import React, { Fragment } from 'react';
import { Stack, Text, Divider } from '@chakra-ui/react';
import RenderStep from './RenderStep';

export default function Resume({ value, stepNumber, stepsData }) {
  return (
    <Stack
      direction="column"
      w="100%"
      borderLeftWidth="1px"
      borderColor="gray.200"
      gap="0"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '5px',
        },
        '&::-webkit-scrollbar-track': {
          width: '10px',
          marginTop: '15px',
          marginBottom: '15px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '5px',
        },
      }}
    >
      <Stack spacing="0px">
        <Text fontSize="23px" fontWeight="bold" px="2" py="2">
          Résumé
        </Text>
        <Divider />
        <Stack pb="2" spacing="0px">
          {stepsData.map((step, count) => {
            return (
              <Fragment key={count}>
                <RenderStep step={step} value={value} stepNumber={stepNumber} />
                {count !== stepsData.length - 1 && <Divider />}
              </Fragment>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
