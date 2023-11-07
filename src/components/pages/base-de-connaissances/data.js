import React from 'react';
import {
  FiBookOpen,
  FiHelpCircle,
  FiLifeBuoy,
  FiFileText,
  FiCompass,
  FiAlignRight,
} from 'react-icons/fi';

import { Center, Text, Stack, Badge } from '@chakra-ui/react';

export const cards = [
  {
    titre: 'Guides pratiques et tutoriels',
    icon: FiBookOpen,
    description:
      "Découvrez des instructions pas à pas pour l'utilisation optimale des produits et services.",
  },
  {
    titre: 'Foire aux questions (FAQ)',
    icon: FiHelpCircle,
    description:
      'Trouvez des réponses aux questions couramment posées par nos utilisateurs. Nous couvrons tout, des questions de base aux demandes plus complexes.',
  },
  {
    titre: 'Résolution de problèmes',
    icon: FiLifeBuoy,
    description:
      'Rencontrez-vous des difficultés ? Parcourez cette section pour trouver des solutions aux problèmes courants. Nos guides de dépannage vous aideront à résoudre les problèmes rapidement et efficacement.',
  },
  {
    titre: 'Articles de référence',
    icon: FiFileText,
    description:
      "Obtenez des informations détaillées sur des sujets spécifiques, comme les spécifications de nos produits, les politiques de l'entreprise, etc.",
  },
  {
    titre: 'Procédures',
    icon: FiCompass,
    description:
      "Explorez cette section pour comprendre comment réaliser une tâche ou suivre un processus spécifique. Ces articles fournissent des instructions détaillées, parfois accompagnées de diagrammes ou de captures d'écran pour une meilleure compréhension.",
  },
  {
    titre: 'Glossaire',
    icon: FiAlignRight,
    description:
      'Rencontrez-vous des difficultés ? Parcourez cette section pour trouver des solutions aux problèmes courants. Nos guides de dépannage vous aideront à résoudre les problèmes rapidement et efficacement.',
  },
  {
    titre: 'Avis de changement',
    icon: FiFileText,
    description:
      'Restez à jour avec les dernières modifications et mises à jour de nos produits, services ou politiques.',
  },
  {
    titre: 'Avis de changement',
    icon: FiFileText,
    description:
      'Restez à jour avec les dernières modifications et mises à jour de nos produits, services ou politiques.',
  },
  {
    titre: 'Avis de changement',
    icon: FiFileText,
    description:
      'Restez à jour avec les dernières modifications et mises à jour de nos produits, services ou politiques.',
  },
  {
    titre: 'Avis de changement',
    icon: FiFileText,
    description:
      'Restez à jour avec les dernières modifications et mises à jour de nos produits, services ou politiques.',
  },
  {
    titre: 'Avis de changement',
    icon: FiFileText,
    description:
      'Restez à jour avec les dernières modifications et mises à jour de nos produits, services ou politiques.',
  },
  {
    titre: 'Avis de changement',
    icon: FiFileText,
    description:
      'Restez à jour avec les dernières modifications et mises à jour de nos produits, services ou politiques.',
  },
  {
    titre: 'Avis de changement',
    icon: FiFileText,
    description:
      'Restez à jour avec les dernières modifications et mises à jour de nos produits, services ou politiques.',
  },
];

export const rubriques = [
  'Que faire si l’encre de mes cartouches d’imprimante a séché?',
  'Comment remplacer une cartouche d’imprimante?',
  'J’ai besoin de nouvelles cartouches d’imprimante, qui dois-je contacter pour en obtenir?',
];

export const billets = [
  {
    numero: 123123,
    etat: 'En cours',
    description: 'Réparation Imprimante',
    ouverture: '10 juillet, 16h05',
    echeance: '10 juillet, 16h05',
  },
  {
    numero: 123123,
    etat: 'En cours',
    description: 'Réparation Desktop',
    ouverture: '10 juillet, 16h05',
    echeance: '10 juillet, 16h05',
  },
  {
    numero: 123123,
    etat: 'En cours',
    description: 'Réparation Mac book pro',
    ouverture: '10 juillet, 16h05',
    echeance: '10 juillet, 16h05',
  },
];

export function getColumns() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return React.useMemo(
    () => [
      {
        Header: () => <Center w="100%">NUMÉRO</Center>,
        accessor: 'numero',
        Cell: ({ value }) => {
          return (
            <Center>
              <Stack direction="horizontal">
                <Center>
                  <Text>{value}</Text>
                </Center>
              </Stack>
            </Center>
          );
        },
      },
      {
        Header: () => <Center w="100%">ÉTAT</Center>,
        accessor: 'etat',
        Cell: ({ value }) => {
          return (
            <Center>
              <Badge
                border={'1px solid'}
                borderColor={
                  value === 'En cours'
                    ? 'blue.500'
                    : value === 'Nouveau'
                    ? 'teal.500'
                    : 'purple.500'
                }
                color={
                  value === 'En cours'
                    ? 'blue.500'
                    : value === 'Nouveau'
                    ? 'teal.500'
                    : 'purple.500'
                }
                _hover={{
                  bg:
                    value === 'En cours'
                      ? 'blue.500'
                      : value === 'Nouveau'
                      ? 'teal.500'
                      : 'purple.500',
                  textColor: 'white',
                }}
                cursor="pointer"
                w="75px"
              >
                <Center>{value}</Center>
              </Badge>
            </Center>
          );
        },
      },
      {
        Header: () => 'DESCRIPTION',
        accessor: 'description',
      },
      {
        Header: () => 'OUVERTURE',
        accessor: 'ouverture',
      },
      {
        Header: () => 'ÉCHÉANCE',
        accessor: 'echeance',
      },
    ],
    []
  );
}
