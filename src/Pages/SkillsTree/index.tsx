import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../redux/SkillReducer';
import { GiBonsaiTree } from 'react-icons/gi';

import Header from '../../Components/Header';
import InfoTodo from './InfoTodo';
import SkillModal from '../../Components/SkillModal'
import HardSkills from './HardSkills';
import KnowSkills from './KnowSkills';
import Footer from '../../Components/Footer';

const SkillsTree: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRedux = useSelector((state: RootState) => state.SkillReducer.isVisible);

  useEffect(() => {
    isVisibleRedux ? setIsVisible(true) : setIsVisible(false);
  }, [isVisibleRedux]);

  return (
    <Container>
      <Header title='Árvore de Habilidades' icon={GiBonsaiTree} />
      <InfoTodo />
      <Trees>
        <HardSkills />
        {isVisible ? <SkillModal onClose={() => setIsVisible(false)} /> : null}
        <KnowSkills />
      </Trees>
      <Footer />
    </Container>
  );
}

export default SkillsTree;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Trees = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 25px 60px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

