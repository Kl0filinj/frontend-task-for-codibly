import { Box } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const Pagination = ({ pageTotalCount, currentPage }) => {
  const pageCount = Array.from({ length: pageTotalCount }, (_, i) => i + 1);

  console.log(pageCount);
  console.log(currentPage);
  return (
    <Box display="flex" justifyContent="center" mt="6" alignItems="center">
      <ArrowLeftIcon />
      {pageCount.map(i =>
        i === currentPage ? (
          <Box
            w="40px"
            h="40px"
            key={i}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor="blue.600"
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
      <ArrowRightIcon />
    </Box>
  );
};

export default Pagination;
