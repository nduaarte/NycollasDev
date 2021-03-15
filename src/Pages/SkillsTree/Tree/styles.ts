import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  padding: 0 140px;
`;

export const Title = styled.h2`
  display: flex;
  margin-left: 90px;
  font-size: 42px;
  margin-bottom: 15px;
  color: var(--darkGrey);
`;

export const HardSkills = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 33%;
`;

export const Itens = styled.div`
  display: grid;

  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px 100px;
  grid-template-areas:  
                ". . a ."
                ". b c d"
                ". e f g"
                "h i j k"
                ". l m .";
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

export const Item12 = styled.div`
  grid-area: l;
`;

export const Item13 = styled.div`
  grid-area: m;
`;


export const KnownSkills = styled.div``;
