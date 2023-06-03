import {TextStyle} from 'react-native';

const sizes = {
  xs: 10,
  sm: 12,
  default: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
};

const weights: {[key: string]: TextStyle['fontWeight']} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export default {sizes, weights};
