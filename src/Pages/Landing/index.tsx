import React from 'react';
import { motion } from 'framer-motion';

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
  Footer,
  CopyIcon
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <motion.div initial={{ opacity: 0.1}} animate={{ x: 30, opacity: 1 }} transition={{ ease: 'circOut', duration: 1.5 }}>
        <TitleContainer>
          <h1>Nycollas Duarte</h1>
          <h3>Mobile Developer | React Native</h3>
        </TitleContainer>
      </motion.div>

      <ButtonsContainer>
        <Button1>
          <TreeIcon />
        </Button1>

        <Button2>
          <UserIcon />
        </Button2>

        <Button3>
          <ProjectIcon />
        </Button3>

        <Button4>
          <GithubIcon />
        </Button4>
      </ButtonsContainer>

      <Footer>
        <CopyIcon />
        <p>2021 - Made by Nycollas | Linkedin | Github | Twitter</p>
      </Footer>
    </Container>
  );
}

export default Landing;