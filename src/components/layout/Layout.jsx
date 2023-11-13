import { Flex, Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import SideBar from './SideBar';
import QuickActions from './QuickActions';

export default function Layout() {
  return (
    <Flex bg="backgroundBg">
      <Flex w="100vw" h="100vh" flexDir="column" justifyContent="center">
        <Stack shadow="md">
          <TopBar />
        </Stack>
        <Flex overflow="hidden" h="100%" w="100%">
          <Stack
            direction="row"
            justifyContent="center"
            p="8"
            w="100%"
            gap="4"
            maxH="1000px"
          >
            <SideBar />
            <Stack w="100%" maxW="1100px">
              <Outlet />
            </Stack>
            <QuickActions />
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}
