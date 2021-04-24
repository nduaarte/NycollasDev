import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
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
    <Container>
      <Vector src={vector} />
      <InfoContent>
        <Title>{title}</Title>
        <PlataformContainer>
          <PlataformIcon as={mobile ? AiOutlineMobile : RiComputerLine} />
          <PlataformText>{mobile ? 'Mobile' : 'Website'}</PlataformText>
        </PlataformContainer>
        <Row>
          <Tecs>
            {tecs.map(tec => <TectName>{tec}</TectName>)}
          </Tecs>

          <ViewMore>
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