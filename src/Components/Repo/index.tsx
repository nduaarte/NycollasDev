import React from 'react';
import { MdPhoneIphone } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

import {
  Container,
  Vector,
  InfoContent,
  Title,
  PlataformContainer,
  PlataformIcon,
  PlataformText,
  Row,
  Tecs,
  TectName,
  ViewMore,
  ViewIcon,
  ViewText
} from './styles';

interface PropsTyes {
  vector: string;
  title: string;
  mobile?: boolean;
  tecs: Array<string>;
  link: string;
}

const Repo: React.FC<PropsTyes> = ({ vector, title, mobile = false, tecs, link }) => {

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Vector src={vector} />
      <InfoContent>
        <Title>{title}</Title>
        <PlataformContainer>
          <PlataformIcon as={mobile ? MdPhoneIphone : RiComputerLine} />
          <PlataformText>{mobile ? 'Mobile' : 'Website'}</PlataformText>
        </PlataformContainer>
        <Row>
          <Tecs>
            {tecs.map(tec => <TectName>{tec}</TectName>)}
          </Tecs>

          <ViewMore initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
            <a href={link} target="_blank" rel="noreferrer">
              <ViewIcon />
              <ViewText>Ver mais</ViewText>
            </a>
          </ViewMore>
        </Row>
      </InfoContent>
    </Container>
  );
}

export default Repo;