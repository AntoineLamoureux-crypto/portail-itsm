import React, { useState } from 'react';
import {
  Stack,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Button,
  Flex,
  Center,
  Divider,
} from '@chakra-ui/react';
import { FiZap, FiSearch } from 'react-icons/fi';
import { cards, rubriques, billets } from './data';
import PageWrapper from '../../reusable/PageWrapper';
import CardItem from './CardItem';
import Tab from '../../reusable/tab/Tab';
import Recherche from './Recherche';

export default function BaseDeConnaissances() {
  const [value, setValue] = React.useState('');
  const [rubriquesOptions, setRubriquesOptions] = useState([]);
  const [billetsOptions, setBilletsOptions] = useState([]);

  function handleTextChange(event) {
    const text = event.target.value;
    if (text.length < 2) {
      setBilletsOptions([]);
      setRubriquesOptions([]);
      setValue(text);
      return;
    }
    const rubriquesResults = rubriques.filter(item => item.includes(text));
    setRubriquesOptions(rubriquesResults);
    const billetsResults = billets.filter(billet =>
      billet.description.includes(text)
    );
    setBilletsOptions(billetsResults);
    setValue(text);
  }

  return (
    <PageWrapper>
      <Tab title="Comment pouvons-nous vous aider?" tabH="100%">
        <Stack h="800px">
          <Stack pt="15px" px="15px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} />
              </InputLeftElement>
              <Input
                value={value}
                onChange={handleTextChange}
                type="tel"
                placeholder="Effectuez une recherche sur n'importe quel sujet"
              />
            </InputGroup>
          </Stack>
          {value.length < 2 ? (
            <Stack h="100%">
              <Flex
                px="15px"
                pt="5px"
                direction="column"
                overflowY="auto"
                w="100%"
                h="100%"
                css={{
                  '&::-webkit-scrollbar': {
                    width: '2px',
                  },
                  '&::-webkit-scrollbar-track': {
                    width: '10px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'gray',
                    borderRadius: '5px',
                  },
                }}
              >
                <Flex
                  direction="row"
                  flexWrap="wrap"
                  gap="4"
                  w="100%"
                  h="350px"
                  justifyContent="space-arround"
                >
                  {cards.map((card, key) => (
                    <CardItem data={card} key={key} />
                  ))}
                </Flex>
              </Flex>
              <Stack maxH="100px">
                <Divider />
                <Stack padding="5" direction="row" align="center">
                  <Stack direction="row" flex="1">
                    <Center>
                      <Icon
                        as={FiZap}
                        mr="2"
                        color="yellow.500"
                        fontSize="2xl"
                      />

                      <Text
                        lineHeight="1.5"
                        fontWeight="regular"
                        fontSize="16px"
                      >
                        Vous rencontrez une interruption ou un ralentissement de
                        service?
                      </Text>
                    </Center>
                  </Stack>
                  <Button variant="cyan">Consulter l’état des services</Button>
                </Stack>
              </Stack>
            </Stack>
          ) : (
            <Recherche
              rubriquesOptions={rubriquesOptions}
              billetsOptions={billetsOptions}
            />
          )}
        </Stack>
      </Tab>
    </PageWrapper>
  );
}
