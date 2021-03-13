import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  opacity: 0.4;

  div {
    width: 0.2px;
    height: 0.2px;
    border-radius: 0.1px;

    background-color: var(--pink);
    box-shadow: 0px 1px 22px 22px var(--pink);
    -webkit-box-shadow: 0px 1px 22px 22px var(--pink); 
  }
`;
