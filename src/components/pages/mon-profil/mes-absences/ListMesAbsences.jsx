import React from 'react';
import { Icon, Stack, Text } from '@chakra-ui/react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useDisclosure } from '@chakra-ui/react';
import ModifyAbsenceModal from './ModifyAbsenceModal';
import DeleteAbsenceModal from './DeleteAbsenceModal';

export default function ListMesAbsences({
  data,
  modifyAbsence,
  deleteAbsence,
}) {
  return (
    <Stack h="100%">
      {data.map((absence, id) => (
        <Absence
          key={id}
          absence={absence.absence}
          modifyAbsence={modifyAbsence}
          deleteAbsence={deleteAbsence}
        />
      ))}
    </Stack>
  );
}

function Absence({ absence, modifyAbsence, deleteAbsence }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal,
  } = useDisclosure();

  return (
    <>
      <Stack
        h="100%"
        padding="24px"
        borderRadius="6px"
        direction="row"
        justify="space-between"
        spacing="24px"
        borderColor="borderColor"
        borderWidth="1px"
      >
        <Text
          lineHeight="1.43"
          fontWeight="regular"
          fontSize="14px"
          color="darkTextColor"
        >
          {absence.dateDebut.toDateString()} au {absence.dateFin.toDateString()}
        </Text>
        <Stack direction="row" gap="3">
          <Icon as={FiEdit} size="xl" onClick={onOpen} cursor="pointer" />
          <Icon
            as={FiTrash2}
            size="xl"
            onClick={onOpenDeleteModal}
            cursor="pointer"
          />
        </Stack>
      </Stack>
      <DeleteAbsenceModal
        absence={absence}
        isOpen={isOpenDeleteModal}
        onClose={onCloseDeleteModal}
        deleteAbsence={deleteAbsence}
      />
      <ModifyAbsenceModal
        isOpen={isOpen}
        onClose={onClose}
        absence={absence}
        modifyAbsence={modifyAbsence}
      />
    </>
  );
}
