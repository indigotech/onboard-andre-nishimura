import { Key } from 'react';
import baseStyled, { ThemedBaseStyledInterface } from 'styled-components';

export type ThemeProperty = Record<Key, string>;
export type Theme = Record<Key, ThemeProperty>;

export const styled = baseStyled as ThemedBaseStyledInterface<Theme>;

const colors = {
  blue: '#2596BE',
  black: '#000000',
  lightGray: '#DDDDDD',
  gray: '#777777',
  white: '#FFFFFF',
  red: '#BE2528',
};

const fontWeights = {
  regular: '400',
  semibold: '600',
  bold: '700',
};

const fontSizes = {
  small: '12px',
  medium: '16px',
  large: '24px',
};

const button = {
  minHeight: '44px',
  defaultBorderRadius: '8px',
};

const input = {
  defaultBorderStyle: 'solid',
  defaultBorderWidth: '1px',
};

export const theme = {
  colors: colors,
  fontWeights: fontWeights,
  fontSizes: fontSizes,
  button: button,
  input: input,
};
