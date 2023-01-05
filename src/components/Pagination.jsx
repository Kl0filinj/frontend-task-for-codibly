import { Box, Button } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const Pagination = ({ pageTotalCount, currentPage, changePageDispatch }) => {
  const pageCount = Array.from({ length: pageTotalCount }, (_, i) => i + 1);

  return (
    <Box display="flex" justifyContent="center" mt="6" alignItems="center">
      <Button
        disabled={currentPage === 1}
        onClick={() => changePageDispatch({ type: 'prevPage' })}
      >
        <ArrowLeftIcon />
      </Button>
      {pageCount.map(i =>
        i === currentPage ? (
          <Box
            borderRadius="md"
            w="40px"
            h="40px"
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="blue.600"
            color="whiteAlpha.900"
          >
            {i}
          </Box>
        ) : (
          <Box
            w="40px"
            h="40px"
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {i}
          </Box>
        )
      )}
      <Button
        disabled={currentPage === pageTotalCount}
        onClick={() => changePageDispatch({ type: 'nextPage' })}
      >
        <ArrowRightIcon />
      </Button>
    </Box>
  );
};

export default Pagination;
