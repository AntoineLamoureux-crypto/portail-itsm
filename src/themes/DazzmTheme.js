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
  id: 'dazzm',
  name: 'Dazzm Theme',
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
      sideBarTextColor: {
        default: 'white',
        _dark: 'white',
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
    black: '#0b1013',
    text: {
      default: 'white',
    },
    secondary: {
      50: '#f8fafa',
      100: '#eef2f4',
      200: '#e2e9eb',
      300: '#c9d6db',
      400: '#98b1bb',
      500: '#5e8494',
      600: '#3a5965',
      700: '#263941',
      800: '#162226',
      900: '#121b1f',
    },
    blue: {
      50: '#f1f6ff',
      100: '#cbdfff',
      200: '#a4c7ff',
      300: '#7dadf9',
      400: '#6b95d6',
      500: '#5c80b8',
      600: '#4d6b9a',
      700: '#3b5275',
      800: '#304360',
      900: '#27364e',
    },
    purple: {
      50: '#faf5ff',
      100: '#e9d8ff',
      200: '#d9baff',
      300: '#c18eff',
      400: '#aa75ea',
      500: '#875ebb',
      600: '#714e9c',
      700: '#5c407f',
      800: '#4c3468',
      900: '#38274d',
    },
    pink: {
      50: '#fff5f9',
      100: '#ffd6e6',
      200: '#ffb4d1',
      300: '#ff81b2',
      400: '#e0709b',
      500: '#b95d80',
      600: '#9e4f6e',
      700: '#804059',
      800: '#643245',
      900: '#492533',
    },
    orange: {
      50: '#fffaf2',
      100: '#ffebca',
      200: '#ffd28a',
      300: '#e0b571',
      400: '#c29c61',
      500: '#a78754',
      600: '#8c7146',
      700: '#705a38',
      800: '#58472c',
      900: '#483a24',
    },
    green: {
      50: '#eefff9',
      100: '#95ffd6',
      200: '#76ebbe',
      300: '#69d1a9',
      400: '#5cb794',
      500: '#4f9d7f',
      600: '#418269',
      700: '#336552',
      800: '#295343',
      900: '#224437',
    },
    teal: {
      50: '#e5fffe',
      100: '#7efcf6',
      200: '#74e7e1',
      300: '#67cec9',
      400: '#58afab',
      500: '#4b9591',
      600: '#3d7976',
      700: '#2f5e5b',
      800: '#274e4c',
      900: '#20403f',
    },
    cyan: {
      50: '#edfdff',
      100: '#acf5ff',
      200: '#80f0ff',
      300: '#7ae4f2',
      400: '#67c2ce',
      500: '#5fb2bd',
      600: '#56a0aa',
      700: '#47858d',
      800: '#3a6d74',
      900: '#2d5459',
    },
    primary: {
      50: '#ecfaff',
      100: '#b2e8ff',
      200: '#7ad1f4',
      300: '#67afcd',
      400: '#5c9db7',
      500: '#4e849a',
      600: '#416f82',
      700: '#345968',
      800: '#2c4b58',
      900: '#203640',
    },
  },
  components: {
    Button,
    Text,
  },
});

export default theme;
