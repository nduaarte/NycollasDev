import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  
  margin: 30px 80px 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--darkGrey);

  @media (max-width: 900px) {
    margin: 10px;
  }
`;

export const Tittle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    width: 60%;
    font-size: 48px;
    font-weight: 700;
    margin-left: 15px;
    color: var(--darkWhite);

    @media (max-width: 900px) {
      font-size: 28px;
    }
  }
`;

export const Icon = styled.div`
  width: 90px;
  height: 90px;
  color: var(--secundary);
  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
  }
`;

export const HomeIcon = styled(AiFillHome)`
  width: 32px;
  height: 32px;
  color: var(--white);

  @media (max-width: 900px) {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 510px) {
    width: 24px;
    height: 24px;
  }
`;

export const ButtonBackHome = styled.button`
  background-color: var(--primary);
  padding: 4px 18px;
  outline: none;
  border-radius: 7px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    padding: 2px 15px;
    border-radius: 4px;
  }

  @media (max-width: 510px) {
    padding: 1px 10px;
    border-radius: 4px;
  }
`;