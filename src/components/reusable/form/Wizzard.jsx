import React, { useState, useEffect, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';
import ProgressBar from './ProgressBar';
import Resume from '../../pages/tableau-de-bord/billets/Resume';
import SectionLabel from './labels/SectionLabel';
import FieldRowWrapper from './wrappers/FieldRowWrapper';
import Field from './fields/Field';
import AnnulerConfirm from '../../pages/tableau-de-bord/billets/AnnulerConfirm';
import appContext from '../../../AppProvider';

export default function Wizzard({
  steps,
  currentStep,
  value,
  setValue,
  onValueChange,
  initialValue,
  isOpen,
  onClose,
}) {
  const numberOfSteps = steps.length;
  const [stepNumber, setStepNumber] = useState(currentStep || 1);
  const [showAnnulerConfirm, setShowAnnulerConfirm] = useState(false);
  const { addBillet, addBrouillon } = useContext(appContext);
  const [resumeContent, setResumeContent] = useState();

  useEffect(() => {
    setResumeContent(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepNumber]);

  function handleAnnulerClick() {
    setShowAnnulerConfirm(true);
  }
  function stepForward() {
    if (stepNumber < numberOfSteps) {
      setStepNumber(stepNumber + 1);
    }
    if (stepNumber === numberOfSteps) {
      addBillet(value);
      handleOnClose();
    }
  }

  function handleComeBackClick() {
    addBrouillon(value, {
      steps: steps,
      stepNumber: stepNumber,
      value: value,
      setValue: setValue,
      onValueChange: onValueChange,
    });
    handleOnClose();
  }

  function stepBackward() {
    if (stepNumber > 1) {
      setStepNumber(stepNumber - 1);
    }
  }

  function handleOnClose() {
    setShowAnnulerConfirm(false);
    setValue(initialValue);
    setStepNumber(1);
    onClose();
  }

  function renderCurrentStep() {
    const currentStep = steps.find(step => {
      return step.id === stepNumber && step;
    });
    const sections = currentStep.sections;

    return (
      <Stack direction="column" gap="4">
        {sections.map((section, id) => {
          return (
            <Stack key={id}>
              {section?.label && (
                <SectionLabel key={id} label={section.label} />
              )}

              {section.rows
                ? section.rows.map((row, id) => {
                    return (
                      <FieldRowWrapper key={id}>
                        {row.fields.map((field, id) => {
                          return (
                            <Field
                              key={id}
                              field={field}
                              nBFieldValue={value[field.name]}
                              onValueChange={onValueChange}
                            />
                          );
                        })}
                      </FieldRowWrapper>
                    );
                  })
                : section.fields.map((field, id) => {
                    return (
                      <Field
                        key={id}
                        field={field}
                        nBFieldValue={value[field.name]}
                        onValueChange={onValueChange}
                      />
                    );
                  })}
            </Stack>
          );
        })}
      </Stack>
    );
  }

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      isCentered={true}
      onClose={handleOnClose}
      size="5xl"
    >
      <ModalOverlay />
      <ModalContent bg="wizzardBg">
        {showAnnulerConfirm ? (
          <AnnulerConfirm
            onClose={() => handleOnClose()}
            setShowAnnulerConfirm={setShowAnnulerConfirm}
          />
        ) : (
          <>
            <ModalHeader borderBottomWidth="1px" px="0px">
              <Stack gap={3}>
                <Stack direction="row" px="10px">
                  <Text fontSize="x-large">Billet #{value?.id}</Text>
                  <Text fontSize="x-large" fontWeight="normal">
                    (brouillon)
                  </Text>
                </Stack>
                <Stack px="10px">
                  <Text fontSize="lg">
                    Étape {stepNumber} de {numberOfSteps}
                  </Text>
                  <ProgressBar
                    numberOfSteps={numberOfSteps}
                    stepNumber={stepNumber}
                  />
                </Stack>
              </Stack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody py="0px" px="0px" overflowY="clip">
              <Stack display="flex" flexDir="row" h="100%" w="100%">
                <Stack
                  w="60%"
                  p="4"
                  overflowY="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      width: '2px',
                    },
                    '&::-webkit-scrollbar-track': {
                      width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'gray',
                      borderRadius: '5px',
                    },
                  }}
                >
                  {renderCurrentStep()}
                </Stack>

                <Flex w="40%" flex="1" h="500px">
                  <Resume
                    value={resumeContent}
                    stepNumber={stepNumber}
                    stepsData={steps}
                  />
                </Flex>
              </Stack>
            </ModalBody>

            <ModalFooter justifyContent="space-between" borderTopWidth="1px">
              <Button
                variant="outline"
                colorScheme="primary.100"
                size="md"
                onClick={() => stepBackward()}
              >
                Précédent
              </Button>

              <Stack direction="row">
                <Button
                  onClick={() => handleAnnulerClick()}
                  mr={3}
                  variant="ghost"
                  size="md"
                  colorScheme="primary.100"
                >
                  Annuler
                </Button>
                {stepNumber === numberOfSteps && (
                  <Button
                    onClick={() => handleComeBackClick()}
                    mr={3}
                    variant="ghost"
                    size="md"
                    colorScheme="primary.100"
                  >
                    Poursuivre plus tard
                  </Button>
                )}
                <Button
                  colorScheme="blue"
                  variant="solid"
                  size="md"
                  onClick={() => stepForward()}
                >
                  {stepNumber === numberOfSteps ? 'Terminé' : 'Suivant'}
                </Button>
              </Stack>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
