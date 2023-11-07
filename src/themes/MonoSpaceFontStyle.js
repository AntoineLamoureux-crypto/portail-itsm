import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    primary: {
      fontFamily: 'mono',
    },
    secondary: {
      fontFamily: 'monospace',
    },
  },
});

export default theme;
