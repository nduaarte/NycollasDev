import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;

  width: 80%;
  margin-top: 30px;
  padding: 20px 0;
  border-bottom: 1px solid var(--darkGrey);
`;

export const Vector = styled.img`
  width: 220px;
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: var(--primary);
  font-size: 26px;
  margin-top: 5px;
`;

export const PlataformContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;

export const PlataformIcon = styled.div`
  color: var(--secundary);
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const PlataformText = styled.h3`
  color: var(--secundary);
  font-size: 18px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tecs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TectName = styled.span`
  color: var(--darkWhite);
  font-size: 14px;
`;

export const ViewMore = styled.button`
  align-self: flex-end;
  margin-left: 60px;

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
  }

  :hover {
    cursor: pointer;
    color: var(--grey);
  }
`;

export const ViewIcon = styled(FiExternalLink)`
  color: var(--secundary);
  width: 10px;
  height: 10px;
  margin-right: 3px;
`;

export const ViewText = styled.span`
  color: var(--secundary);
  font-size: 10px;
`;
