import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Tab = defineStyleConfig({
  baseStyle: {
    p: '22px',
    spacing: '24px',
    borderRadius: 'default',
    w: '100%',
    shadow: '0',
    borderColor: 'borderColor',
    borderWidth: '1px',
    direction: 'column',
    bg: 'tabBg',
  },
});

const theme = extendTheme({
  id: 'defined',
  name: 'Defined Style',
  components: {
    Tab,
  },
});

export default theme;
