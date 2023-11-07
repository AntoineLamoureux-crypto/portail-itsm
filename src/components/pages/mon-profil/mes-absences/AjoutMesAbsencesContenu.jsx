import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import DatePicker from '../../../reusable/date-picker/DatePicker';

export default function AjoutMesAbsencesContenu({
  dateDebut,
  dateFin,
  setDateDebut,
  setDateFin,
}) {
  return (
    <Stack pacing="24px" background="white">
      <Stack direction="row" spacing="32px" alignSelf="stretch">
        <Stack>
          <Stack spacing="16px" direction="row">
            <Text
              lineHeight="1.5"
              fontWeight="bold"
              fontSize="16px"
              color="darkTextColor"
            >
              Date de début
            </Text>
          </Stack>
          <DatePicker value={dateDebut} onChange={setDateDebut} />
        </Stack>
        <Stack>
          <Stack spacing="16px" direction="row">
            <Text
              lineHeight="1.5"
              fontWeight="bold"
              fontSize="16px"
              color="darkTextColor"
            >
              Date de fin
            </Text>
          </Stack>
          <DatePicker value={dateFin} onChange={setDateFin} />
        </Stack>
      </Stack>
    </Stack>
  );
}
