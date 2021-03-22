import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  background-color: var(--darkerGrey);

  width: 60%;
  height: 60%;
`;

export const Image = styled.img``;

export const Description = styled.div``;

export const Title = styled.h4``;

export const DataContact = styled.span``;

export const MotivationText = styled.p``;
