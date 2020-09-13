import { DefaultTheme } from 'react-native-paper'
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const DIMENSIONS = {
  WINDOW_WIDTH: width,
  WINDOW_HEIGHT: height,
}

export const fontSizes = {
  xxs: 10,
  xs: 12,
  s: 14,
  m: 16,
  l: 18,
  xl: 22,
  xxl: 24,
  xxxl: 28,
  xxxxl: 32,
}

// TODO: deprecate as many as possible
const UNIQUE_COLORS = {
  BLEACHED_SILK: '#F2F2F2',
  WEATHERED_STONE: '#C4C4C4',
  TIN_SOLDIER: '#BDBDBD',
  CODEX_GREY: '#757575',
  BLACK_OAK: '#4F4F4F',
  EXPLORATION_GREEN: '#27AE60',
  DARK_MOUNTAIN_MEADOW: '#00B386',
  SPARKLING_RED: '#F33636',
  SCAMPI: '#7660A0',
  VANISHING: '#230F4E',
  ROMAN_PURPLE: '#4F4661',
  DAYBREAK: '#8F85A5',
  PIXIELAND: '#B3A9C8',
  VIOLET_BOUQUET: '#BBB2CC',
  GOUDA_GOLD: '#F2D01E',
  RADIANT_YELLOW: '#F59A22',
  BLOOD_ORANGE: '#D0021B',
  BLUE_RASPBERRY: '#4DC9F2',
  BIO_BLUE: '#3b5998',
  ACORN_SQUASH: '#EBA23D',
  BLACK_MARKET: '#1B1D3B',
  MANGOSTEEN: '#3B3D5A',
  BUBBLY_BARRACUDA: '#69C6F8',
  CANYON_CLOUD: '#b1b1bd',
  COMMON_CHESTNUT: '#CD605B',
  SPANISH_ROAST: '#11122F',
  SPUN_PEARL: '#A4A5B1',
}

export const COLORS = {
  ...UNIQUE_COLORS,
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  BRAND_BLUE: '#1B1D3B',
  BRAND_GRAYBLUE: '#3B3D5A',
  BRAND_LIGHTBLUE: '#69C6F8',
  BRAND_RED: '#CD605B',
  BRAND_ORANGE: '#EBA23D',
}

export const space = {
  xxs: '2px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
}

export const fontWeights = {
  light: '300',
  normal: '400',
  semi_bold: '600',
  bold: '700',
}

export const radius = {
  xs: '1px',
  s: '2px',
  m: '4px',
  l: '10px',
  xl: '30px',
  circle: '50px',
  pill: '9999px',
}

export const theme = {
  ...DefaultTheme,
  ...NavigationDefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#68C5EE',
    backdrop: '#000000CC',
    secondary: '#414757',
    error: '#F13A59',
    success: COLORS.DARK_MOUNTAIN_MEADOW,
  },
}
