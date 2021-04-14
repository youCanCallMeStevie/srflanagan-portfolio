import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background:${props => props.theme.pageBackground};
  padding: 4rem, 0 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .5s ease;

`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  background:${props => props.theme.pageBackground};
  transition: all .5s ease;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
  display: none;

  @media screen and (min-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  /* display: none; */
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color:  ${props => props.theme.fontColor};
  transition: all .5s ease;


  @media screen and (max-width: 420px) {
    margin: 0px;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: ${props => props.theme.fontColor};
  transition: all .5s ease;

  text-decoration: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: ${props => props.theme.accents};
    transition: 0.3s ease-out;
  }
`;

export const SocialContainer = styled.section`
   background:${props => props.theme.pageBackground};
   transition: all .3s ease;

  width: 100%;
  
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 24px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SiteLogo = styled(Link)`
  color: ${props => props.theme.fontColor};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  transition: all .5s ease;

`;



export const Copright = styled.small`
  color: ${props => props.theme.fontColor};
  margin-bottom: 8px;
  @media screen and (max-width: 820px) {
    margin-top: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${props => props.theme.fontColor};

  font-size: 2em;
  &:hover {
    color: ${props => props.theme.accents};
    transition: 0.1s ease-out;
  }
`;
