import React from 'react';
import { SiJavascript, SiReact, SiStyledComponents, SiTypescript, SiRedux } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGitSquare } from 'react-icons/fa';
import { GiHook } from 'react-icons/gi';

import TreeItem from '../../../Components/TreeItem';

import {
  Container,
  HardSkills,
  KnownSkills,
  Title,
  Itens,
  Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Item10, Item11, Item12, Item13
} from './styles';

const Tree: React.FC = () => {
  return (
    <Container>
      <HardSkills>
        <Title>Forte</Title>

        <Itens>
          <Item1>
            <TreeItem bottom Icon={SiJavascript} />
          </Item1>

          <Item2>
            <TreeItem bottom Icon={SiReact} />
          </Item2>

          <Item3>
            <TreeItem bottom left right Icon={IoLogoJavascript} />
          </Item3>

          <Item4>
            <TreeItem bottom />
          </Item4>

          <Item5>
            <TreeItem bottom />
          </Item5>

          <Item6>
            <TreeItem Icon={FaGitSquare} />
          </Item6>

          <Item7>
            <TreeItem bottom />
          </Item7>

          <Item8>
            <TreeItem Icon={SiStyledComponents} />
          </Item8>

          <Item9>
            <TreeItem left right bottom />
          </Item9>

          <Item10>
            <TreeItem bottom Icon={GiHook} />
          </Item10>

          <Item11>
            <TreeItem Icon={SiTypescript} />
          </Item11>

          <Item12>
            <TreeItem Icon={SiRedux} />
          </Item12>

          <Item13>
            <TreeItem />
          </Item13>


        </Itens>
      </HardSkills>

      <KnownSkills>
        <Title>Conhecedor</Title>
      </KnownSkills>
    </Container>
  );
}

export default Tree;