import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroBg from '../../../assets/images/hero-bg-new.png';

export const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const BgImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center top;
  filter: ${({ theme }) => theme.isDark ? 'brightness(0.35)' : 'brightness(0.55)'};
  z-index: 0;
`;

export const BgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) =>
    theme.isDark
      ? 'linear-gradient(to bottom, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.7) 60%, rgba(10,10,15,1) 100%)'
      : 'linear-gradient(to bottom, rgba(244,244,249,0.3) 0%, rgba(244,244,249,0.6) 60%, rgba(244,244,249,1) 100%)'};
  z-index: 1;
`;

export const GridLines = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 1.5rem;
  padding-bottom: 7rem;
  max-width: 900px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-bottom: 9rem;
  }
`;

export const Greeting = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 1rem;
`;

export const TypewriterLine = styled(motion.h2)`
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.02em;
  margin-bottom: 2.5rem;
  min-height: 2rem;

  span {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 500;
  }
`;

export const BlinkCursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: ${({ theme }) => theme.colors.accent};
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export const CTAGroup = styled(motion.div)`
  display: flex;
  gap: 0.9rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const PrimaryBtn = styled(Link)`
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentText};
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: default;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.accentGlow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 220px;
    text-align: center;
  }
`;

export const SecondaryBtn = styled.a`
  padding: 0.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.borderHover};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: default;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: inline-block;

  &:hover {
    background: ${({ theme }) => theme.colors.accentDim};
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 220px;
    text-align: center;
  }
`;

export const CVBtn = styled.a`
  padding: 0.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: default;
  transition: all ${({ theme }) => theme.transitions.fast};
  display: inline-block;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 220px;
    text-align: center;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.accent}, transparent);
`;
