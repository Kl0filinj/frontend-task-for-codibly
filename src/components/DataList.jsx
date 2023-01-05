import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

import AddictionalInfoModal from './Modal';

const DataTable = ({ data }) => {
  return (
    <TableContainer border="1px" borderColor="black" borderRadius="xl">
      <Table>
        <Thead bg="gray.800">
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Year</Th>
            <Th>Help Button</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ name, year, id, color, pantone_value }) => (
            <Tr key={id} bgColor={color}>
              <Td>{id}</Td>
              <Td>{name}</Td>
              <Td>{year}</Td>
              <Td>
                <AddictionalInfoModal
                  fullInfo={{ id, name, year, color, pantone_value }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
