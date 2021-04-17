import React from 'react';
import { motion } from 'framer-motion';
import { CgWebsite } from 'react-icons/cg'
import { RiMacLine } from 'react-icons/ri'
import { SiReact, SiNodeDotJs, SiJest } from 'react-icons/si';


import TreeItem from '../../../Components/TreeItem';

import {
  Container,
  Title,
  Itens,
  Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Item10, Item11, ItemZ
} from './styles';


const KnowSkills: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container>
        <Title>Conhecedor</Title>

        <Itens>
          <Item1>
            <TreeItem bottom />
          </Item1>

          <ItemZ>
            <TreeItem />
          </ItemZ>

          <Item2>
            <TreeItem left right bottom Icon={RiMacLine} iconSize={30} color='#B2A639' />
          </Item2>

          <Item3>
            <TreeItem right left bottom Icon={CgWebsite} iconSize={30} color='#713A9C' />
          </Item3>

          <Item4>
            <TreeItem bottom />
          </Item4>

          <Item5>
            <TreeItem />
          </Item5>

          <Item6>
            <TreeItem bottom />
          </Item6>

          <Item7>
            <TreeItem left right />
          </Item7>

          <Item8>
            <TreeItem bottom Icon={SiReact} iconSize={34} color='#3CD7F6' />
          </Item8>

          <Item9>
            <TreeItem bottom Icon={SiNodeDotJs} iconSize={30} color='#396F17' />
          </Item9>

          <Item10>
            <TreeItem />
          </Item10>

          <Item11>
            <TreeItem Icon={SiJest} iconSize={28} color='#6abd2a' />
          </Item11>
        </Itens>
      </Container>
    </motion.div>
  );
}

export default KnowSkills;