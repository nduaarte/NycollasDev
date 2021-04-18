import React from 'react';
import { useHistory } from "react-router-dom";
import { motion } from 'framer-motion';

import Footer from '../../Components/Footer';

import {
  Container,
  TitleContainer,
  ButtonsContainer,
  Button1,
  Button2,
  Button3,
  Button4,
  TreeIcon,
  UserIcon,
  ProjectIcon,
  GithubIcon,
} from './styles';

const Landing: React.FC = () => {
  const history = useHistory();

  function navigate(route: string) {
    history.push(route);
  }

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div initial={{ x: -30, opacity: 0.1 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: 'circOut', duration: 1.5 }}>
        <TitleContainer>
          <h1>Nycollas Duarte</h1>
          <h3>Mobile Developer | React Native</h3>
        </TitleContainer>
      </motion.div>

      <ButtonsContainer>
        <Button1 onClick={() => navigate('/SkillsTree')}>
          <TreeIcon />
        </Button1>

        <Button2 onClick={() => navigate('/About')}>
          <UserIcon />
        </Button2>

        <Button3>
          <ProjectIcon />
        </Button3>

        <a href="https://github.com/redspaace" target="_blank" rel="noreferrer">
          <Button4>
            <GithubIcon />
          </Button4>
        </a>
      </ButtonsContainer>

      <Footer />
    </Container>
  );
}

export default Landing;