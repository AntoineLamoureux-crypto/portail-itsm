import { Divider, Flex, Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import SideBar from './SideBar';
import QuickActions from './QuickActions';

export default function LogedInLayout() {
  return (
    <Flex w="100vw" h="100vh" flexDir="column" bg="backgroundBg">
      <TopBar />
      <Divider borderColor="borderColor" borderBottomWidth="2px" />
      <Flex overflow="hidden" h="100%" w="100%" maxH="1000px">
        <Stack
          direction="row"
          justifyContent="center"
          px="8"
          py="4"
          w="100%"
          gap="4"
        >
          <SideBar />
          <Outlet />
          <QuickActions />
        </Stack>
      </Flex>
    </Flex>
  );
}
