import React from 'react';
import styled from 'styled-components';
import { ImBooks } from 'react-icons/im';

import Header from '../../Components/Header';
import Repo from '../../Components/Repo';

import planetfinder from '../../assets/vectors/planet_finder.svg';
import venus from '../../assets/vectors/venus2.svg';

const Projects: React.FC = () => {

  return (
    <Container>
      <Header title='Projetos' icon={ImBooks} />

      <Repo 
        vector={planetfinder}
        title='Planet Finder'
        tecs={['ReactJs', 'TypeScript', 'Styled-Components', 'Redux', 'Axios']}
        link='https://github.com/redspaace/PLANET-FINDER'
      />

      <Repo
        mobile
        vector={venus}
        title='Vênus Music'
        tecs={['React Native', 'TypeScript', 'Expo-AV', 'Redux', 'Styled-Components']}
        link='https://github.com/redspaace/react-native-venus-2'
      />
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;