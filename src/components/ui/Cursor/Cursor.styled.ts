import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CursorOuter = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: difference;
`;

export const CursorInner = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
`;
