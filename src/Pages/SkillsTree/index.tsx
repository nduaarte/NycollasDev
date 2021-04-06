import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GiBonsaiTree } from 'react-icons/gi';

import Header from '../../Components/Header';
import InfoTodo from './InfoTodo';
import SkillModal from '../../Components/SkillModal'
import HardSkills from './HardSkills';
import KnowSkills from './KnowSkills';

const SkillsTree: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    return setIsVisible(!isVisible);
  }

  useEffect(() => {
    toggle();
  }, []);

  return (
    <Container>
      <Header title='Árvore de Habilidades' icon={GiBonsaiTree} />
      <InfoTodo />
      <Trees>
        <HardSkills />
        {isVisible ? <SkillModal onClose={() => setIsVisible(false)} /> : null}
        <KnowSkills />
      </Trees>
    </Container>
  );
}

export default SkillsTree;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 40px;
`;

const Trees = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 25px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

