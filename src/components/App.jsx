import { Heading } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { Input, Box, Spinner } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import Wrapper from './Container';
import DataTable from './DataList';
import { getData, getById } from './services/api';
import Pagination from './Pagination';
import { reducer } from './reducers/reducers';
import { useReducer } from 'react';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const pageTotalCount = useRef(null);
  // const firstMount = useRef(true);

  const initialState = { data: [], page: 1, error: null, isLoading: false };

  const [filter, setFilter] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getDataList() {
      dispatch({ type: 'changeIsLoading', payload: true });
      try {
        const data = await getData(state.page);
        dispatch({ type: 'addData', payload: data.data });
        pageTotalCount.current = data.total_pages;
      } catch (error) {
        toast.error(
          `Something went wrong, try to reload the page, ${error.message}`
        );
        console.error(error);
        dispatch({ type: 'setError', payload: error });
      } finally {
        dispatch({ type: 'changeIsLoading', payload: false });
      }
    }
    async function getDataById() {
      dispatch({ type: 'changeIsLoading', payload: true });
      try {
        const data = await getById(filter);
        dispatch({ type: 'addData', payload: [data.data] });
      } catch (error) {
        toast.error(
          `Something went wrong, try to reload the page, ${error.message}`
        );
        console.error(error);
        dispatch({ type: 'setError', payload: error });
      } finally {
        dispatch({ type: 'changeIsLoading', payload: false });
      }
    }
    // if (firstMount.current === false) {
    if (filter === '') {
      getDataList();
    } else {
      getDataById();
    }
    // }

    return () => {
      // firstMount.current = false;
      dispatch({ type: 'addData', payload: [] });
    };
  }, [state.page, filter]);

  return (
    <>
      <Wrapper>
        {state.error ? (
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
            {!state.isLoading ? (
              <>
                <DataTable data={state.data} />
                <Pagination
                  pageTotalCount={pageTotalCount.current}
                  currentPage={state.page}
                  changePageDispatch={dispatch}
                />
              </>
            ) : (
              <Box>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Box>
            )}
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
