import React from 'react';
import styled from 'styled-components';
import { ImBooks } from 'react-icons/im';

import Header from '../../Components/Header';
import Repo from '../../Components/Repo';
import Footer from '../../Components/Footer';

import planetfinder from '../../assets/vectors/planet_finder.svg';
import venus from '../../assets/vectors/venus.svg';
import rpg from '../../assets/vectors/rpg.svg';
import schedule from '../../assets/vectors/schedule.svg';
import clock from '../../assets/vectors/clock.svg';

const Projects: React.FC = () => {

  return (
    <Container>
      <Header title='Projetos Pessoais' icon={ImBooks} />
      <RepoContainer>
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
        <Repo
          mobile
          vector={rpg}
          title='RPG Game'
          tecs={['Expo', 'React Native', 'TypeScript', 'Redux']}
          link='https://github.com/redspaace/RPG-react-native-expo'
        />
        <Repo
          mobile
          vector={schedule}
          title='Agenda de Tarefas'
          tecs={['React Native', 'TypeScript', 'Styled-Components', 'Redux']}
          link='https://github.com/redspaace/agenda'
        />
        <Repo
          mobile
          vector={clock}
          title='Pomodoro Clock'
          tecs={['React Native', 'TypeScript', 'Styled-Components', 'MomentJS']}
          link='https://github.com/redspaace/Cosmos-react-native-2'
        />
      </RepoContainer>
      <Footer />
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;