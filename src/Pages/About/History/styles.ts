import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: var(--primary);
  font-size: 28px;
  margin-bottom: 12px;

  @media (min-width: 850px) {
    font-size: 36px;
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  color: var(--darkerWhite);
  font-size: 16px;
  font-weight: bold;
`;