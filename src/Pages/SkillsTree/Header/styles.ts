import styled from 'styled-components';

import { GiBonsaiTree } from 'react-icons/gi';
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
    color: var(--darkWhite);

    @media (max-width: 900px) {
      font-size: 28px;
    }
  }
`;

export const TreeIcon = styled(GiBonsaiTree)`
  width: 100px;
  height: 100px;
  color: var(--darkWhite);
  margin-right: 15px;

  @media (max-width: 900px) {
    width: 65px;
    height: 65px;
  }
`;


export const HomeIcon = styled(AiFillHome)`
  width: 35px;
  height: 35px;
  color: var(--white);

  @media (max-width: 900px) {
    width: 28px;
    height: 28px;
  }
`;

export const ButtonBackHome = styled.button`
  background-color: var(--grey);
  padding: 4px 20px;
  outline: none;
  border-radius: 7px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    padding: 2px 15px;
    border-radius: 4px;
  }
`;