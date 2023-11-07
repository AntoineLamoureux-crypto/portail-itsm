import React, { useRef } from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogHeader,
  Center,
  Text,
} from '@chakra-ui/react';

export default function DeleteAbsenceModal({
  absence,
  isOpen,
  onClose,
  deleteAbsence,
}) {
  const cancelRef = useRef();

  function handleSupprimerClick() {
    deleteAbsence(absence.id);
    onClose();
  }

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Supprimer votre absence
            </AlertDialogHeader>
            <AlertDialogBody>
              <Center textAlign="center">
                <Text variant="normal">
                  Êtes-vous sûr ? <br /> Vous ne pourrez pas annuler cette
                  action par la suite.
                </Text>
              </Center>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Annuler
              </Button>
              <Button
                colorScheme="red"
                onClick={() => handleSupprimerClick()}
                ml={3}
              >
                Supprimer
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
