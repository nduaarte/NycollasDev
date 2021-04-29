import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 50px 100px;
  }
`;

export const LeftSide = styled.div`
  margin: 20px 0;
  background-color: var(--darkerGrey);
  border-radius: 10px;
  padding: 0 20px;

  @media (min-width: 850px) {
    margin: 0;
    padding: 10px 40px;
  }
`;

export const Row = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 850px) {
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;

  @media (min-width: 850px) {
    width: 200px;
    height: 200px;
    border-radius: 100px;

    border: 3px solid var(--primary);
    padding: 5px;
  }
`;

export const MyName = styled.h3`
  color: var(--darkWhite);
  font-size: 24px;

  @media (min-width: 850px) {
    font-size: 32px;
    margin-top: 10px;
  }
`;

export const MyNick = styled.h3`
  color: var(--secundary);
  font-size: 10px;

  @media (min-width: 850px) {
    font-size: 14px;
    margin-top: 2px;
  }
`;

export const ListContainer = styled.ul`
  margin-bottom: 20px;
  padding: 10px;

  @media (min-width: 850px) {
    border-top: 1px solid var(--darkGrey);
  }

  li {
    display: flex;
    align-items: center;
    margin: 10px 0;

    span {
      font-size: 14px;
      color: var(--darkWhite);
      font-weight: bold;
      margin-left: 3px;

      @media (min-width: 850px) {
        font-size: 18px;
        margin-left: 6px;
      }
    }

    a {
      display: flex;
      align-items: center;
      margin-left: 3px;
    }
  }
`;

export const Collumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  span {
    color: var(--grey);
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 20px;
`;

export const MotivationTitle = styled.h2`
  color: var(--primary);
  font-size: 28px;
  margin-bottom: 12px;

  @media (min-width: 850px) {
    font-size: 36px;
    margin-bottom: 15px;
  }
`;

export const MotivationText = styled.p`
  color: var(--darkerWhite);
  font-size: 16px;
  font-weight: bold;
`;