import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
    primary: {
      fontFamily: 'sans-sherif',
    },
    secondary: {
      fontFamily: 'body',
    },
  },
});

export default theme;
