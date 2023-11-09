import React from 'react';
import { Center, Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiAlertCircle, FiAlertTriangle, FiClock } from 'react-icons/fi';

export const data = [
  {
    miseAjour: '-',
    numero: '-',
    etat: 'Brouillon',
    description: 'Demande de matériel informatique',
    couleurEtat: 'purple.500',
  },
  {
    miseAjour: '-',
    numero: '-',
    etat: 'Brouillon',
    description: 'Demande de matériel informatique',
    couleurEtat: 'purple.500',
  },
  {
    miseAjour: '7 juil 2023',
    numero: '1284',
    etat: 'Nouveau',
    description: 'Demande de matériel informatique',
    couleurEtat: 'teal.500',
  },
  {
    miseAjour: '9 juil 2023',
    numero: '1281',
    etat: 'En cours',
    description: 'Déménagement d’équipement',
    couleurEtat: 'blue.500',
  },
  {
    miseAjour: '6 juil 2023',
    numero: '1284',
    etat: 'En cours',
    description: 'Demande de matériel informatique',
    couleurEtat: 'blue.500',
  },
  {
    miseAjour: '5 juil 2023',
    numero: '1281',
    etat: 'En cours',
    description: 'Déménagement d’équipement',
    couleurEtat: 'blue.500',
  },
];

export const etatsDesServices = [
  {
    title: 'Interruption de service',
    date: 'Jeudi 22 juillet, 09:00 AM',
    service: '[Nom du service]',
    icon: { data: FiAlertTriangle, color: 'red.500' },
  },
  {
    title: 'Interruption de service',
    date: 'Jeudi 22 juillet, 09:00 AM',
    service: '[Nom du service]',
    icon: { data: FiAlertCircle, color: 'orange.500' },
  },
];

export const avisDeMaintenance = [
  {
    title: 'Mise a jour du système',
    date: 'Jeudi 22 juillet, 09:00 AM',
    service: '[Nom du service]',
    icon: { data: FiClock, color: 'blue.500' },
  },
  {
    title: 'Mise a jour du système',
    date: 'Jeudi 22 juillet, 09:00 AM',
    service: '[Nom du service]',
    icon: { data: FiClock, color: 'blue.500' },
  },
];

export function getColumns() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
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
          return (
            <Center
              onClick={() => navigate(`/compte/mes-billets/${value}`)}
              cursor="pointer"
            >
              {value}
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
        accessor: 'objet',
      },
    ],
    [navigate]
  );
}
