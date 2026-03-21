const shared = {
  fonts: {
    heading: "'Inter', 'SF Pro Display', -apple-system, sans-serif",
    body: "'Inter', -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.6s ease',
  },
};

export const darkTheme = {
  ...shared,
  isDark: true,
  colors: {
    bg: '#0a0a0f',
    bgSecondary: '#0f0f1a',
    bgCard: 'rgba(255, 255, 255, 0.03)',
    accent: '#00d4aa',
    accentDim: 'rgba(0, 212, 170, 0.15)',
    accentGlow: 'rgba(0, 212, 170, 0.4)',
    accentText: '#0a0a0f',
    text: '#e8e8f0',
    textMuted: '#7a7a9a',
    textDim: '#4a4a6a',
    border: 'rgba(255, 255, 255, 0.06)',
    borderHover: 'rgba(0, 212, 170, 0.3)',
    heading: '#ffffff',
  },
};

export const lightTheme = {
  ...shared,
  isDark: false,
  colors: {
    bg: '#f4f4f9',
    bgSecondary: '#eaeaf4',
    bgCard: 'rgba(0, 0, 0, 0.03)',
    accent: '#008f72',
    accentDim: 'rgba(0, 143, 114, 0.1)',
    accentGlow: 'rgba(0, 143, 114, 0.3)',
    accentText: '#ffffff',
    text: '#1e1e30',
    textMuted: '#58587a',
    textDim: '#9898b5',
    border: 'rgba(0, 0, 0, 0.08)',
    borderHover: 'rgba(0, 143, 114, 0.35)',
    heading: '#0a0a1a',
  },
};

// default export kept for any legacy usage
export const theme = darkTheme;
