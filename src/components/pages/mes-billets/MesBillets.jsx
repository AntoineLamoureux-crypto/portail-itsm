import React, { useContext } from 'react';
import { Text, Link, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from '../../reusable/table/DataTable';
import { getColumns } from './data';
import Tab from '../../reusable/tab/Tab';
import PageWrapper from '../../reusable/PageWrapper';
import appContext from '../../../AppProvider';

export default function MesBillets() {
  const columns = getColumns();
  const { getBillets, getBrouillons } = useContext(appContext);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Flex direction="column" gap="4" h="100%" w="100%">
        <Tab
          tabH="55%"
          title="Brouillons"
          subTitle="Vos brouillons seront automatiquement effacés après 10 jours deconservation."
        >
          <DataTable
            columns={columns}
            data={getBrouillons()}
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

        <Tab title="Mes billets" tabH="100%">
          <DataTable
            columns={columns}
            data={getBillets()}
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
      </Flex>
    </PageWrapper>
  );
}
