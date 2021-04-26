import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;

  width: 80%;
  margin-top: 30px;
  padding: 20px 0;
  border-bottom: 1px solid var(--darkGrey);

  @media (min-width: 650px) {
    width: 72%;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0;
    padding: 83px 0;
  }
`;

export const Vector = styled.img`
  width: 75%;

  @media (min-width: 450px) {
    width: 60%;
  }

  @media (min-width: 650px) {
    width: 32%;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 650px) {
    margin-left: 30px;
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: var(--primary);
  font-size: 26px;
  margin-top: 5px;

  @media (min-width: 650px) {
    font-size: 50px;
  }
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

  @media (min-width: 650px) {
    width: 28px;
    height: 28px;
  }
`;

export const PlataformText = styled.h3`
  color: var(--secundary);
  font-size: 18px;

  @media (min-width: 650px) {
    font-size: 26px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  @media (min-width: 650px) {
    width: 75%;
  }
`;

export const Tecs = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  @media (min-width: 650px) {
    margin-top: 15px;
  }
`;

export const TectName = styled.li`
  color: var(--darkWhite);
  font-size: 14px;

  @media (min-width: 650px) {
    font-size: 18px;
  }
`;

export const ViewMore = styled(motion.button)`
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

  @media (min-width: 650px) {
    width: 14px;
    height: 14px;
  }
`;

export const ViewText = styled.span`
  color: var(--secundary);
  font-size: 10px;

  @media (min-width: 650px) {
    font-size: 14px;
  }
`;
