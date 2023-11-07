import {
  Button,
  Center,
  HStack,
  Icon,
  Square,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FiUploadCloud } from 'react-icons/fi';
import { FileUploader } from 'react-drag-drop-files';

export default function Dropzone() {
  const fileTypes = ['JPG', 'PNG', 'SVG'];

  function handleChange(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      //setFile(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <FileUploader
      handleChange={handleChange}
      onDrop={handleChange}
      name="file"
      types={fileTypes}
    >
      <Center
        borderWidth="1px"
        borderRadius="lg"
        px="6"
        py="4"
        borderColor="borderColor"
      >
        <VStack spacing="3">
          <Square size="10" borderRadius="lg">
            <Icon
              as={FiUploadCloud}
              boxSize="8"
              fontSize="lg"
              fontWeight="semibold"
              textStyle="primary"
            />
          </Square>

          <VStack spacing="1" textStyle="primary">
            <HStack spacing="1" whiteSpace="nowrap">
              <Button variant="create" colorScheme="blue" size="sm">
                Click to upload
              </Button>

              <Text fontSize="sm" fontWeight="semibold" textStyle="primary">
                or drag and drop
              </Text>
            </HStack>
            <Text fontSize="sm" fontWeight="semibold" textStyle="primary">
              PNG, JPG or GIF up to 2MB
            </Text>
          </VStack>
        </VStack>
      </Center>
    </FileUploader>
  );
}
