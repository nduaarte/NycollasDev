import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { GiBonsaiTree } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { VscGithub } from 'react-icons/vsc';
import { RiCopyrightLine } from 'react-icons/ri';

export const Container = styled(motion.div)`
  height: 100vh;
  display: flex;
  padding: 20px 0;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LightsContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    color: var(--white);

    @media (max-width: 600px) {
    font-size: 36px;
    }
  }

  h3 {
    color: var(--secundary);
    font-size: 16px;

    @media (max-width: 600px) {
    font-size: 10px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 40%;

  @media (max-width: 1030px) {
    width: 30%;
  }

  @media (max-width: 840px) {
    width: 40%;
  }

  @media (max-width: 630px) {
    width: 50%;
  }

  @media (max-width: 505px) {
    width: 60%;
  }

  @media (max-width: 430px) {
    width: 80%;
  }

  @media (max-width: 315px) {
    width: 90%;
  }
`;

const iconCSS = css`
  width: 50px;
  height: 50px;
  color: var(--grey);

  :hover {
    color: var(--primary);
  }

  @media (max-width: 1030px) {
    width: 20px;
    height: 20px;
  }
`;

export const TreeIcon = styled(GiBonsaiTree)`${iconCSS}`;
export const UserIcon = styled(FaUserAlt)`${iconCSS}`;
export const ProjectIcon = styled(ImBooks)`${iconCSS}`;
export const GithubIcon = styled(VscGithub)`${iconCSS}`;

export const Button1 = styled.button`
  margin: 3px;
  width: 200px;
  height: 200px;
  outline: none;

  border-radius: 200px 0 40px 0;
  background-color: var(--darkGrey);

  :hover {
    cursor: pointer;
    background-color: var(--primaryDark);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${TreeIcon} {
    color: var(--primary);
  }

  @media (max-width: 1030px) {
    width: 120px;
    height: 120px;
  }
`;

export const Button2 = styled.button`
  margin: 3px;
  width: 200px;
  height: 200px;
  outline: none;

  border-radius: 0 200px 0 40px;
  border-width: 2px;
  border-color: var(--grey);
  background-color: var(--darkGrey);

  :hover {
    cursor: pointer;
    background-color: var(--primaryDark);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${UserIcon} {
    color: var(--primary);
  }

  @media (max-width: 1030px) {
    width: 120px;
    height: 120px;
  }
`;

export const Button3 = styled.button`
  margin: 3px;
  width: 200px;
  height: 200px;
  outline: none;

  border-radius: 0 40px 0 200px;
  border-width: 2px;
  border-color: var(--grey);
  background-color: var(--darkGrey);

  :hover {
    cursor: pointer;
    background-color: var(--primaryDark);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${ProjectIcon} {
    color: var(--primary);
  }

  @media (max-width: 1030px) {
    width: 120px;
    height: 120px;
  }
`;

export const Button4 = styled.button`
  margin: 3px;
  width: 200px;
  height: 200px;
  outline: none;

  border-radius: 40px 0 200px 0;
  border-width: 2px;
  border-color: var(--grey);
  background-color: var(--darkGrey);

  :hover {
    cursor: pointer;
    background-color: var(--primaryDark);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${GithubIcon} {
    color: var(--primary);
  }

  @media (max-width: 1030px) {
    width: 120px;
    height: 120px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  color: var(--grey);
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const CopyIcon = styled(RiCopyrightLine)`
`;