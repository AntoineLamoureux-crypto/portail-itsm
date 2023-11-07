import React from 'react';
import { Flex, Icon, Text, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useCurrentPage from './data';

export default function TopBarTitle() {
  const currentPage = useCurrentPage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Flex align="center">
        <Center color="text.default">
          <Icon
            mr="4"
            fontSize="25px"
            as={currentPage?.icon}
            color="sideBarTextColor"
          />
          <Text
            textStyle="primary"
            fontWeight="semibold"
            textColor="sideBarTextColor"
          >
            {currentPage?.name}
          </Text>
        </Center>
      </Flex>
    </motion.div>
  );
}
