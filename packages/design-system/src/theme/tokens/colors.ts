type IThemeColors = {
  base: string;
  light: string;
  dark: string;
  reverse: Omit<IThemeColors, 'reverse'>;
};

const gray: IThemeColors = {
  base: '#595d6e',
  dark: '#5B5F71',
  light: '#F1F1F4',
  reverse: {
    base: '#fff',
    dark: '#fff',
    light: '#595d6e',
  },
};

const primary: IThemeColors = {
  base: '#fe5d22',
  dark: '#CB3701',
  light: '#FE885D',
  reverse: {
    base: '#fff',
    dark: '#fff',
    light: '#fff',
  },
};

const danger: IThemeColors = {
  base: '#ff2e5b',
  dark: '#CC002C',
  light: '#FF5C7F',
  reverse: {
    base: '#fff',
    dark: '#fff',
    light: '#fff',
  },
};

const secondary: IThemeColors = {
  base: '#ec1b8d',
  dark: '#BC106E',
  light: '#F268B4',
  reverse: {
    base: '#fff',
    dark: '#fff',
    light: '#fff',
  },
};

const warning: IThemeColors = {
  base: '#ffe7d5',
  dark: '#CC5700',
  light: '#FFA25C',
  reverse: {
    base: '#595d6e',
    dark: '#fff',
    light: '#fff',
  },
};

const info: IThemeColors = {
  base: '#0098ff',
  dark: '#007ACC',
  light: '#5CBDFF',
  reverse: {
    base: '#fff',
    dark: '#fff',
    light: '#fff',
  },
};

export default {
  primary,
  danger,
  secondary,
  warning,
  info,
  gray,
} as const;
