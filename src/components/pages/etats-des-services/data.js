import React from 'react';
import { Center, Stack, Text, Icon } from '@chakra-ui/react';
import { FiAlertTriangle, FiClock, FiAlertCircle } from 'react-icons/fi';
export const etatsDesServices = [
  {
    service: {
      name: '[Nom du service]',
      icon: FiAlertTriangle,
      color: 'red.500',
    },
    description: 'Interuption de service',
    miseAJour: '-',
  },
  {
    service: {
      name: '[Nom du service]',
      icon: FiAlertCircle,
      color: 'orange.500',
    },
    description: 'Dégradation',
    miseAJour: '10 juillet, 16h05',
  },
  {
    service: {
      name: '[Nom du service]',
      icon: FiAlertTriangle,
      color: 'red.500',
    },
    description: 'Interuption de service',
    miseAJour: '10 juillet, 16h05',
  },
];
export const avisDeMaintances = [
  {
    service: {
      name: '[Nom du service]',
      icon: FiClock,
      color: 'blue.500',
    },
    description: 'Mise a jour du système',
    planifieLe: '10 juillet, 16h05',
  },
  {
    service: {
      name: '[Nom du service]',
      icon: FiClock,
      color: 'blue.500',
    },
    description: 'Mise a jour du système',
    planifieLe: '10 juillet, 16h05',
  },
];

export function getAvisDeMaintenanceColumns() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return React.useMemo(
    () => [
      {
        Header: () => <Center w="100%">SERVICE</Center>,
        accessor: 'service',
        Cell: ({ value }) => {
          return (
            <Center>
              <Stack direction="horizontal">
                <Center>
                  <Icon
                    as={value.icon}
                    color={value.color}
                    fontSize="large"
                    mr="3"
                  />
                  <Text>{value.name}</Text>
                </Center>
              </Stack>
            </Center>
          );
        },
      },
      {
        Header: () => 'DESCRIPTION',
        accessor: 'description',
      },
      {
        Header: () => 'PLANIFIÉ LE',
        accessor: 'planifieLe',
      },
    ],
    []
  );
}

export function getEtatsDesServicesColumns() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return React.useMemo(
    () => [
      {
        Header: () => <Center w="100%">SERVICE</Center>,
        accessor: 'service',
        Cell: ({ value }) => {
          return (
            <Center>
              <Stack direction="horizontal">
                <Center>
                  <Icon
                    as={value.icon}
                    color={value.color}
                    fontSize="large"
                    mr="3"
                  />
                  <Text>{value.name}</Text>
                </Center>
              </Stack>
            </Center>
          );
        },
      },
      {
        Header: () => 'DESCRIPTION',
        accessor: 'description',
      },
      {
        Header: () => 'MISE À JOUR',
        accessor: 'miseAJour',
      },
    ],
    []
  );
}
