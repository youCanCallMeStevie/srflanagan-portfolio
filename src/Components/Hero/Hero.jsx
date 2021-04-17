import React from "react";
import greenMe from "../../assets/images/greenMe.png";
import orangeMe from "../../assets/images/orangeMe.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import {
  Page,
  Container,
  Title,
  SubTitle,
  Heading,
  Divider,
  Quote,
  Column,
  Row,
  Avatar,
  ScriptHeading
} from "../../styles/globalStyles";
import Typewriter from "typewriter-effect";
import { SocialIcons, SocialIconLink } from "../Footer/Footer.elements";

function Hero({ theme, setTheme }) {

  return (
    <>
      <Page>
        <Container>
            <Row>
            <Column>
          <Avatar><img
              src={theme==="light"? greenMe : orangeMe}
              alt="Stevie's avatar"
            /></Avatar> 
            </Column>
            <Column>
          <Title>Stephanie Flanagan</Title>
          <ScriptHeading>&#47;&#47;you can call me Stevie</ScriptHeading>
          {/* <Heading>&#47;&#47;Full-Stack Developer</Heading> */}
          <Quote>
            <Typewriter
              options={{
                strings: ["I am bold & bright.", "I am a Full-Stack Developer.", "I see the bigger picture.", "I make things work.", "I will make you laugh."],
                autoStart: true,
                loop: true,
              }}
            />
          </Quote>
          <SubTitle>A career pivot to invest in personal passions and build upon technical skills, paired with a unique understanding of brand identity and digital marketing makes me the missing piece.</SubTitle>
          {/* <Divider /> */}
          {/* <Heading id="contact">&#60;Contact&#47;&#62;</Heading> */}
              <Divider />
              <SocialIcons>
                <SocialIconLink
                  href={"https://github.com/youCanCallMeStevie"}
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href={"https://www.instagram.com/steviecodes"}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={"https://www.linkedin.com/in/youcancallmestevie/"}
                  target="_blank"
                  aria-label="Linked"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>

          </Column>
          
          </Row>

        </Container>
      </Page>
    </>
  );
}

export default Hero;
