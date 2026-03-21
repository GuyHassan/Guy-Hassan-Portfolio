import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useThemeContext } from '../../../context/ThemeContext';
import { Wrapper, TriggerBtn, Dropdown, DropdownLabel, ColorOption, Swatch } from './ThemeSwitcher.styled';

const SWATCH_COLORS = {
  golden: '#fcd34d',
  emerald: '#00d4aa',
  blue: '#93c5fd',
  peach: '#fdba74',
  rose: '#fda4af',
};

const ThemeSwitcher = () => {
  const { accentName, setAccentName, accentThemes, isDark } = useThemeContext();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <AnimatePresence>
        {open && (
          <Dropdown
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            <DropdownLabel>Accent Color</DropdownLabel>
            {Object.values(accentThemes).map((t) => (
              <ColorOption
                key={t.name}
                $active={accentName === t.name}
                onClick={() => { setAccentName(t.name); setOpen(false); }}
              >
                <Swatch $color={isDark ? t.dark.accent : t.light.accent} />
                {t.label}
              </ColorOption>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
      <TriggerBtn
        onClick={() => setOpen((o) => !o)}
        aria-label="Change accent color"
        title="Change accent color"
      >
        🎨
      </TriggerBtn>
    </Wrapper>
  );
};

export default ThemeSwitcher;
