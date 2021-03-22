import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header';
import SkillModal from '../../Components/SkillModal'
import HardSkills from './HardSkills';
import KnowSkills from './KnowSkills';

const SkillsTree: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  function toggle() {
    return setIsVisible(!isVisible);
  }

  useEffect(() => {
    toggle();
  }, []);

  return (
    <Container>
      <Header />

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
`;
