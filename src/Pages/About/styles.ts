import styled from 'styled-components';

export const Container = styled.div`
`;

export const InfoAbout = styled.div`
  margin: 0 30px;

  li {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  span {
    color: var(--darkWhite);
    font-weight: bold;
    margin-left: 3px;
  }
`;

export const Row = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  span {
    color: var(--grey);
  }
`;

export const MyName = styled.h3`
  color: var(--darkWhite);
  font-size: 24px;
`;

export const MyNick = styled.h3`
  color: var(--grey);
`;

export const MotivationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px 20px;
`;

export const MotivationTitle = styled.h2`
  color: var(--primary);
  font-size: 28px;
  margin-bottom: 12px;
`;

export const MotivationText = styled.p`
  color: var(--darkerWhite);
  font-size: 16px;
  font-weight: bold;
`;