import React, { useContext, useState } from 'react';
import {
  Text,
  Link,
  Flex,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import { initialValues, steps } from '../tableau-de-bord/billets/data';
import { DataTable } from '../../reusable/table/DataTable';
import { getColumns } from './data';
import MesBilletsMobile from './MesBilletsMobile';

import Tab from '../../reusable/tab/Tab';
import PageWrapper from '../../reusable/PageWrapper';
import appContext from '../../../AppProvider';
import Wizzard from '../../reusable/form/Wizzard';

export default function MesBillets() {
  const isDesktop = useBreakpointValue({
    xm: false,
    sm: false,
    md: true,
    lg: true,
  });
  const columns = getColumns();
  const { getBillets, getBrouillons } = useContext(appContext);

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
      {isDesktop ? (
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
                      onClick={() => handleOpen()}
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
                      onClick={() => handleOpen()}
                    >
                      ici
                    </Link>
                  </Text>
                </>
              }
            />
          </Tab>
        </Flex>
      ) : (
        <MesBilletsMobile />
      )}
    </PageWrapper>
  );
}
