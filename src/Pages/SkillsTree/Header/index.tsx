import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';

import { Container, Tittle, TreeIcon, ButtonBackHome, HomeIcon } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  function navigate(route: string) {
    history.push(route);
  }

  return (
    <Container>
      <motion.div initial={{ opacity: 0.1 }} animate={{ x: 30, opacity: 1 }} transition={{ ease: 'circOut', duration: 1.5 }}>
        <Tittle>
          <TreeIcon />
          <h1>Árvore de Habilidades</h1>
        </Tittle>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }}>
        <ButtonBackHome onClick={() => navigate('/')}>
          <HomeIcon />
        </ButtonBackHome>
      </motion.div>
    </Container>
  );
}

export default Header;