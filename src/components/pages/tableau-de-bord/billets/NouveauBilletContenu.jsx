import React, { useState } from 'react';
import { Stack, Icon, Button, useDisclosure } from '@chakra-ui/react';
import { FiPackage, FiZap, FiHelpCircle } from 'react-icons/fi';
import { initialValues, steps } from './data';
import Wizzard from '../../../reusable/form/Wizzard';

export default function NouveauBilletContenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nouveauBillet, setNouveauBillet] = useState(initialValues);

  function onValueChange(field, value) {
    const mergedBillet = { ...nouveauBillet, [field]: value };
    setNouveauBillet(mergedBillet);
  }

  function handleOpen(type) {
    onValueChange('typeDeBillet', type);
    onOpen();
  }

  return (
    <Stack direction="row" justify="flex-end" align="center">
      <Stack direction="row" spacing="16px">
        <Button
          variant="create"
          bg="createButtonBg"
          leftIcon={<FiPackage />}
          onClick={() => handleOpen('Demande')}
        >
          Demande
        </Button>
        <Button
          variant="create"
          bg="createButtonBg"
          leftIcon={<FiZap />}
          onClick={() => handleOpen('Problème')}
        >
          Problème
        </Button>
      </Stack>
      <Stack>
        <Icon as={FiHelpCircle} variant="cyan" />
      </Stack>
      <Wizzard
        steps={steps}
        value={nouveauBillet}
        setValue={setNouveauBillet}
        initialValue={initialValues}
        onValueChange={onValueChange}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Stack>
  );
}
