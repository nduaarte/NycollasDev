import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import HardSkills from './HardSkills';
import KnowSkills from './KnowSkills';

const SkillsTree: React.FC = () => {
  return (
    <Container>
      <Header />

      <Trees>
        <HardSkills />
        <KnowSkills />
      </Trees>
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
  justify-content: space-between;
  margin: 0 25px;
`;
