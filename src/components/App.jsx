import { Heading } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { Input, Box } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import Wrapper from './Container';
import DataTable from './DataList';
import { getData } from './services/api';
import Pagination from './Pagination';

export const App = () => {
  const pageTotalCount = useRef(null);

  const [data, setData] = useState([]);
  const [page] = useState(1);

  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getDataList() {
      try {
        const data = await getData(page);
        console.log(data);
        setData(prevState => [...prevState, ...data.data]);
        pageTotalCount.current = data.total_pages;
      } catch (error) {
        toast.error(
          `Something went wrong, try to reload the page, ${error.message}`
        );
        console.error(error);
        setError(error);
      }
    }
    getDataList();
  }, [page]);

  // useEffect(() => {
  //   console.log('2');
  // }, [filter]);

  return (
    <>
      <Wrapper>
        {error ? (
          <Heading as="h1" size="3xl" textAlign="center">
            Something went wrong, try to reload the page
          </Heading>
        ) : (
          <Box textAlign="center">
            <Input
              width="lg"
              mb="10"
              placeholder="Enter Id"
              size="lg"
              variant="outline"
              type="number"
              value={filter}
              onChange={evt => setFilter(evt.target.value)}
            />
            <DataTable data={data} />
            <Pagination
              pageTotalCount={pageTotalCount.current}
              currentPage={page}
            />
          </Box>
        )}
      </Wrapper>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </>
  );
};
