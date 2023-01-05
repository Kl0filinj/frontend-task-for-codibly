import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  //   Heading,
  //   Box,
} from '@chakra-ui/react';
// import EditModal from './Modal';

const DataTable = ({ data }) => {
  return (
    <TableContainer border="1px" borderColor="black" borderRadius="xl">
      {/* <Heading as="h1">List of Data</Heading> */}
      <Table>
        <Thead bg="gray.800">
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Year</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ name, year, id, color }) => (
            <Tr key={id} bgColor={color}>
              <Td>{id}</Td>
              <Td>{name}</Td>
              <Td>{year}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
