import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiStyledComponents, SiTypescript, SiRedux } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGitSquare } from 'react-icons/fa';
import { GiHook } from 'react-icons/gi';

import TreeItem from '../../../Components/TreeItem';

import {
  Container,
  Title,
  Itens,
  Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Item10, Item11, Item12, Item13
} from './styles';

const Tree: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0.1 }} animate={{ opacity: 1 }}>
      <Container>
        <Title>Forte</Title>

        <Itens>
          <Item1>
            <TreeItem bottom Icon={SiJavascript} iconSize={28} color='#FFF585' />
          </Item1>

          <Item2>
            <TreeItem bottom Icon={SiReact} iconSize={34} color='#3CD7F6' />
          </Item2>

          <Item3>
            <TreeItem bottom left right Icon={IoLogoJavascript} iconSize={23} color='#FFF585' />
          </Item3>

          <Item4>
            <TreeItem bottom />
          </Item4>

          <Item5>
            <TreeItem bottom />
          </Item5>

          <Item6>
            <TreeItem Icon={FaGitSquare} iconSize={30} color='#ED725A' />
          </Item6>

          <Item7>
            <TreeItem bottom />
          </Item7>

          <Item8>
            <TreeItem Icon={SiStyledComponents} iconSize={38} color='#D66C8E' />
          </Item8>

          <Item9>
            <TreeItem left right bottom />
          </Item9>

          <Item10>
            <TreeItem bottom Icon={GiHook} iconSize={30} color='#3CD7F6' />
          </Item10>

          <Item11>
            <TreeItem Icon={SiTypescript} iconSize={27} color='#4A8DD3' />
          </Item11>

          <Item12>
            <TreeItem Icon={SiRedux} iconSize={26} color='#845BC2' />
          </Item12>

          <Item13>
            <TreeItem />
          </Item13>

        </Itens>
      </Container>
    </motion.div>
  );
}

export default Tree;