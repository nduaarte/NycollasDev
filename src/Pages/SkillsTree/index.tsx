import React from 'react';
import { motion } from 'framer-motion';

import TreeItem from '../../Components/TreeItem';

import {
  Container,
  Header,
  Tittle,
  TreeIcon,
  ButtonBackHome,
  HomeIcon
} from './styles';

const SkillsTree: React.FC = () => {
  return (
    <Container>
      <Header>
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
      </Header>

      <TreeContainer>

      </TreeContainer>
    </Container>
  );
}

export default SkillsTree;