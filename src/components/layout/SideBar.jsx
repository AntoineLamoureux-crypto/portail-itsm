import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Stack, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { initialValues, steps } from '../pages/tableau-de-bord/billets/data';
import { sideBarPages, sideBarActions } from './data';
import Wizzard from '../reusable/form/Wizzard';

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nouveauBillet, setNouveauBillet] = useState(initialValues);

  const navigate = useNavigate();

  function onValueChange(field, value) {
    const mergedBillet = { ...nouveauBillet, [field]: value };
    setNouveauBillet(mergedBillet);
  }

  function handleOpen(type) {
    onValueChange('typeDeBillet', type);
    onOpen();
  }

  return (
    <Flex flexDir="column" minW="200px" w="200px" gap="8">
      <Stack gap="2">
        {sideBarActions.map((action, id) => {
          return (
            <SideBarAction
              key={id}
              action={action}
              onClick={() => handleOpen(action.value)}
            />
          );
        })}
      </Stack>
      <Stack gap="2">
        {sideBarPages.map((page, id) => {
          return (
            <SideBarLink
              key={id}
              page={page}
              onClick={() => navigate(page.path)}
            />
          );
        })}
      </Stack>
      <Wizzard
        steps={steps}
        value={nouveauBillet}
        setValue={setNouveauBillet}
        initialValue={initialValues}
        onValueChange={onValueChange}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
}

function SideBarAction({ action, onClick }) {
  return (
    <Stack
      direction="row"
      gap="3"
      alignItems="center"
      borderColor="darkBorderColor"
      borderWidth="1px"
      borderRadius="lg"
      p="3"
      h="60px"
      cursor="pointer"
      _hover={{ textColor: 'white', bg: 'gray.800' }}
      onClick={onClick}
      fontSize="20px"
    >
      <Icon as={action.icon} fontSize="20px" />
      <Stack gap="0">
        <Text fontSize="md" fontWeight="semibold">
          {action.title}
        </Text>
        <Text fontSize="2xs">{action.subTitle}</Text>
      </Stack>
    </Stack>
  );
}

function SideBarLink({ page, onClick }) {
  return (
    <Stack
      onClick={onClick}
      p="2"
      textColor="#4387CD"
      _hover={{
        bg: 'hoverBg',
        textColor: '#276acc',
        fontWeight: 'semibold',
      }}
      cursor="pointer"
      borderRadius="lg"
      direction="row"
      alignItems="center"
      fontSize="sm"
    >
      <Icon as={page.icon} fontSize="md" />
      <Text>{page.name}</Text>
    </Stack>
  );
}
