import React from 'react';

import { FaUserAlt } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiCake } from 'react-icons/bi';
import { HiOutlineNewspaper } from 'react-icons/hi';

import vector from '../../assets/images/about.svg';

import {
  Container,
  InfoAbout,
  Row,
  ListContainer,
  Avatar,
  Collumn,
  MyName,
  MyNick,
  LeftSide,
  RightSide,
  Vector,
  MotivationTitle,
  MotivationText
} from './styles';

import Header from '../../Components/Header';

const About: React.FC = () => {
  return (
    <Container>
      <Header icon={FaUserAlt} title='Informações Pessoais' />

      <InfoAbout>
        <LeftSide>
          <Row>
            <Avatar src={'https://avatars.githubusercontent.com/u/60564538?s=400&u=6bebb55bd2ebe75072582c5c263652c07799b913&v=4'} />

            <Collumn>
              <MyName>Nycollas Duarte</MyName>
              <MyNick>@redspace</MyNick>
            </Collumn>
          </Row>

          <ListContainer>
            <li>
              <BiMap size={28} color='#59d9a5' />
              <span>Rio Grande do Sul - Brasil</span>
            </li>
            <li>
              <HiOutlineMail size={28} color='#59d9a5' />
              <span>nycollas.duaarte@hotmail.com</span>
            </li>
            <li>
              <BiCake size={28} color='#59d9a5' />
              <span>20 de Março 2000</span>
            </li>
            <li>
              <HiOutlineNewspaper size={28} color='#59d9a5' />
              <span>Currículo</span>
            </li>
          </ListContainer>
        </LeftSide>

        <RightSide>
          <Vector src={vector} />
          <MotivationTitle>Motivação</MotivationTitle>
          <MotivationText>
            Em 2014 comecei a me interessar por programação e fui atrás
            de alguma linguagem pra aprender.  Sempre gostei de
            tecnologia, eletronica e computadores.
          <br /> <br />
          </MotivationText>
          <MotivationText>
            Comecei com C em 2016 e aprendi as coisas básicas, como if e
            else. Depois de um tempo sem mexer com código, fui pro
            Java onde aprendi a maioria das
            coisas, como Orientação a Objetos e outros paradigmas
            mais complexos. Nesse tempo meu notbook quebrou e só no
            final de 2019 consegui pegar outro e dei retorno aos meus
            estudos, dessa vez, defenitivamente em Javascript.
          <br /> <br />
          </MotivationText>
          <MotivationText>
            Em março de 2020, tive meu primeiro contato com React
            Native, pois sempre quis desenvolver para mobile. Fiz muitos
            projetos, foquei bastante e decidi, também, expandir pra
            Web estudando ReactJs e tecnologias em volta da área.
          </MotivationText>
        </RightSide>
      </InfoAbout>
    </Container >
  );
}

export default About;