import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 8rem 2rem;
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
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: border-color ${({ theme }) => theme.transitions.normal},
    transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: 0 12px 40px ${({ theme }) => theme.colors.accentDim};
  }
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
`;

export const Title = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.6rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
`;
