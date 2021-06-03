import React from 'react';

import { Container, FirstLine, SecondLine, CopyIcon } from './styles';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <FirstLine>
        <CopyIcon />
        <span>
          {year} - Todos os Direitos Reservados
        </span>
      </FirstLine>

      <SecondLine>
        <span>
          Made by redspace | 
          <a href="https://www.linkedin.com/in/nduaarte/" target="_blank" rel="noreferrer"> Linkedin</a> | 
          <a href="https://github.com/redspaace" target="_blank" rel="noreferrer"> Github</a> | 
          <a> Twitter</a>
        </span>
      </SecondLine>
    </Container>
  );
}

export default Footer;