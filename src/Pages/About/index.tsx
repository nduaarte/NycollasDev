import React from 'react';
import styled from 'styled-components';

import { FaUserAlt } from 'react-icons/fa';

import Header from '../../Components/Header';
import PersonalInfo from './PersonalInfo';
import History from './History';
import Footer from '../../Components/Footer';

const About: React.FC = () => {
  return (
    <Container>
      <Header icon={FaUserAlt} title='Informações Pessoais' />
      <Wrapper>
        <PersonalInfo />
        <History />
      </Wrapper>
      <Footer />
    </Container >
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 50px 100px;
  }
`;

export default About;