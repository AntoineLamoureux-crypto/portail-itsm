import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    bg: 'gray.400',
  },
  variants: {
    create: {
      textColor: 'white',
      fontSize: '15px',
      _hover: { bg: '#6A765D' },
    },
    default: {
      bg: '#818C75',
      _hover: { bg: '#6A765D', color: 'white' },
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
    p: '22px',
    spacing: '24px',
    borderRadius: 'default',
    w: '100%',
    direction: 'column',
    bg: 'tabBg',
  },
});

const theme = extendTheme({
  id: 'default',
  name: 'Default Theme',
  semanticTokens: {
    colors: {
      topBarBg: {
        default: 'yellow.300',
        _dark: 'secondary.900',
      },
      sideBarBg: {
        default:
          'linear-gradient(360deg, hsla(88, 29%, 77%, 1) 19%, hsla(51, 88%, 68%, 1) 88%)',
        _dark: 'secondary.800',
      },
      backgroundBg: {
        default:
          'linear-gradient(360deg, hsla(88, 29%, 77%, 1) 19%, hsla(51, 88%, 68%, 1) 88%)',
        _dark: 'primary.900',
      },
      sideBarItem: {
        default: 'gray.100',
        _dark: 'secondary.700',
      },
      selected: {
        default: 'gray.500',
        _dark: 'primary.400',
      },
      createButtonBg: {
        default: '#818C75',
        _dark: 'secondary.600',
      },
      tabBg: {
        default: 'gray.50',
        _dark: 'secondary.700',
      },
      cardBg: {
        default: 'gray.100',
        _dark: 'secondary.600',
      },
      panelInputBg: { default: 'primary.800', _dark: 'secondary.800' },
      borderColor: {
        default: 'gray.200',
        _dark: 'primary.600',
      },
      lightTextColor: {
        default: 'white',
        _dark: 'white',
      },
      darkTextColor: {
        default: 'black',
        _dark: 'white',
      },
      sideBarTextColor: {
        default: 'black ',
        _dark: 'white',
      },
      defaultIconColor: {
        default: 'black',
        _dark: 'white',
      },
      textHover: {
        default: 'gray.100',
        _dark: 'primary.800',
      },
      sideBarItemSelected: {
        default: 'white',
        _dark: 'black',
      },
      hoverBg: { default: 'gray.100', _dark: 'secondary.700' },
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
    black: '#0c1015',
    secondary: {
      50: '#f9fafa',
      100: '#f1f1f2',
      200: '#e6e7e9',
      300: '#d2d4d7',
      400: '#a9adb2',
      500: '#797f88',
      600: '#4d5560',
      700: '#2e3744',
      800: '#19202b',
      900: '#141a23',
    },
    green: {
      50: '#f2fef8',
      100: '#b1fad7',
      200: '#4df0a2',
      300: '#45d690',
      400: '#3cbc7e',
      500: '#34a16c',
      600: '#2b855a',
      700: '#216846',
      800: '#1b5539',
      900: '#16462f',
    },
    teal: {
      50: '#ebfdfe',
      100: '#9df7f9',
      200: '#4ceaed',
      300: '#43d1d3',
      400: '#39b1b3',
      500: '#319799',
      600: '#287a7c',
      700: '#1f5f60',
      800: '#1a4f50',
      900: '#154142',
    },
    cyan: {
      50: '#f1fcfe',
      100: '#c3f1fb',
      200: '#a6eaf9',
      300: '#83e2f7',
      400: '#47c4df',
      500: '#41b4cd',
      600: '#3ba2b8',
      700: '#318699',
      800: '#286e7d',
      900: '#1f5561',
    },
    blue: {
      50: '#f0f7fe',
      100: '#c7e0fc',
      200: '#9ecaf9',
      300: '#6fb0f6',
      400: '#4a97e9',
      500: '#4081c8',
      600: '#356ca7',
      700: '#295380',
      800: '#214469',
      900: '#1b3755',
    },
    purple: {
      50: '#f9f5fe',
      100: '#e6d9fd',
      200: '#d3bdfb',
      300: '#b793f8',
      400: '#a275f6',
      500: '#864df1',
      600: '#7040c9',
      700: '#5c35a5',
      800: '#4b2b87',
      900: '#382064',
    },
    pink: {
      50: '#fef5f9',
      100: '#fdd7e9',
      200: '#fab5d7',
      300: '#f785bc',
      400: '#f55ca6',
      500: '#d24388',
      600: '#b43a75',
      700: '#932f5f',
      800: '#73254a',
      900: '#541b37',
    },
    red: {
      50: '#fef5f5',
      100: '#fdd8d7',
      200: '#fab4b2',
      300: '#f78482',
      400: '#f56562',
      500: '#dc4946',
      600: '#ba3e3b',
      700: '#963230',
      800: '#7f2a29',
      900: '#5c1f1e',
    },
    orange: {
      50: '#fefaf5',
      100: '#fcead7',
      200: '#fad2a7',
      300: '#f5ad5f',
      400: '#da9346',
      500: '#bc7e3c',
      600: '#9e6b33',
      700: '#7e5528',
      800: '#634320',
      900: '#52371a',
    },
    yellow: {
      50: '#fffefa',
      100: '#fdf9e3',
      200: '#faeeac',
      300: '#f5e066',
      400: '#e3cc49',
      500: '#bba83c',
      600: '#968630',
      700: '#756925',
      800: '#574e1c',
      900: '#484117',
    },
    primary: {
      50: '#fafbc0',
      100: '#e5e84a',
      200: '#cacc41',
      300: '#a9ab37',
      400: '#979931',
      500: '#808129',
      600: '#6c6d23',
      700: '#56571c',
      800: '#494a18',
      900: '#353511',
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
