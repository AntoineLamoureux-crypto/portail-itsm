import React from 'react';
import {
  Stack,
  Icon,
  Text,
  Tag,
  TagLabel,
  Divider,
  Center,
  useDisclosure,
} from '@chakra-ui/react';
import { FiFileText, FiChevronRight } from 'react-icons/fi';
import CommuniquéModal from './CommuniquéModal';

export default function Communiqué({ item, isLast }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      direction="column"
      h="fit-content"
      w="100%"
      _hover={{ bg: 'tabBg' }}
      cursor="pointer"
      onClick={onOpen}
    >
      <CommuniquéModal item={item} isOpen={isOpen} onClose={onClose} />
      <Stack pb="20px" pt="10px" direction="row">
        <Icon as={FiFileText} fontSize="x-large" color="secondary.500" />
        <Stack w="100%">
          <Stack spacing="8px" flex="1">
            <Stack
              paddingY="2px"
              direction="row"
              justify="space-between"
              align="center"
              alignSelf="stretch"
            >
              <Text lineHeight="1.43" fontWeight="regular" fontSize="14px">
                {item.date}
              </Text>
              <Tag size="sm" variant="solid" bg="primary.400" py="1">
                <TagLabel>{item.type}</TagLabel>
              </Tag>
            </Stack>
            <Stack>
              <Stack direction="row">
                <Text lineHeight="1.5" fontWeight="semibold" fontSize="16px">
                  {item.titre}
                </Text>
              </Stack>
              <Stack direction="row">
                <Text
                  lineHeight="1.43"
                  fontWeight="regular"
                  fontSize="14px"
                  flex="1"
                >
                  {item.description}
                </Text>
              </Stack>
            </Stack>

            <Stack direction="row" h="100%" color="action.500">
              <Center>
                <Text fontWeight="medium" fontSize="12px">
                  Consulter
                </Text>
                <Icon as={FiChevronRight} fontSize="sm" pt="3px" />
              </Center>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {!isLast && (
        <Stack px="30px" py="0px">
          <Divider border="1px solid" borderColor="borderColor" />
        </Stack>
      )}
    </Stack>
  );
}
