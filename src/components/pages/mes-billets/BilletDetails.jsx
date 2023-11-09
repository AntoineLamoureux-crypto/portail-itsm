import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appContext from '../../../AppProvider';
import PageWrapper from '../../reusable/PageWrapper';
import Tab from '../../reusable/tab/Tab';
import { Button, Divider, Flex, Stack } from '@chakra-ui/react';
import BilletDiscussion from './BilletDiscussion';
import BilletResume from './BilletResume';

export default function BilletDetails() {
  const { id } = useParams();
  const { getBillet } = useContext(appContext);
  const billet = getBillet(id);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Tab
        tabH="100%"
        title={billet.objet}
        topLeftContent={
          <Button
            onClick={() => navigate(-1)}
            bg="default"
            size="sm"
            alignItems="center"
            borderColor="darkBorderColor"
            borderWidth="1px"
            borderRadius="lg"
            _hover={{ textColor: 'white', bg: 'gray.800' }}
            cursor="pointer"
          >
            Retour
          </Button>
        }
      >
        <Flex w="100%" gap="0" overflow="clip">
          <Stack w="100%">
            <BilletDiscussion />
          </Stack>
          <Divider orientation="vertical" h="full" />
          <Stack h="100%" w="30%">
            <BilletResume billet={billet} />
          </Stack>
        </Flex>
      </Tab>
    </PageWrapper>
  );
}
