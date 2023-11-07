import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Text,
} from '@chakra-ui/react';
import DatePicker from '../../../reusable/date-picker/DatePicker';

export default function AjoutMesAbsencesModal({ onClose, isOpen, addAbsence }) {
  const [dateDebut, setDateDebut] = useState();
  const [dateFin, setDateFin] = useState();

  function handleEnregistrerButton() {
    const absence = { dateDebut, dateFin };
    addAbsence(absence);
    handleOnCloseButton();
  }

  function handleOnCloseButton() {
    setDateDebut();
    setDateFin();
    onClose();
  }

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text
            lineHeight="1.4"
            fontWeight="semibold"
            fontSize="20px"
            color="darkTextColor"
          >
            Ajouter une période d’absence
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Stack
            p="4"
            spacing="24px"
            borderColor="borderColor"
            borderTopWidth="1px"
            alignSelf="stretch"
          >
            <Stack direction="row" spacing="32px" alignSelf="stretch">
              <Stack>
                <Stack spacing="16px" direction="row">
                  <Text
                    lineHeight="1.5"
                    fontWeight="semibold"
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
                    fontWeight="semibold"
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
        </ModalBody>

        <ModalFooter>
          <Stack direction="row" spacing="16px">
            <Button onClick={() => handleOnCloseButton()} variant="cancel">
              Annuler
            </Button>
            <Button variant="cyan" onClick={() => handleEnregistrerButton()}>
              Enregistrer
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
