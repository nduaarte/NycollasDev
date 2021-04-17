import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/SkillReducer';
import { Container, Modal, DescriptionContainer, Title, DataContact, CalendarIcon, MotivationText } from './styles';

interface PropsTypes {
  onClose?: any;
}

const SkillModal: React.FC<PropsTypes> = ({ onClose = () => { } }) => {
  const dispatch = useDispatch();
  const id = 'modal';
  function handlOutsideClick(e: any) {
    if (e.target.id === id) {
      dispatch({ type: 'UPDATE_IS_VISIBLE', value: false })
      onClose();
    }
  }

  const dataContact = useSelector((state: RootState) => state.SkillReducer.dataContact);
  const motivationText = useSelector((state: RootState) => state.SkillReducer.motivationText);

  return (
    <Container
      id={id}
      onClick={handlOutsideClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <Modal>
        <DescriptionContainer>
          <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 1 }}>
            Primeiro Contato
          </Title>
          <DataContact initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
            <CalendarIcon />
            {dataContact}
          </DataContact>
          <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            Motivação
          </Title>
          <MotivationText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}>
            {motivationText}
          </MotivationText>
        </DescriptionContainer>
      </Modal>
    </Container>
  );
}

export default SkillModal;