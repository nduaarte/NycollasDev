import React from 'react';

import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiCake } from 'react-icons/bi';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { FiExternalLink } from 'react-icons/fi';

import { Container, Row, ListContainer, Avatar, Column, MyName, MyNick } from './styles';

const PersonalInfo: React.FC = () => {
  return (
    <Container initial={{ opacity: 0, x: -250 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }}>
      <Row>
        <Avatar src={'https://avatars.githubusercontent.com/u/60564538?s=400&u=6bebb55bd2ebe75072582c5c263652c07799b913&v=4'} />

        <Column>
          <MyName>Nycollas Duarte</MyName>
          <MyNick>Desenvolvedor Mobile | React Native</MyNick>
        </Column>
      </Row>

      <ListContainer>
        <li>
          <BiMap size={25} color='#59d9a5' />
          <span>Rio Grande do Sul - Brasil</span>
        </li>
        <li>
          <HiOutlineMail size={25} color='#59d9a5' />
          <span>nycollas.duaarte@hotmail.com</span>
        </li>
        <li>
          <BiCake size={25} color='#59d9a5' />
          <span>20 de Março de 2000</span>
        </li>
        <li>
          <HiOutlineNewspaper size={25} color='#59d9a5' />
          <span>Currículo</span>
          <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1fC9GwAX9UQb5qpkBPKICQHwXWLMbioBT3eoZ5GGSV9k/edit?usp=sharing">
            <FiExternalLink size={16} color='#6949B6' />
          </a>
        </li>
      </ListContainer>
    </Container>
  );
}

export default PersonalInfo;