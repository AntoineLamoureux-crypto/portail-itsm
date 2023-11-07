import React, { useState } from 'react';
import { Button, useDisclosure, Text, Stack } from '@chakra-ui/react';
import { FiPlusSquare } from 'react-icons/fi';
import AjoutMesAbsencesModal from './AjoutMesAbsencesModal';
import ListMesAbsences from './ListMesAbsences';
import Tab from '../../../reusable/tab/Tab';

export default function MesAbsences() {
  let nextId = 0;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [mesAbsences, setMesAbsences] = useState([]);

  function addAbsence(absence) {
    setMesAbsences([{ id: nextId++, absence }, ...mesAbsences]);
  }

  function modifyAbsence(id, newAbsence) {
    const editedAbsencesList = mesAbsences.map(absence => {
      if (id === absence.absence.id) {
        return { ...mesAbsences, absence: newAbsence };
      }
      return absence;
    });

    setMesAbsences(editedAbsencesList);
  }

  function deleteAbsence(id) {
    const newAbsencesList = mesAbsences.filter(absence => absence.id !== id);
    setMesAbsences(newAbsencesList);
  }

  return (
    <Tab
      title="Mes absences"
      subTitle="Vous pouvez ajouter une période de temps pendant laquelle vous serez absent."
      tabH="100%"
      topRightContent={
        <Button
          leftIcon={<FiPlusSquare />}
          bg="transparent"
          onClick={onOpen}
          borderColor="#354877"
          _hover={{ textColor: 'white', bg: 'gray.800' }}
          borderWidth="1px"
          textColor=""
          p="3"
          size="md"
        >
          <Text fontWeight="semibold" fontSize="13px">
            Ajouter
          </Text>
        </Button>
      }
    >
      {mesAbsences ? (
        <Stack px="5" py="3" h="100%">
          <ListMesAbsences
            data={mesAbsences}
            modifyAbsence={modifyAbsence}
            deleteAbsence={deleteAbsence}
          />
        </Stack>
      ) : (
        <Text>Aucune absences ajoutes encore</Text>
      )}
      <AjoutMesAbsencesModal
        isOpen={isOpen}
        onClose={onClose}
        addAbsence={addAbsence}
      />
    </Tab>
  );
}
