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
  border-radius: 2%;
  background-color: var(--darkerGrey);
  padding: 30px;

  width: 50%;
  height: 60%;
`;

export const Image = styled.img`
  width: 80%;
  height: 50%;
  border-radius: 7px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  margin: 20px 0 0;
  color: var(--darkWhite);
`;

export const DataContact = styled.span`
  margin-top: -5px;
  font-size: 38px;
  color: var(--grey);
  font-weight: bold;
`;

export const MotivationText = styled.span`
  color: var(--grey);
  text-align: left;
  font-weight: bold;
`;
