import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 1.25rem;
    right: 1.25rem;
  }
`;

export const TriggerBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  transition: all ${({ theme }) => theme.transitions.fast};
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.08);
    box-shadow: 0 4px 20px ${({ theme }) => theme.colors.accentDim};
  }
`;

export const Dropdown = styled(motion.div)`
  position: absolute;
  bottom: calc(100% + 0.6rem);
  right: 0;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 170px;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
`;

export const DropdownLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  color: ${({ theme }) => theme.colors.textDim};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem 0.4rem;
`;

export const ColorOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 7px;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  background: ${({ $active, theme }) => ($active ? theme.colors.accentDim : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.textMuted)};
  font-size: 0.8rem;
  font-weight: 500;
  cursor: default;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-align: left;

  &:hover {
    background: ${({ theme }) => theme.colors.accentDim};
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Swatch = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`;
