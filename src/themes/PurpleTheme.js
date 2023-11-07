import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    bg: 'gray.400',
  },
  variants: {
    create: {
      textColor: 'white',
      bg: 'primary.600',
      fontSize: '15px',
      _hover: { bg: 'primary.700' },
    },
    default: {
      bg: 'primary.400',
      textColor: 'white',
      fontSize: '15px',
      _hover: { bg: 'primary.900', color: 'white' },
    },
    cancel: {
      bg: 'red.500',
      borderColor: 'red.300',
      textColor: 'white',
      _hover: { bg: 'red.700', color: 'white' },
    },
  },
});

const Text = defineStyleConfig({
  variants: {
    title: {
      lineHeight: '1.4',
      fontWeight: 'extrabold',
      fontSize: '20px',
    },
    subtitle: {
      lineHeight: '1.43',
      fontWeight: 'regular',
      fontSize: '14px',
      subtile: 'gray.800',
    },
    normal: {
      lineHeight: '1.5',
      fontWeight: 'semibold',
      fontSize: '15px',
    },
  },
});

const theme = extendTheme({
  id: 'purple',
  name: 'Purple Theme',
  semanticTokens: {
    colors: {
      topBarBg: {
        default: 'primary.900',
        _dark: 'secondary.900',
      },
      sideBarBg: {
        default: 'primary.700',
        _dark: 'secondary.800',
      },
      backgroundBg: {
        default: 'secondary.100',
        _dark: 'primary.900',
      },
      sideBarItem: {
        default: 'primary.900',
        _dark: 'secondary.700',
      },
      createButtonBg: {
        default: 'primary.500',
        _dark: 'secondary.600',
      },
      tabBg: {
        default: 'secondary.50',
        _dark: 'secondary.700',
      },
      cardBg: {
        default: 'secondary.50',
        _dark: 'secondary.600',
      },
      panelInputBg: { default: 'primary.800', _dark: 'secondary.800' },
      borderColor: {
        default: 'secondary.300',
        _dark: 'primary.600',
      },
      textHover: {
        default: 'secondary.200',
        _dark: 'primary.800',
      },
      hoverBg: { default: 'secondary.50', _dark: 'secondary.700' },
      notSelectedTextColor: {
        default: 'secondary.700',
        _dark: 'secondary.500',
      },
      wizzardBg: {
        default: 'secondary.50',
        _dark: 'secondary.700',
      },
    },
  },
  colors: {
    black: '#0c1016',
    text: {
      default: 'white',
    },
    secondary: {
      50: '#faf9fb',
      100: '#f3f0f5',
      200: '#ebe6ee',
      300: '#dad1e0',
      400: '#b9a6c3',
      500: '#9174a1',
      600: '#6c4581',
      700: '#4a285c',
      800: '#2c1836',
      900: '#23132b',
    },
    pink: {
      50: '#fdf6f9',
      100: '#f5dae8',
      200: '#edbbd4',
      300: '#e291ba',
      400: '#da72a7',
      500: '#ba5a8a',
      600: '#9f4d76',
      700: '#813f60',
      800: '#64314b',
      900: '#4a2437',
    },
    red: {
      50: '#fdf6f6',
      100: '#f5dada',
      200: '#edb9b9',
      300: '#e29090',
      400: '#dc7777',
      500: '#c25f5f',
      600: '#a45050',
      700: '#844040',
      800: '#703636',
      900: '#512727',
    },
    orange: {
      50: '#fdfaf7',
      100: '#f7ebdf',
      200: '#edd5bb',
      300: '#e0b487',
      400: '#cc9863',
      500: '#af8355',
      600: '#946e48',
      700: '#765839',
      800: '#5d452d',
      900: '#4c3925',
    },
    yellow: {
      50: '#fefefc',
      100: '#fbf9ef',
      200: '#f3edd1',
      300: '#eae0ad',
      400: '#dccc7a',
      500: '#b8a859',
      600: '#938747',
      700: '#726938',
      800: '#564f2a',
      900: '#474122',
    },
    green: {
      50: '#f6fdfa',
      100: '#d0f3e1',
      200: '#9be5c0',
      300: '#66d29d',
      400: '#59b889',
      500: '#4d9e76',
      600: '#408361',
      700: '#31664c',
      800: '#28533e',
      900: '#214433',
    },
    teal: {
      50: '#f2fcfc',
      100: '#c6f0f0',
      200: '#92e3e3',
      300: '#64cece',
      400: '#55afaf',
      500: '#489595',
      600: '#3b7979',
      700: '#2e5e5e',
      800: '#264e4e',
      900: '#1f4040',
    },
    cyan: {
      50: '#f5fbfc',
      100: '#d3eef4',
      200: '#bfe6ee',
      300: '#a8dde8',
      400: '#67c1d4',
      500: '#5fb2c3',
      600: '#55a0af',
      700: '#468491',
      800: '#3a6d77',
      900: '#2d545c',
    },
    blue: {
      50: '#f2f7fc',
      100: '#cee0f2',
      200: '#aac9e9',
      300: '#82b0de',
      400: '#6398cd',
      500: '#5582b0',
      600: '#476d93',
      700: '#375370',
      800: '#2d445c',
      900: '#24374b',
    },
    purple: {
      50: '#f8f6fd',
      100: '#e4dbf6',
      200: '#cfc0ef',
      300: '#b299e4',
      400: '#9d7ddd',
      500: '#805fc3',
      600: '#6b4fa3',
      700: '#584185',
      800: '#48356d',
      900: '#352750',
    },
    primary: {
      50: '#f9f6fd',
      100: '#e8dbf6',
      200: '#d5bcee',
      300: '#bd95e4',
      400: '#af7fde',
      500: '#9a64ce',
      600: '#8255ae',
      700: '#68448c',
      800: '#583976',
      900: '#3f2955',
    },
  },

  components: {
    Button,
    Text,
  },
});

export default theme;
