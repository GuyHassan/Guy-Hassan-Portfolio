import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { accentThemes, DEFAULT_ACCENT } from '../styles/themes';

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

// Backward-compat aliases
export const ThemeToggleContext = ThemeContext;
export const useThemeToggle = useThemeContext;

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [accentName, setAccentName] = useState(DEFAULT_ACCENT);

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
