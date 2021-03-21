import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalLine = styled.div`
  border-left: 2px solid var(--grey);
  height: 47px;
  left: 50%;
`;

export const HorizontalLine = styled.div`
  border-top: 2px solid var(--grey);
  width: 47px;
  left: 50%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Square = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 47px;
  height: 47px;
  outline: none;

  background-color: var(--blue);
  border: 2px solid var(--grey);
  border-radius: 8px;

  :hover {
    cursor: pointer;
    border: 2px solid ${props => props.color};
  }

  :focus {
    box-shadow: 0px 0px 12px ${props => props.color};
    border: 2px solid ${props => props.color};
  }
`;

export const BlockSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 47px;
  height: 47px;

  background-color: var(--darkGrey);
  border: 2px solid var(--grey);
  border-radius: 8px;

  :hover {
    cursor: not-allowed;
  }
`;