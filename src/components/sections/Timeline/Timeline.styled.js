import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 8rem 2rem;
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

export const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
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
`;

export const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 0;
  }
`;

export const TimelineLine = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.textDim});
  transform-origin: top;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 50%;
  }
`;

export const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 46%;
    padding-left: 0;
    padding-right: 0;

    &:nth-child(odd) {
      margin-left: 4%;
      padding-left: 2.5rem;
    }

    &:nth-child(even) {
      margin-left: auto;
      margin-right: 4%;
      padding-right: 2.5rem;
      text-align: right;
    }
  }
`;

export const TimelineDot = styled(motion.div)`
  position: absolute;
  left: -2rem;
  top: 1.2rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.bgSecondary};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  transition: background ${({ theme }) => theme.transitions.fast};
  z-index: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: auto;
    right: auto;

    div:nth-child(odd) & {
      left: -2.2rem;
    }

    div:nth-child(even) & {
      right: -2.2rem;
      left: auto;
    }
  }
`;

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ $active, theme }) =>
    $active ? theme.colors.borderHover : theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  cursor: none;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 4px 40px ${({ theme }) => theme.colors.accentDim};
  }
`;

export const Period = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.1em;
  margin-bottom: 0.4rem;
`;

export const Role = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.2rem;
`;

export const Company = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1rem;

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Highlights = styled(motion.ul)`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const HighlightItem = styled.li`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 1rem;
`;

export const Tag = styled.span`
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  padding: 0.2rem 0.6rem;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.accentDim};
  color: ${({ theme }) => theme.colors.accent};
  letter-spacing: 0.05em;
`;
