import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinksContainer,
  SocialIconLink,
  SocialIcons,
  Copright,
  SiteLogo,
  SocialWrapper,
  SocialContainer,
} from "./Footer.elements";
import greenMe from "../../assets/images/greenMe.png";
import orangeMe from "../../assets/images/orangeMe.png";

import {Avatar} from "../../styles/globalStyles"
import { HashLink as Link } from 'react-router-hash-link';

function Footer({theme, setTheme}) {

  return (
    <>
      <FooterContainer />
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
          <FooterItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
          <FooterItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
            <FooterLink to="/">Link</FooterLink>
          </FooterItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialContainer>
        <SocialWrapper>
          {/* <MoonWrapper> */}
            <SiteLogo
              to="/#"
            >
              <>
              <Avatar >
              <img
              src={theme==="light"? greenMe : orangeMe}
              alt="Stevie's avatar"
            />
          </Avatar>
              </>
            </SiteLogo>

          <SocialIcons>
            <SocialIconLink
              href={"https://github.com/youCanCallMeStevie"}
              target="_blank"
              aria-lable="Github"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.instagram.com/steviecodes"}
              target="_blank"
              aria-lable="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.linkedin.com/in/youcancallmestevie/"}
              target="_blank"
              aria-lable="Linked"
            >
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
          <Copright>S R Flanagan ©2021</Copright>
        </SocialWrapper>
      </SocialContainer>
      <FooterContainer />
    </>
  );
}

export default Footer;
