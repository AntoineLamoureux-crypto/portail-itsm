import React from 'react';
import Tab from '../../../reusable/tab/Tab';
import {
  Stack,
  Button,
  Text,
  VStack,
  FormControl,
  FormLabel,
  extendTheme,
  Flex,
} from '@chakra-ui/react';
import { themes, FontStyles, BorderStyles, stylesApp } from './data';
import Dropzone from './DropZone';

import _ from 'lodash';

export default function Personalisation({
  activateColorTheme,
  activeColorTheme,
}) {
  function handleThemeChange(userTheme) {
    const activeThemeCopy = extendTheme(activeColorTheme);
    const theme = extendTheme(_.merge(activeThemeCopy, userTheme));
    activateColorTheme(theme);
  }

  return (
    <Tab
      tabH="100%"
      title="Personalisation"
      subTitle="Personliser votre portail web"
    >
      <Flex direction="row" p="4" gap="5">
        <Stack>
          <Stack direction="column" p="2" borderRadius="default" gap="4">
            <Text fontSize="lg" fontWeight="semibold" textStyle="primary">
              Thème Général
            </Text>
            <Flex gap="2" w="200px" flexWrap="wrap">
              {themes.map((item, id) => (
                <VStack
                  borderRadius="8"
                  onClick={() => handleThemeChange(item.theme)}
                  cursor="pointer"
                  key={id}
                  h="fit-content"
                >
                  <Button
                    bg={item.bg}
                    _hover={{ bg: item.bg, borderWidth: '1.5px' }}
                    w="fit-content"
                    size="sm"
                    borderRadius="full"
                  />
                </VStack>
              ))}
            </Flex>
            <Stack>
              <Text fontSize="lg" fontWeight="semibold" textStyle="primary">
                Style de l'application
              </Text>
              <Flex gap="2" w="200px" flexWrap="wrap">
                {stylesApp.map((item, id) => (
                  <Stack
                    onClick={() => handleThemeChange(item.theme)}
                    cursor="pointer"
                    key={id}
                  >
                    <Button w="80px" size="sm" borderRadius="default">
                      {item.title}
                    </Button>
                  </Stack>
                ))}
              </Flex>
            </Stack>
          </Stack>

          <Stack direction="column" p="2" borderRadius="default" gap="4">
            <Stack direction="column" gap="2">
              <Text fontSize="lg" fontWeight="semibold" textStyle="primary">
                Style de police
              </Text>
              <Stack direction="row">
                {FontStyles.map((fontStyle, id) => (
                  <VStack
                    onClick={() => handleThemeChange(fontStyle.fontFamily)}
                    cursor="pointer"
                    key={id}
                    h="fit-content"
                  >
                    <Button size="sm" w="60px" fontFamily={fontStyle.name}>
                      AA
                    </Button>
                  </VStack>
                ))}
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" gap="2" p="2">
            <Text fontSize="lg" fontWeight="semibold" textStyle="primary">
              Style des éléments
            </Text>
            <Stack direction="row">
              {BorderStyles.map((border, id) => (
                <VStack
                  onClick={() => handleThemeChange(border.style)}
                  cursor="pointer"
                  key={id}
                  h="fit-content"
                >
                  <Button
                    size="sm"
                    w="60px"
                    bg="transparent"
                    borderRadius={border.name}
                    borderLeftWidth="1px"
                    borderTopWidth="1px"
                    textStyle="primary"
                  >
                    {border.name}
                  </Button>
                </VStack>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column" p="2" borderRadius="default">
          <Stack>
            <FormControl id="file">
              <FormLabel
                textStyle="primary"
                fontSize="lg"
                fontWeight="semibold"
              >
                Logo complet
              </FormLabel>

              <Dropzone />
            </FormControl>
          </Stack>
          <Stack>
            <FormControl id="file">
              <FormLabel
                textStyle="primary"
                fontSize="lg"
                fontWeight="semibold"
              >
                Logo réduit
              </FormLabel>

              <Dropzone />
            </FormControl>
          </Stack>
        </Stack>
      </Flex>
    </Tab>
  );
}
