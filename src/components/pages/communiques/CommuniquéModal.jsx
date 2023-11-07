import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  TagLabel,
  Box,
  Tag,
  Divider,
} from '@chakra-ui/react';

export default function CommuniquéModal({ item, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p="0px">
          <Text textColor="darkTextColor">{item.title}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack
            borderRadius="8px"
            justify="flex-start"
            align="flex-start"
            pb="24px"
          >
            <Stack justify="flex-start" align="flex-start" spacing="24px">
              <Stack spacing="48px" maxWidth="100%">
                <Stack alignSelf="stretch">
                  <Stack spacing="0px" maxWidth="100%">
                    <Stack
                      direction="row"
                      justify="space-between"
                      align="center"
                      alignSelf="stretch"
                    >
                      <Text
                        lineHeight="1.43"
                        fontWeight="regular"
                        fontSize="14px"
                      >
                        {item.date}
                      </Text>
                      <Stack size="lg" width="40px" height="40px" />
                    </Stack>
                    <Stack
                      direction="row"
                      justify="flex-start"
                      align="flex-start"
                      spacing="0px"
                      maxWidth="100%"
                    >
                      <Text
                        lineHeight="1.33"
                        fontWeight="semibold"
                        fontSize="24px"
                        color="gray.800"
                      >
                        {item.titre}
                      </Text>
                    </Stack>
                  </Stack>
                  <Divider border="1px solid" borderColor="gray.300" />

                  <Text fontSize="sm">
                    Bonjour à tous! Pour demander des congés pendant cette
                    période, veuillez vous connecter à notre portail employé et
                    remplir le formulaire de demande de congés. Nous ferons de
                    notre mieux pour accéder à vos préférences, tout en tenant
                    compte des contraintes opérationnelles de l'entreprise.
                    Veuillez soumettre vos demandes avant la date limite du 30
                    juillet 2023.
                  </Text>
                  <Box as="span" fontWeight="bold" fontSize="sm">
                    Politiques de congés :
                  </Box>
                  <Box as="span" fontSize="sm">
                    Nous encourageons nos employés à prendre des congés et à se
                    détendre, mais veuillez noter que les congés seront accordés
                    en fonction des disponibilités et des besoins opérationnels.
                    Nous vous prions de bien vouloir respecter les politiques de
                    congés de l'entreprise lors de la planification de vos
                    vacances.
                  </Box>
                  <Box as="span" fontWeight="bold" fontSize="sm">
                    Suggestions d'activités :
                  </Box>
                  <Box as="span" fontSize="sm">
                    Si vous recherchez des idées pour profiter de vos vacances
                    estivales, n'hésitez pas à consulter notre guide des
                    activités recommandées. Que ce soit pour des escapades en
                    famille, des aventures en plein air ou des moments de
                    détente, nous avons rassemblé des suggestions pour tous les
                    goûts. Rappelez-vous, les vacances sont essentielles pour
                    recharger vos batteries et revenir au travail avec une
                    énergie renouvelée. Nous vous encourageons vivement à
                    prendre le temps de vous détendre et de profiter pleinement
                    de cette période de congés. Si vous avez des questions
                    supplémentaires concernant les vacances estivales, n'hésitez
                    pas à contacter le service des ressources humaines. Nous
                    sommes là pour vous aider. Nous vous souhaitons de
                    merveilleuses vacances estivales remplies de moments
                    mémorables et de repos bien mérité !
                  </Box>
                  <Text fontSize="sm">Bien cordialement,</Text>
                  <Text fontSize="sm">L'équipe des ressources humaines</Text>
                </Stack>
              </Stack>
              <Divider border="1px solid" borderColor="gray.300" />
              <Stack
                direction="row"
                justify="flex-start"
                align="flex-start"
                spacing="16px"
                width="792px"
                maxWidth="100%"
              >
                <Tag size="sm" variant="solid" height="20px">
                  <TagLabel>Ressources humaines</TagLabel>
                </Tag>
                <Tag size="sm" variant="solid" height="20px">
                  <TagLabel>Vacances</TagLabel>
                </Tag>
              </Stack>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
