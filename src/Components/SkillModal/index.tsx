import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/SkillReducer';
import { Container, Modal, DescriptionContainer, Title, DataContact, MotivationText } from './styles';

interface PropsTypes {
  onClose?: any;
}

const SkillModal: React.FC<PropsTypes> = ({onClose = () => {}}) => {
  const dispatch = useDispatch();
  const id = 'modal';
  function handlOutsideClick(e: any) {
    if(e.target.id === id) {
      dispatch({ type: 'UPDATE_IS_VISIBLE', value: false})
      onClose();
    }
  }

  const dataContact = useSelector((state: RootState) => state.SkillReducer.dataContact);
  const motivationText = useSelector((state: RootState) => state.SkillReducer.motivationText);

  return (
    <Container id={id} onClick={handlOutsideClick} >
      <Modal>
        <DescriptionContainer>
          <Title>Primeiro Contato</Title>
          <DataContact>
            <MdDateRange size={22} />
            {dataContact}
          </DataContact>
          <Title>Motivação</Title>
          <MotivationText>
            {motivationText}
          </MotivationText>
        </DescriptionContainer>
      </Modal>
    </Container>
  );
}

export default SkillModal;