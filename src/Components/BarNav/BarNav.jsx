import React, { useState, useEffect} from "react";

import { Avatar, Title } from "../../styles/globalStyles";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  HamburgerIcon,
} from "./BarNav.elements";
import {Toggle} from "../index"
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
const BarNav = ({theme, setTheme}) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);



  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: theme.titleColor }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/" >
              <>
              <Avatar >
            <img
              src={theme==="light"? "https://res.cloudinary.com/youcancallmestevie/image/upload/v1615643843/BDusers/npa0yfrhmxcyhxopbdfi.png" : "https://res.cloudinary.com/youcancallmestevie/image/upload/v1618271401/BDusers/Copy_of_Orange_Blue_Book_Donation_Poster_19_lh04op.png"}
              alt="Stephanie's avatar"
            />
          </Avatar>
              </>
              <Title></Title>
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks
                  
                >
                  Link
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                
                >
                  Hello
                </NavLinks>
              </NavItem>
             
              <Toggle theme={theme} setTheme={setTheme}/>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default BarNav;
