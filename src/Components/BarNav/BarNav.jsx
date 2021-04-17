import React, { useState, useEffect} from "react";
import 'csshake';
import {  ScriptHeading, Button } from "../../styles/globalStyles";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
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
              <ScriptHeading>Stevie Codes</ScriptHeading>
              <div class="shake shake-chunk shake-constant">👋 
            </div>
              </>
              
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              {/* <NavItem>
                <NavLinks to="/#about" >
                  About
                </NavLinks>
              </NavItem> */}
              {/* <NavItem>
              <NavLinks to="/#skills">
                    CV
                  </NavLinks>
              </NavItem>
              <NavItem> */}
              {/* <NavLinks to="/#portfolio">
                    Portfolio
                  </NavLinks>
              </NavItem> */}

                   <a href="mailto:stevieCodes@gmail.com?subject=We should meet for a coffee"><Button>Coffee?</Button></a>  

              <Toggle theme={theme} setTheme={setTheme}/>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default BarNav;
