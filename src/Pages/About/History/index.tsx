import React from 'react';

import { Container, Wrapper, Title, Text } from './styles';

const History: React.FC = () => {
  return (
    <Container initial={{ opacity: 0, x: 250 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
      <Wrapper>
        <Title>Historia</Title>
        <Text>
          Em 2014 comecei a me interessar por programação e fui atrás
          de alguma linguagem pra aprender.  Sempre gostei de
          tecnologia, eletronica e computadores.
          <br /> <br />
        </Text>
        <Text>
          Comecei com C em 2016 e aprendi as coisas básicas, como if e
          else. Depois de um tempo sem mexer com código, fui pro
          Java onde aprendi a maioria das
          coisas, como Orientação a Objetos e outros paradigmas
          mais complexos. Nesse tempo meu notbook quebrou e só no
          final de 2019 consegui pegar outro e dei retorno aos meus
          estudos, dessa vez, defenitivamente em Javascript.
          <br /> <br />
        </Text>
        <Text>
          Em março de 2020, tive meu primeiro contato com React
          Native, pois sempre quis desenvolver para mobile. Fiz muitos
          projetos, foquei bastante e decidi, também, expandir pra
          Web estudando ReactJs e tecnologias em volta da área.
          <br /> <br />
      </Text>
      </Wrapper>

      <Wrapper>
        <Title>Objetivo</Title>
        <Text>
          Com o foco em desenvolvimento mobile, tenho a finalidade de me 
          especializar nessa área, aprendendo e estudando tecnologias que 
          englobam e/ou auxiliam o  React em si, como: Jest, Styled-Components, TypeScript, etc.
          Atualmente, já utilizo essas ferramentas diariamente, sempre vizando um código limpo e organizado.
          <br /> <br />
        </Text>
      </Wrapper>
    </Container>
  );
}

export default History;