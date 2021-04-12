import React from 'react';
import { CgArrowLongRightL } from 'react-icons/cg';

import { Container, Modal, Image, Description, Title, DataContact, MotivationText } from './styles';

interface PropsTypes {
  onClose?: any;
}

const SkillModal: React.FC<PropsTypes> = ({onClose = () => {}}) => {
  const id = 'modal';
  function handlOutsideClick(e: any) {
    if(e.target.id === id) onClose();
  }

  return (
    <Container id={id} onClick={handlOutsideClick} >
      <Modal>
        {/* <Image src={code} /> */}
        <Description>
          <Title>Primeiro Contato</Title>
          <DataContact>
            <CgArrowLongRightL />
            Setembro 2020
          </DataContact>
          <Title>Motivação</Title>
          <MotivationText>
            Quando eu usava apenas JavaScript em meus projetos e via
            alguem usando TypeScript, era como se fosse um luxo.
            Decidi usar pois o editor fica mais inteligente e a depuração
            se torna mais eficaz sem precisar compilar o projeto.
          </MotivationText>
        </Description>
      </Modal>
    </Container>
  );
}

export default SkillModal;