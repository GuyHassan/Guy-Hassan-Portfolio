import 'styled-components';
import type { darkTheme } from './styles/theme';

type AppTheme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
