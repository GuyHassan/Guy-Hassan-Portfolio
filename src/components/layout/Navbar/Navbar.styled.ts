import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background ${({ theme }) => theme.transitions.normal},
    backdrop-filter ${({ theme }) => theme.transitions.normal};
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(10, 10, 15, 0.88)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.border : 'transparent'};
`;

export const Logo = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  letter-spacing: 0.05em;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: default;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ThemeToggle = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

export const CVLink = styled.a`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
  padding: 0.3rem 0;
  border-bottom: 1px solid transparent;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileCVLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CTABtn = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 0.45rem 1.1rem;
  border-radius: 4px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: inline-block;

  &:hover {
    background: ${({ theme }) => theme.colors.accentDim};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const HamburgerBtn = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 64px 0 0;
  background: ${({ theme }) => theme.colors.bg};
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const MobileNavItem = styled.li`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MobileCTA = styled.a`
  padding: 0.8rem 2.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentText};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
  margin-top: 0.5rem;
`;
