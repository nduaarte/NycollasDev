import React from 'react';

import { Container, HardSkills, KnownSkills, Row, Title } from './styles';
import TreeItem from '../../../Components/TreeItem';

const Tree: React.FC = () => {
  return (
    <Container>
      <HardSkills>
        <Title>Forte</Title>
        <TreeItem bottom />
        <Row>
          <TreeItem bottom />
          <TreeItem left right bottom />
          <TreeItem bottom />
        </Row>

        <Row>
          <TreeItem bottom />
          <TreeItem left right />
          <TreeItem bottom />
        </Row>
      </HardSkills>

      <KnownSkills>
        <Title>Conhecedor</Title>
      </KnownSkills>
    </Container>
  );
}

export default Tree;