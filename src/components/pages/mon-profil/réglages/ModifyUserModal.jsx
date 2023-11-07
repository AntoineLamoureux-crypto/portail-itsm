import React from 'react';
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

export default function ModifyUserModal({ onClose, isOpen }) {
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
            color="gray.800"
          >
            Modifier vos renseignements personnels
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}></ModalBody>

        <ModalFooter>
          <Stack direction="row" spacing="16px">
            <Button variant="cancel">Annuler</Button>
            <Button variant="cyan">Enregistrer</Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
