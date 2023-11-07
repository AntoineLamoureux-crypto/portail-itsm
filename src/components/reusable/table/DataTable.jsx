import React, { useContext, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Center,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Text,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiFile, FiTrash2 } from 'react-icons/fi';
import appContext from '../../../AppProvider';
import Wizzard from '../form/Wizzard';

export function DataTable({ data, columns, whenEmpty }) {
  const { onOpen: onOptionsOpen, onClose: onOptionClose } = useDisclosure();

  const [newValueData, setNewValueData] = useState();

  const {
    isOpen: isReOpen,
    onOpen: onReOpen,
    onClose: onReClose,
  } = useDisclosure();

  const { deleteBrouillon, getBrouillon } = useContext(appContext);
  const {
    isOpen: alertOpen,
    onOpen: alertOnOpen,
    onClose: alertOnClose,
  } = useDisclosure();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  function handleDelete(data) {
    deleteBrouillon(data);
    alertOnClose();
  }

  function handleOnReOpen(id) {
    const data = getBrouillon(id);
    setNewValueData(data);
    onReOpen();
  }

  return (
    <Stack h="100%" justifyContent={data.length === 0 ? 'center' : 'normal'}>
      {data.length ? (
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map(headerGroup => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} h="55px">
                  {row.cells.map(cell => {
                    return (
                      <Td
                        {...cell.getCellProps({})}
                        {...cell.getCellProps()}
                        h="55px"
                      >
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                  {row.values.etat === 'Brouillon' && (
                    <Flex h="55px" justifyContent="center" alignItems="center">
                      <Menu>
                        <MenuButton>
                          <Icon
                            fontSize="x-large"
                            as={BsThreeDotsVertical}
                            cursor="pointer"
                            onClick={onOptionsOpen}
                          />
                        </MenuButton>
                        <MenuList py="0px" borderRadius="default">
                          <MenuItem
                            onClick={() => handleOnReOpen(row.values.id)}
                            gap="2"
                          >
                            <Icon as={FiFile} />
                            Poursuivre
                          </MenuItem>
                          <MenuItem onClick={alertOnOpen} gap="2">
                            <Icon as={FiTrash2} />
                            Supprimer
                          </MenuItem>
                        </MenuList>
                      </Menu>

                      <AlertDialog
                        isOpen={alertOpen}
                        onClose={onOptionClose}
                        isCentered
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Supprimer le brouillon
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              <Text>
                                Vous ne pourrez pas annuler cette action par la
                                suite.
                              </Text>
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button onClick={alertOnClose}>Cancel</Button>
                              <Button
                                colorScheme="red"
                                onClick={() => handleDelete(row.values)}
                                ml={3}
                              >
                                Supprimer
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                      {isReOpen && (
                        <Wizzard
                          value={newValueData}
                          setValue={newValueData?.state.setValue}
                          steps={newValueData?.state.steps}
                          currentStep={newValueData?.state.stepNumber}
                          onValueChange={newValueData?.state.onValueChange}
                          onClose={onReClose}
                          isOpen={isReOpen}
                        />
                      )}
                    </Flex>
                  )}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <Center>
          <Stack
            h="100%"
            align="center"
            justify="center"
            borderRadius="default"
            p="4"
          >
            {whenEmpty}
          </Stack>
        </Center>
      )}
    </Stack>
  );
}
