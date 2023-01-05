import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';

const AddictionalInfoModal = ({
  fullInfo: { id, name, year, color, pantone_value },
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="gray" variant="ghost">
        <PlusSquareIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Addictional info for</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="black" size="2xl">
              Id :
              <Text as="span" fontSize="xl" fontWeight="medium">
                {id}
              </Text>
            </Text>
            <Text fontWeight="black" size="2xl">
              Name :
              <Text fontSize="xl" fontWeight="medium" as="span">
                {name}
              </Text>
            </Text>
            <Text fontWeight="black" size="2xl">
              Year :
              <Text fontSize="xl" fontWeight="medium" as="span">
                {year}
              </Text>
            </Text>
            <Text fontWeight="black" size="2xl">
              Color :
              <Text as="span" w="30px" h="30px" bgColor={color}>
                {color}
              </Text>
            </Text>
            <Text fontWeight="black" size="2xl">
              Pantone Value:
              <Text fontSize="xl" fontWeight="medium" as="span">
                {pantone_value}
              </Text>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddictionalInfoModal;
