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
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

export const CategoryCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: 0 4px 30px ${({ theme }) => theme.colors.accentDim};
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-family: ${({ theme }) => theme.fonts.mono};
  margin-bottom: 1.2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const SkillItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transitions.fast};

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.6;
    flex-shrink: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};

    &::before {
      opacity: 1;
    }
  }
`;
