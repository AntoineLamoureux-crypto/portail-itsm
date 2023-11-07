import React from 'react';
import ShowDropdown from '../../../reusable/form/fields/ShowDropdown';
import { Stack } from '@chakra-ui/react';

export default function SectionWrapper({ canHide, label, children }) {
  return canHide ? (
    <ShowDropdown label={label}>{children}</ShowDropdown>
  ) : (
    <Stack>{children}</Stack>
  );
}
