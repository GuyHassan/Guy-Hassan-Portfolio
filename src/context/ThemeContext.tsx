import { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { accentThemes, DEFAULT_ACCENT } from '../styles/themes';

export type AccentName = keyof typeof accentThemes;

interface ThemeContextValue {
  isDark: boolean;
  toggle: () => void;
  accentName: AccentName;
  setAccentName: (name: AccentName) => void;
  accentThemes: typeof accentThemes;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useThemeContext = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used inside ThemeContextProvider');
  return ctx;
};

// Backward-compat aliases
export const ThemeToggleContext = ThemeContext;
export const useThemeToggle = useThemeContext;

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const [accentName, setAccentName] = useState<AccentName>(DEFAULT_ACCENT as AccentName);

  const accentColors = accentThemes[accentName][isDark ? 'dark' : 'light'];
  const baseTheme = isDark ? darkTheme : lightTheme;
  const currentTheme = {
    ...baseTheme,
    colors: { ...baseTheme.colors, ...accentColors },
  };

  return (
    <ThemeContext.Provider
      value={{ isDark, toggle: () => setIsDark((d) => !d), accentName, setAccentName, accentThemes }}
    >
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
