import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Projects: React.FC = () => {
  const history = useHistory();

  function navigate(route: string) {
    history.push(route);
  }

  return(
    <Container>
      <h1>
        Página em desenvolvimento.
      </h1>
      <span>
        Você pode ver os principais projetos
        <a target="_blank" rel="noreferrer" href="https://github.com/redspaace"> clicando aqui</a>
      </span>
      <button onClick={() => navigate('/')}>Voltar</button>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--primary);
    display: flex;
    align-items: center;
  }

  span {
    color: var(--grey);
    margin-top: 5px;
    font-size: 14px;
    
    a {
      color: var(--secundary);
      text-decoration: none;

      :hover {
        color: var(--grey);
      }
    }
  }

  button {
    margin-top: 50px;
    color: var(--secundary);

    :hover {
      color: var(--grey);
      cursor: pointer;
    }
  }
`;