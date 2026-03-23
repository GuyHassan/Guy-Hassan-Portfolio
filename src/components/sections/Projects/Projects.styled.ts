import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 8rem 2rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  position: relative;

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

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
  letter-spacing: -0.02em;
  margin-bottom: 0.8rem;
`;

export const SubText = styled(motion.p)`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled(motion.div)<{ $clickable: boolean }>`
  display: block;
  position: relative;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  padding: 1.8rem;
  overflow: hidden;
  cursor: ${({ $clickable }) => ($clickable ? 'default' : 'default')};
  transition: border-color ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: ${({ $clickable }) => ($clickable ? 'translateY(-4px)' : 'translateY(-2px)')};
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);

    &::before {
      transform: ${({ $clickable }) => ($clickable ? 'scaleX(1)' : 'scaleX(0)')};
    }
  }
`;

export const ProjectType = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.7rem;
`;

export const ProjectDesc = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: 1.2rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Tag = styled.span`
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  padding: 0.2rem 0.6rem;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.accentDim};
  color: ${({ theme }) => theme.colors.accent};
`;

export const Arrow = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textDim};
  transition: color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.accent};
    transform: translate(2px, -2px);
  }
`;
