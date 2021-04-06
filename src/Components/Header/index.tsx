import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';

import { Container, Tittle, Icon, ButtonBackHome, HomeIcon } from './styles';

interface PropsTypes {
  title: string;
  icon: any;
}

const Header: React.FC<PropsTypes> = ({ title, icon }) => {
  const history = useHistory();

  function navigate(route: string) {
    history.push(route);
  }

  return (
    <Container>
      <motion.div initial={{ opacity: 0.1 }} animate={{ x: 30, opacity: 1 }} transition={{ ease: 'circOut', duration: 1.5 }}>
        <Tittle>
          <Icon as={icon} color='#59d9a5' />
          <h1>{title}</h1>
        </Tittle>
      </motion.div>

      <motion.div whileHover={{ y: 5 }}>
        <ButtonBackHome onClick={() => navigate('/')}>
          <HomeIcon />
        </ButtonBackHome>
      </motion.div>
    </Container>
  );
}

export default Header;