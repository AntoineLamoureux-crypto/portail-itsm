import React from 'react';
import { Stack, Grid, Text } from '@chakra-ui/react';

export default function RenderStep({ step, value, stepNumber }) {
  return step.sections.map((section, _id) => {
    return (
      <Stack
        key={_id}
        px="2"
        py="1"
        bg={stepNumber === step.id ? 'hoverBg' : 'transparent'}
      >
        {section?.label && (
          <Text
            fontWeight="bold"
            fontSize="15px"
            color={stepNumber === step.id ? 'teal.600' : 'default'}
          >
            {section.label}
          </Text>
        )}
        {section.rows
          ? section.rows.map((row, id) => {
              return (
                <Grid
                  key={id}
                  templateColumns="repeat(2, 1fr)"
                  w="100%"
                  gap="3"
                >
                  {row.fields.map((field, id) => {
                    return (
                      <Stack key={id} gap="0">
                        {field?.label && (
                          <Text fontWeight="semibold">{field.label}</Text>
                        )}
                        <Text fontWeight="normal">
                          {value[field.name] ? value[field.name] : '-'}
                        </Text>
                        ;
                      </Stack>
                    );
                  })}
                </Grid>
              );
            })
          : section.fields.map((field, id) => {
              return (
                <Text key={id}>
                  {value[field.name] ? value[field.name] : '-'}
                </Text>
              );
            })}
      </Stack>
    );
  });
}
