import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalLine = styled.div`
  border-left: 2px solid var(--grey);
  height: 50px;
  left: 50%;
`;

export const HorizontalLine = styled.div`
  border-top: 2px solid var(--grey);
  width: 50px;
  left: 50%;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  border: 2px solid ${props => props.color};
  border-radius: 8px;
`;