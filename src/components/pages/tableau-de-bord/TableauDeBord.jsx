import React, { useContext } from 'react';
import { Flex, Icon, Text, Stack, Link } from '@chakra-ui/react';
import { DataTable } from '../../reusable/table/DataTable';
import { FiArrowRight } from 'react-icons/fi';
import { getColumns } from './data';
import { useNavigate } from 'react-router-dom';
import Tab from '../../reusable/tab/Tab';
import PageWrapper from '../../reusable/PageWrapper';
import CommuniquésContenu from './communiqués/CommuniquésContenu';
import appContext from '../../../AppProvider';
import ÉtatsDesServicesCard from './états-des-services/ÉtatsDesServicesCard';
import { etatsDesServices } from './états-des-services/data';

export default function TableauDeBord() {
  const columns = getColumns();
  const navigate = useNavigate();
  const { getBilletsRecents } = useContext(appContext);

  return (
    <PageWrapper>
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
                      onClick={() => navigate('/compte/tableau-de-bord')}
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
            title="États des services"
            tabH="100%"
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
                <ÉtatsDesServicesCard card={card} key={id} />
              ))}
            </Stack>
          </Tab>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
