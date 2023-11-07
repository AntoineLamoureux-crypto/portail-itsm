import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { FiActivity } from 'react-icons/fi';
import { DataTable } from '../../reusable/table/DataTable';
import {
  avisDeMaintances,
  etatsDesServices,
  getAvisDeMaintenanceColumns,
  getEtatsDesServicesColumns,
} from './data';
import Tab from '../../reusable/tab/Tab';
import PageWrapper from '../../reusable/PageWrapper';
import TagFiltre from './TagFiltre';
import ServicesOperationnel from './ServicesOperationnel';

export default function ÉtatsDesServices() {
  const etatsDesServicesColumns = getEtatsDesServicesColumns();
  const avisDeMaintancesColumns = getAvisDeMaintenanceColumns();
  return (
    <PageWrapper>
      <Stack gap="4" h="100%" direction="column">
        <Tab
          tabH="100%"
          title="États des services"
          icon={{ data: FiActivity, color: 'red.500' }}
        >
          <Stack direction="row" pb="10px" h="40px" p="15px">
            <TagFiltre label={`En cours (${etatsDesServices.length})`} />
            <TagFiltre label="Historique (9)" />
          </Stack>
          {etatsDesServices ? (
            <DataTable
              columns={etatsDesServicesColumns}
              data={etatsDesServices}
            />
          ) : (
            <ServicesOperationnel />
          )}
        </Tab>
        <Tab
          tabH="100%"
          title="Avis de maintenance"
          icon={{ data: FiActivity, color: 'blue.500' }}
        >
          <Stack direction="row" pb="10px" h="40px" p="15px">
            <TagFiltre label={`En cours (${avisDeMaintances.length})`} />
            <TagFiltre label="Historique (2)" />
          </Stack>
          {avisDeMaintances ? (
            <DataTable
              columns={avisDeMaintancesColumns}
              data={avisDeMaintances}
            />
          ) : (
            <Text variant="subtitle">
              Aucun avis de maintenance dans les 10 prochains jours.
            </Text>
          )}
        </Tab>
      </Stack>
    </PageWrapper>
  );
}
