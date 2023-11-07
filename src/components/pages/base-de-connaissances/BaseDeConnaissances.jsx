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
        <Stack p="15px" h="100%">
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
          {value.length < 2 ? (
            <Stack h="100%">
              <Flex
                justifyContent="space-between"
                direction="column"
                overflowY="auto"
                w="100%"
                h="100%"
                py="7px"
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
                  pb="15px"
                  gap="4"
                  w="100%"
                  h="350px"
                >
                  {cards.map((card, key) => (
                    <CardItem data={card} key={key} />
                  ))}
                </Flex>
              </Flex>
              <Stack
                padding="24px"
                direction="row"
                align="center"
                spacing="24px"
                border="borderColor"
                borderRadius="8"
                borderWidth="1px"
              >
                <Stack direction="row" flex="1">
                  <Center>
                    <Icon as={FiZap} mr="2" color="yellow.500" fontSize="2xl" />

                    <Text lineHeight="1.5" fontWeight="regular" fontSize="16px">
                      Vous rencontrez une interruption ou un ralentissement de
                      service?
                    </Text>
                  </Center>
                </Stack>
                <Button variant="cyan">Consulter l’état des services</Button>
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
