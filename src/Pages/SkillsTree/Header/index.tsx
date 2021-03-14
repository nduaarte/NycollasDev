import React from 'react';
import { motion } from 'framer-motion';

import { Container, Tittle, TreeIcon, ButtonBackHome, HomeIcon } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <motion.div initial={{ opacity: 0.1 }} animate={{ x: 30, opacity: 1 }} transition={{ ease: 'circOut', duration: 1.5 }}>
        <Tittle>
          <TreeIcon />
          <h1>Árvore de Habilidades</h1>
        </Tittle>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }}>
        <ButtonBackHome>
          <HomeIcon />
        </ButtonBackHome>
      </motion.div>
    </Container>
  );
}

export default Header;