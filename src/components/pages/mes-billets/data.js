import React from 'react';
import { Center, Badge } from '@chakra-ui/react';
export const mesBillets = [
  {
    miseAjour: '7 juil 2023',
    numero: '1284',
    etat: 'Nouveau',
    description: 'Demande de matériel informatique',
  },
  {
    miseAjour: '9 juil 2023',
    numero: '1281',
    etat: 'En cours',
    description: 'Déménagement d’équipement',
  },
  {
    miseAjour: '6 juil 2023',
    numero: '1284',
    etat: 'En cours',
    description: 'Demande de matériel informatique',
  },
  {
    miseAjour: '5 juil 2023',
    numero: '1281',
    etat: 'En cours',
    description: 'Déménagement d’équipement',
  },
  {
    miseAjour: '5 juil 2023',
    numero: '1281',
    etat: 'En cours',
    description: 'Déménagement d’équipement',
  },
];
export function getColumns() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return React.useMemo(
    () => [
      {
        Header: () => <Center w="100%">MISE À JOUR</Center>,
        accessor: 'miseAjour',
        Cell: ({ value }) => {
          return <Center>5 juil 2021 </Center>;
        },
      },
      {
        Header: () => <Center w="100%">NUMÉRO</Center>,
        accessor: 'id',
        Cell: ({ value }) => {
          return <Center>{value}</Center>;
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
        accessor: 'objet',
      },
    ],
    []
  );
}
