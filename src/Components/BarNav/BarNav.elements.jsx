import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../styles/globalStyles";


export const Nav = styled.nav`
    background: ${props => props.theme.secondaryCircle};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10001;
  transition: all .5s ease;

`;

export const NavBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #f3f4ed;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;




export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${props => props.theme.accents};
    transition: all 0.5s ease;

  }
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  h5 {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : "-110%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${props => props.theme.secondaryCircle};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 4px solid transparent;
  &:hover {
    border-bottom: 4px solid ${props => props.theme.accents}; 
  }
  @media screen and (max-width: 960px) {
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.div`
  color: ${props => props.theme.subTitleColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  p{
  font-size: 14px;
  letter-spacing: 1.1px;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem 12rem 0rem 0rem;
    width: 100%;
    display: table;
    &:hover {
      color: ${props => props.theme.accents};
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
