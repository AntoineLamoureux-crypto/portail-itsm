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

const Tab = defineStyleConfig({
  baseStyle: {
    borderRadius: 'default',
    w: '100%',
    direction: 'column',
  },
});

const theme = extendTheme({
  id: 'default',
  name: 'Default Theme',
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1760px',
    '2xl': '1536px',
  },
  semanticTokens: {
    colors: {
      topBarBg: {
        default: 'white',
        _dark: 'secondary.900',
      },
      sideBarBg: {
        default: 'primary.700',
        _dark: 'secondary.800',
      },
      backgroundBg: {
        default: '#EEF6FB',
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
      darkBorderColor: {
        default: '#354877',
        _dark: 'primary.600',
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
      lightTextColor: {
        default: 'white',
        _dark: 'black',
      },
      darkTextColor: {
        default: 'black',
        _dark: 'white',
      },
      selected: {
        default: 'primary.800',
        _dark: 'primary.400',
      },
      sideBarTextColor: {
        default: 'white',
        _dark: 'white',
      },
      defaultIconColor: {
        default: 'white',
        _dark: 'white',
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
    black: '#0e0f16',
    text: {
      default: 'white',
    },
    secondary: {
      50: '#f9f9fa',
      100: '#f1f1f3',
      200: '#e6e7eb',
      300: '#d2d4da',
      400: '#a9acb9',
      500: '#797e93',
      600: '#4d536e',
      700: '#30364c',
      800: '#1c1f2c',
      900: '#171923',
    },
    pink: {
      50: '#fef5f9',
      100: '#fad8e9',
      200: '#f7b7d7',
      300: '#f189bd',
      400: '#ed64a8',
      500: '#e52384',
      600: '#c61b71',
      700: '#a2165c',
      800: '#7f1148',
      900: '#5f0d36',
    },
    red: {
      50: '#fef5f5',
      100: '#fad8d8',
      200: '#f6b5b5',
      300: '#f18888',
      400: '#ee6b6b',
      500: '#e83a3a',
      600: '#cf1c1c',
      700: '#a81717',
      800: '#8f1313',
      900: '#690e0e',
    },
    orange: {
      50: '#fefaf6',
      100: '#fbeada',
      200: '#f6d3af',
      300: '#eeaf70',
      400: '#e78d32',
      500: '#ce751c',
      600: '#ae6318',
      700: '#8b4f13',
      800: '#6d3e0f',
      900: '#5a330c',
    },
    yellow: {
      50: '#fffefb',
      100: '#fcf9e9',
      200: '#f7eebd',
      300: '#f1e088',
      400: '#e8cb39',
      500: '#c2a61a',
      600: '#9b8515',
      700: '#796810',
      800: '#5b4e0c',
      900: '#4b400a',
    },
    green: {
      50: '#f3fef8',
      100: '#bdf7da',
      200: '#68eeab',
      300: '#1dd97b',
      400: '#1abe6c',
      500: '#16a45d',
      600: '#12874d',
      700: '#0e693c',
      800: '#0c5631',
      900: '#0a4728',
    },
    teal: {
      50: '#edfdfd',
      100: '#abf5f5',
      200: '#4aeaea',
      300: '#1dd3d3',
      400: '#18b3b3',
      500: '#159898',
      600: '#117c7c',
      700: '#0d6060',
      800: '#0b5050',
      900: '#094242',
    },
    cyan: {
      50: '#f2fcfd',
      100: '#c7f0f9',
      200: '#ade9f5',
      300: '#8ee1f2',
      400: '#23c5e5',
      500: '#1db5d3',
      600: '#1aa3bf',
      700: '#15879e',
      800: '#126f82',
      900: '#0e5664',
    },
    blue: {
      50: '#f0f7fd',
      100: '#c8e0f9',
      200: '#a0caf4',
      300: '#72b0ef',
      400: '#4597e9',
      500: '#1e80e1',
      600: '#1a6bbc',
      700: '#145290',
      800: '#104376',
      900: '#0d3760',
    },
    purple: {
      50: '#f8f6fe',
      100: '#e5dafb',
      200: '#d1bef7',
      300: '#b495f3',
      400: '#a078ef',
      500: '#8451eb',
      600: '#6e32e7',
      700: '#581cd0',
      800: '#4917ac',
      900: '#361181',
    },
    primary: {
      50: '#f7f7f8',
      100: '#dfe0e4',
      200: '#c3c6cc',
      300: '#a1a6b0',
      400: '#8f94a1',
      500: '#767d8c',
      600: '#62697b',
      700: '#4c5568',
      800: '#404758',
      900: '#2e3340',
    },
  },
  radii: {
    default: '0.375rem',
  },
  components: {
    Button,
    Text,
    Tab,
  },
});

export default theme;
