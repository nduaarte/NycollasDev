import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { SiJavascript, SiReact, SiStyledComponents, SiTypescript, SiRedux } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaGitSquare } from 'react-icons/fa';
import { GiHook } from 'react-icons/gi';

import TreeItem from '../../../Components/TreeItem';
import data from '../../../assets/data/hard';

import {
  Container,
  Title,
  Itens,
  Item1, Item2, Item3, Item4, Item5, Item6, Item7, Item8, Item9, Item10, Item11, Item12, Item13, ItemZ
} from './styles';

const Tree: React.FC = () => {
  const dispatch = useDispatch();

  function dispatching(index: number) {
    let dataContact = data[index].dataContact;
    let motivationText = data[index].motivationText;

    dispatch({ type: 'UPDATE_IS_VISIBLE', value: true });
    dispatch({ type: 'UPDATE_DATA_CONTACT', value: dataContact });
    dispatch({ type: 'UPDATE_MOTIVATION_TEXT', value: motivationText });
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container>
        <Title>Forte</Title>

        <Itens>
          <Item1 onClick={() => dispatching(0)}>
            <TreeItem bottom Icon={SiJavascript} iconSize={28} color='#FFF585' />
          </Item1>

          <Item2 onClick={() => dispatching(1)}>
            <TreeItem bottom Icon={SiReact} iconSize={34} color='#3CD7F6' />
          </Item2>

          <Item3 onClick={() => dispatching(2)}>
            <TreeItem bottom left right Icon={IoLogoJavascript} iconSize={23} color='#FFF585' />
          </Item3>

          <Item4>
            <TreeItem left right bottom />
          </Item4>

          <ItemZ>
            <TreeItem />
          </ItemZ>

          <Item5>
            <TreeItem bottom />
          </Item5>

          <Item6 onClick={() => dispatching(3)}>
            <TreeItem Icon={FaGitSquare} iconSize={30} color='#ED725A' />
          </Item6>

          <Item7>
            <TreeItem bottom />
          </Item7>

          <Item8 onClick={() => dispatching(4)}>
            <TreeItem Icon={SiStyledComponents} iconSize={38} color='#D66C8E' />
          </Item8>

          <Item9>
            <TreeItem left right bottom />
          </Item9>

          <Item10 onClick={() => dispatching(5)}>
            <TreeItem bottom Icon={GiHook} iconSize={30} color='#3CD7F6' />
          </Item10>

          <Item11 onClick={() => dispatching(6)}>
            <TreeItem Icon={SiTypescript} iconSize={27} color='#4A8DD3' />
          </Item11>

          <Item12 onClick={() => dispatching(7)}>
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