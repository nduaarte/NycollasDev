import styled, { css } from 'styled-components';

import { GiBonsaiTree } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { VscGithub } from 'react-icons/vsc';
import { RiCopyrightLine } from 'react-icons/ri';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(34,28,48,1) 100%);
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

  margin: 20px 50px 0 0;

  h1 {
    font-size: 48px;
    color: var(--white);
  }

  h3 {
    color: var(--darkWhite);
    font-size: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 65px;
  width: 30%;
  height: 30%;
`;

const iconCSS = css`
  width: 50px;
  height: 50px;
  color: var(--grey);

  :hover {
    color: var(--primary);
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
    background-color: var(--secundary);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${TreeIcon} {
    color: var(--primary);
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
    background-color: var(--secundary);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${UserIcon} {
    color: var(--primary);
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
    background-color: var(--secundary);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${ProjectIcon} {
    color: var(--primary);
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
    background-color: var(--secundary);
    border: 3px solid var(--primary);

    box-shadow: 0px 0px 100px rgba(255, 251, 251, 0.15);
  }

  &:hover ${GithubIcon} {
    color: var(--primary);
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  margin: 110px 0 20px;
  color: var(--grey);
`;

export const CopyIcon = styled(RiCopyrightLine)`
`;