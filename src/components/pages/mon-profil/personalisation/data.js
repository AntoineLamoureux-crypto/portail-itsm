import PurpleTheme from '../../../../themes/PurpleTheme';
import DazzmTheme from '../../../../themes/DazzmTheme';
import TealTheme from '../../../../themes/TealTheme';
import DefaultTheme from '../../../../themes/DefaultTheme';
import PinkTheme from '../../../../themes/PinkTheme';
import YellowTheme from '../../../../themes/YellowTheme';
import MonoSpaceFontStyle from '../../../../themes/MonoSpaceFontStyle';
import SansSherifFontStyle from '../../../../themes/SansSherifFontStyle';
import SmallBorderStyle from '../../../../themes/SmallBorderStyle';
import MediumBorderStyle from '../../../../themes/MediumBorderStyle';
import RoundBorderStyle from '../../../../themes/RoundBorderStyle';
import DefaultFontStyle from '../../../../themes/DefaultFontStyle';

import ShadowStyle from '../../../../themes/ShadowStyle';
import NormalStyle from '../../../../themes/NormalStyle';
import DefinedStyle from '../../../../themes/DefinedStyle';
import CombinedStyles from '../../../../themes/CombinedStyles';

export const themes = [
  { bg: 'rgb(105,38,208)', theme: PurpleTheme },
  { bg: '#ffe01a', theme: YellowTheme },
  { bg: '#e01ebd', theme: PinkTheme },
  { bg: 'rgb(27,81,146)', theme: DazzmTheme },
  { bg: 'rgb(60,89,93)', theme: TealTheme },
  { bg: 'gray.500', theme: DefaultTheme },
];

export const stylesApp = [
  { title: 'Normal', theme: NormalStyle },
  { title: 'Définie', theme: DefinedStyle },
  { title: 'Ombrée', theme: ShadowStyle },
  { title: 'Combiné', theme: CombinedStyles },
];

export const FontStyles = [
  { fontFamily: SansSherifFontStyle, name: 'Sans-sherif' },
  { fontFamily: MonoSpaceFontStyle, name: 'monospace' },
  { fontFamily: DefaultFontStyle, name: 'Open sans' },
];

export const BorderStyles = [
  { style: SmallBorderStyle, name: 'sm' },
  { style: MediumBorderStyle, name: 'md' },
  { style: RoundBorderStyle, name: 'xl' },
];
