import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 8rem 2rem 6rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, ${({ theme }) => theme.colors.border}, transparent);
  }
`;

export const GlowBg = styled.div`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, ${({ theme }) => theme.colors.accentDim} 0%, transparent 70%);
  pointer-events: none;
`;

export const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const SectionLabel = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Heading = styled(motion.h2)`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 1.5rem;
`;

export const SubText = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: 3rem;
`;

export const EmailLink = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accentText};
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 6px;
  letter-spacing: 0.05em;
  margin-bottom: 3.5rem;
  transition: transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.colors.accentGlow};
  }
`;

export const SocialRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentDim};
    transform: translateY(-2px);
  }
`;

export const EmailText = styled(motion.a)`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textDim};
  letter-spacing: 0.04em;
  margin-bottom: 3rem;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Footer = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textDim};
  letter-spacing: 0.05em;
`;
