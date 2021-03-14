import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Tree from './Tree';

const SkillsTree: React.FC = () => {
  return (
    <Container>
      <Header />
      <Tree />
    </Container>
  );
}

export default SkillsTree;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* background: rgb(79,66,111);
  background: linear-gradient(180deg, rgba(79,66,111,1) 0%, rgba(0,0,0,1) 50%); */
`;
