import React from 'react';
import { Flex, Stack, Tag } from '@chakra-ui/react';
import { comuniques } from './data';
import Communiqué from './Communiqué';

import PageWrapper from '../../reusable/PageWrapper';
import Tab from '../../reusable/tab/Tab';

export default function Communiqués() {
  return (
    <PageWrapper>
      <Flex direction="column" gap="4" h="100%" w="100%">
        <Stack
          borderRadius="default"
          overflowY="auto"
          direction="column"
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
          <Tab
            title="Communiqués"
            topRightContent={
              <Stack direction="row" gap="1" alignItems="center">
                <Tag fontSize="12px" h="20px" cursor="pointer">
                  Tous les départements
                </Tag>
                <Tag fontSize="12px" h="20px" cursor="pointer">
                  Comité social
                </Tag>
                <Tag fontSize="12px" h="20px" cursor="pointer">
                  Comptabilité
                </Tag>
                <Tag fontSize="12px" h="20px" cursor="pointer">
                  Ressources humaines
                </Tag>
                <Tag fontSize="12px" h="20px" cursor="pointer">
                  Ventes
                </Tag>
              </Stack>
            }
          >
            <Stack p="22px" spacing="24px" w="100%">
              {comuniques.map((item, id) => (
                <Communiqué
                  item={item}
                  key={id}
                  isLast={comuniques.length - 1 === id}
                />
              ))}
            </Stack>
          </Tab>
        </Stack>
      </Flex>
    </PageWrapper>
  );
}
