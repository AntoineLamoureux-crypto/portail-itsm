import React from 'react';
import { Stack, Button, IconButton } from '@chakra-ui/react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function Pagination() {
  return (
    <Stack w="fit-content" h="fit-content" direction="horizontal">
      <Stack gap={1} direction="horizontal">
        <IconButton
          variant="solid"
          _hover={{ bg: 'transparent' }}
          bg="secondary.100"
          borderRadius="sm"
          color="primary.600"
          aria-label="Done"
          fontSize="20px"
          h="30px"
          w="fit-content"
          icon={<FiChevronLeft />}
        />
        <Button
          cursor="pointer"
          _hover={{ bg: 'primary.600', textColor: 'white' }}
          bg="secondary.100"
          borderRadius="sm"
          h="30px"
          w="30px"
          size="sm"
          textColor="black"
        >
          1
        </Button>

        <IconButton
          variant="solid"
          _hover={{ bg: 'transparent' }}
          bg="secondary.100"
          borderRadius="sm"
          color="primary.600"
          aria-label="Done"
          fontSize="20px"
          h="30px"
          w="fit-content"
          icon={<FiChevronRight />}
        />
      </Stack>
    </Stack>
  );
}
