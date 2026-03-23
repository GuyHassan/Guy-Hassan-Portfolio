import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
`;

export const ImageFrame = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, transparent 60%);
    z-index: -1;
  }

  img {
    width: 100%;
    height: 460px;
    object-fit: cover;
    border-radius: 6px;
    filter: grayscale(15%);
    transition: filter ${({ theme }) => theme.transitions.normal};

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const GlowRing = styled(motion.div)`
  position: absolute;
  inset: -16px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.accentDim};
  pointer-events: none;
`;

export const Dot = styled(motion.div)`
  position: absolute;
  bottom: -12px;
  right: -12px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  line-height: 1.3;
  font-weight: 600;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.bg};
`;

export const TextContent = styled.div``;

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
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
`;

export const Bio = styled(motion.p)`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  margin-bottom: 1rem;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

export const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatItem = styled(motion.div)`
  text-align: center;
`;

export const StatValue = styled.p`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  line-height: 1;
  margin-bottom: 0.3rem;
`;

export const StatLabel = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
