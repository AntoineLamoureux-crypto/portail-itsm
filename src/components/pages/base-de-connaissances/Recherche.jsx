import React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Stack,
  Icon,
  Button,
  Center,
  Divider,
} from '@chakra-ui/react';
import { FiPlusCircle, FiPlusSquare } from 'react-icons/fi';
import { getColumns } from './data';
import { DataTable } from '../../reusable/table/DataTable';

// A l'instant je regarde juste les options des rubriques pour afficher le contenu, il faut pas oublier les options (articles et billets)

export default function Recherche({ rubriquesOptions, billetsOptions }) {
  const columns = getColumns();

  return (
    <Stack pt="5px" justifyContent="space-between" h="100%">
      <Stack px="15px">
        {!(rubriquesOptions.length === 0 && billetsOptions.length === 0) && (
          <Tabs
            borderColor="gray.300"
            borderStartWidth="1px"
            borderWidth="1px"
            borderRadius="8"
          >
            <TabList>
              <Tab>{rubriquesOptions.length} rubriques</Tab>
              <Tab>articles</Tab>
              <Tab>{billetsOptions.length} billets</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack>
                  {rubriquesOptions.map(rubrique => (
                    <Stack
                      direction="row"
                      justify="space-between"
                      align="center"
                      py="12px"
                      alignSelf="stretch"
                    >
                      <Stack
                        justify="space-between"
                        align="flex-start"
                        spacing="4px"
                        height="28px"
                      >
                        <Text
                          lineHeight="1.56"
                          fontWeight="semibold"
                          fontSize="18px"
                        >
                          {rubrique}
                        </Text>
                      </Stack>
                      <Icon
                        as={FiPlusCircle}
                        color="cyan.700"
                        fontSize="x-large"
                        cursor="pointer"
                      />
                    </Stack>
                  ))}
                </Stack>
              </TabPanel>
              <TabPanel>To be continued</TabPanel>
              <TabPanel>
                <Text pb="24px" pt="5px">
                  {billetsOptions.length} billets correspondent aux mots clés de
                  votre recherche.
                </Text>
                <DataTable columns={columns} data={billetsOptions} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </Stack>
      <Stack w="100%" px="0">
        <Divider />
        <Stack padding="5" direction="row" align="center">
          <Stack direction="row" flex="1">
            <Center>
              <Text
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="16px"
                color="darkTextColor"
                flex="1"
              >
                {rubriquesOptions.length <= 0
                  ? 'Vous ne trouvez pas réponses à vos questions? Si nécessaire, créez un billet.'
                  : 'Aucun résultats ne correspond à votre recherche actuelle. En cas de besoin, n’hésitez pas à créez un nouveau billet.'}
              </Text>
            </Center>
          </Stack>
          <Button leftIcon={<Icon as={FiPlusSquare} />} variant="cyan">
            Créer un billet
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
