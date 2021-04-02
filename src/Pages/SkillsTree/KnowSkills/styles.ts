import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 10px 0;
  padding: 10px;
  border-radius: 20px;
  background-color: var(--darkerGrey);
`;

export const Title = styled.h2`
  display: flex;
  font-size: 42px;
  margin-bottom: 25px;
  color: var(--grey);

  @media (max-width: 900px) {
    font-size: 34px;
  }
`;

export const Itens = styled.div`
  display: grid;

  grid-template-columns: 94px 94px 94px 94px 94px;
  grid-template-rows: 94px 94px 94px 94px 94px;
  grid-template-areas:  
    ". . a . ."
    "z b c d ."
    ". e f g h"
    ". . i . j"
    ". . k . ."
  ;

  @media (max-width: 1100px) {
    grid-template-columns: 60px 60px 60px 60px 60px;
    grid-template-rows: 60px 60px 60px 60px 60px;
  }
`;


export const Item1 = styled.div`
  grid-area: a;
`;

export const Item2 = styled.div`
  grid-area: b;
`;

export const Item3 = styled.div`
  grid-area: c;
`;

export const Item4 = styled.div`
  grid-area: d;
`;

export const Item5 = styled.div`
  grid-area: e;
`;

export const Item6 = styled.div`
  grid-area: f;
`;

export const Item7 = styled.div`
  grid-area: g;
`;

export const Item8 = styled.div`
  grid-area: h;
`;

export const Item9 = styled.div`
  grid-area: i;
`;

export const Item10 = styled.div`
  grid-area: j;
`;

export const Item11 = styled.div`
  grid-area: k;
`;

export const ItemZ = styled.div`
  grid-area: z;
`;