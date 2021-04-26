import styled from 'styled-components';
import { RiCopyrightLine } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  line-height: 15px;
  color: var(--grey);
  margin: 15px 0;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const FirstLine = styled.div`
  display: flex;
  align-items: center;
  color: var(--darkWhite);
`;

export const CopyIcon = styled(RiCopyrightLine)`
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;

export const SecondLine = styled.div`
  font-weight: bold;
  color: var(--secundary);
  margin-top: 3px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
