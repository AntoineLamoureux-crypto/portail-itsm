import React, { useContext, useState } from 'react';
import { Flex, Icon, Text, Stack, Link, useDisclosure } from '@chakra-ui/react';
import { DataTable } from '../../reusable/table/DataTable';
import { initialValues, steps } from './billets/data';
import { FiActivity, FiArrowRight } from 'react-icons/fi';
import { getColumns, etatsDesServices, avisDeMaintenance } from './data';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Tab from '../../reusable/tab/Tab';
import TabHeader from '../../reusable/tab/TabHeader';
import PageWrapper from '../../reusable/PageWrapper';
import CommuniquésContenu from './CommuniquésContenu';
import appContext from '../../../AppProvider';
import Wizzard from '../../reusable/form/Wizzard';

export default function TableauDeBord() {
  const columns = getColumns();
  const navigate = useNavigate();
  const { getBilletsRecents } = useContext(appContext);

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
    <PageWrapper>
      <Wizzard
        steps={steps}
        value={nouveauBillet}
        setValue={setNouveauBillet}
        initialValue={initialValues}
        onValueChange={onValueChange}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex gap="4" flexDir="row" w="100%" h="100%">
        <Flex gap="4" flexDir="column" h="100%" w="100%">
          <Tab
            title="Billets récents"
            tabH="100%"
            topRightContent={
              <Stack
                direction="row"
                onClick={() => navigate('/compte/mes-billets')}
              >
                <Stack direction="row" align="center">
                  <Text lineHeight="1.43" fontWeight="regular" fontSize="14px">
                    <Link>Voir tout les billets</Link>
                  </Text>
                </Stack>
              </Stack>
            }
          >
            <DataTable
              columns={columns}
              data={getBilletsRecents()}
              whenEmpty={
                <>
                  <Text fontWeight="semibold" fontSize="lg">
                    Aucun billets disponibles
                  </Text>
                  <Text fontWeight="normal" fontSize="sm">
                    Vous pouvez en créer dans votre tableau de bord en cliquand
                    <Link
                      ml="1"
                      color="primary.500"
                      fontSize="sm"
                      fontWeight="semibold"
                      onClick={() => handleOpen('')}
                    >
                      ici
                    </Link>
                  </Text>
                </>
              }
            />
          </Tab>

          <Tab
            title="Communiqués"
            tabH="300px"
            topRightContent={
              <Icon
                as={FiArrowRight}
                onClick={() => navigate('/compte/communiques')}
                cursor="pointer"
                fontSize="2xl"
              />
            }
          >
            <CommuniquésContenu />
          </Tab>
        </Flex>

        <Flex gap="2" w="35%">
          <Tab
            tabH="100%"
            title="États des services"
            icon={{ data: FiActivity, color: 'red.500' }}
            topRightContent={
              <Icon
                as={FiArrowRight}
                onClick={() => navigate('/compte/etats-des-services')}
                cursor="pointer"
                fontSize="2xl"
              />
            }
          >
            <Stack p="4" gap="2">
              {etatsDesServices.map((card, id) => (
                <ServiceCard card={card} key={id} />
              ))}
              <Stack py="2" px="0" gap="0">
                <TabHeader
                  title="Avis de maintenance"
                  icon={{ data: FiActivity, color: 'blue.500' }}
                />
              </Stack>

              {avisDeMaintenance.map((card, id) => (
                <ServiceCard card={card} key={id} />
              ))}
            </Stack>
          </Tab>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
