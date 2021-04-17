import styled from 'styled-components';
import { IoIosArrowDropright } from 'react-icons/io';

export const Container = styled.div`
  padding: 0 50px 30px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    margin-top: 50px;
  }
`;

export const ArrowIcon = styled(IoIosArrowDropright)`
  width: 25px;
  height: 25px;
  color: var(--secundary);

  @media (max-width: 900px) {
    width: 15px;
    height: 15px;
  }
`;

export const Info = styled.h4`
  color: var(--darkerWhite);
  align-self: center;
  margin-left: 3px;

  @media (max-width: 900px) {
    font-size: 11px;
  }
`;
