import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Tab = defineStyleConfig({
  baseStyle: {
    p: '22px',
    spacing: '24px',
    borderRadius: 'default',
    w: '100%',
    shadow: 'lg',
    borderColor: '0',
    borderWidth: '0',
    direction: 'column',
    bg: 'tabBg',
  },
});

const theme = extendTheme({
  id: 'shadow',
  name: 'Shadow Style',
  components: {
    Tab,
  },
});

export default theme;
