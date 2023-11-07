import React from 'react';
import { Grid } from '@chakra-ui/react';
import ShowDropdown from '../../../reusable/form/fields/ShowDropdown';

export default function FieldRowWrapper({ children, canHide, label }) {
  return (
    <>
      {canHide ? (
        <ShowDropdown label={label}>{children}</ShowDropdown>
      ) : (
        <Grid
          direction="row"
          templateColumns="repeat(2, 1fr)"
          flex="1"
          w="100%"
          alignContent="start"
          gap="4"
          justifyContent="space-between"
        >
          {children}
        </Grid>
      )}
    </>
  );
}
