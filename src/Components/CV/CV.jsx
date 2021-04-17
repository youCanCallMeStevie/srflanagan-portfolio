import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdOpenInBrowser } from "react-icons/md";
import {
  Page,
  Divider,
  SubTitle,
  Heading,
  Column,
  Row,
} from "../../styles/globalStyles";
import { SocialIcons, SocialIconLink } from "../Footer/Footer.elements";
// import { SmCircle, LgCircle } from "../index";

function CV({ theme, setTheme }) {

  return (
    <>

      <Page>
        <Row>
          <Column>
              <Heading id="education">&#60;Education&#47;&#62;</Heading>
              <Divider />
              <SubTitle>Full Stack Graduate Certification</SubTitle>
              <p>
                MERN stack focused, with TypeScript, Socket.IO, PostgreSQL, and
                Git. Use of frameworks such as Material UI, Bootstrap and more.
                Agile methodologies, such as Scrum.1000+ hours of personal
                coding.
              </p>
              <br></br>
              <SubTitle>MS; Media &#38; Communications</SubTitle>
              <p>Lunds Universitet (Lund, Sweden) // Passed with Distinction</p>
              <br></br>

              <SubTitle>
                BA; Broadcasting, Telecommunications &#38; Mass Media{" "}
              </SubTitle>
              <p>
                Temple University (Phila., USA &#38; Tokyo, Japan ) // Magna Cum
                Lauda
              </p>


              {/* <LgCircle xAxis={"0"} next={"experience"}/> */}
          </Column>
          <Column>
              <Heading id="projects">&#60;Projects&#47;&#62;</Heading>{" "}
              <Divider />
              <Row>
                <SubTitle>LunaVines</SubTitle>{" "}
                <SocialIcons>
                  <SocialIconLink
                    href={
                      "https://github.com/youCanCallMeStevie/uk-biodynamic-wineries-fe"
                    }
                    target="_blank"
                    aria-label="Github Repo for LunaVines"
                  >
                    <FaGithub />
                  </SocialIconLink>
                  <SocialIconLink
                    href={"https://lunavines.vercel.app/"}
                    target="_blank"
                    aria-label="LunaVines Website"
                  >
                    <MdOpenInBrowser />
                  </SocialIconLink>
                </SocialIcons>
              </Row>
              <p>
                For wine lovers looking to visit biodynamic vineyards according
                to the moon's zodiac phase.{" "}
              </p>
              <p>• Written in React, Javascript using MongoDB, Redux.</p>
              <p>• FE build using TypeScript and Styled-Components.</p>
              <p>• Algorithm to determine biodynamic days.</p>
              <p>• BE including tokens, cookies, authentication.</p>
              <br></br>
              <Row>
                <SubTitle>Instagram Clone</SubTitle>{" "}
                <SocialIcons>
                  <SocialIconLink
                    href={"https://github.com/youCanCallMeStevie/igclone-fe"}
                    target="_blank"
                    aria-label="Github Repo for FE Instagram Clone"
                  >
                    <FaGithub />
                  </SocialIconLink>
                  <SocialIconLink
                    href={"https://ig-clone-zeta.vercel.app/login"}
                    target="_blank"
                    aria-label="Instagram Clone"
                  >
                    <MdOpenInBrowser />
                  </SocialIconLink>
                </SocialIcons>
              </Row>
              <p>Four-member team, one-week challenge project</p>
              <p>
                {" "}
                • Written in React, Javascript, using MongoDB, Socket.IO, Redux,
                and SASS, with no assisted CSS libraries.
              </p>
              <p>Personal contributions:</p>
              <p>• Architect of the backend.</p>
              <p>• Acted as SCRUM master.</p>
              <br></br>
              <Row>
                <SubTitle>Spotify Clone</SubTitle>{" "}
                <SocialIcons>
                  <SocialIconLink
                    href={
                      "https://github.com/youCanCallMeStevie/M8-D5-Oauth-Spotify-FE"
                    }
                    target="_blank"
                    aria-label="Github Repo for FE Spotify Clone"
                  >
                    <FaGithub />
                  </SocialIconLink>
                  <SocialIconLink
                    href={" https://m8-d5-oauth-spotify-fe.vercel.app/"}
                    target="_blank"
                    aria-label="Spotify Clone"
                  >
                    <MdOpenInBrowser />
                  </SocialIconLink>
                </SocialIcons>
              </Row>
              <p>Ongoing porject, testing out new skill sets</p>
              <p>• Orginially written in HTML/CSS.</p>
              <p>• Translated to React.</p>
              <p>• Redux, SASS, hooks added.</p>
              <br></br>
              <Heading id="experience">&#60;Experience&#47;&#62;</Heading>
              <Divider />
              <SubTitle>Marketing &#38; Communications Manager</SubTitle>
              <p>
                • Lead product manager of the complete redesign of website and
                e-commerce sites, alongside digital design & analytics agency.
              </p>
              <p>
                • Project manager of the building and public release of Humble
                Grape Loyalty App.
              </p>
              <p>
                • Ran all digital channels, beyond the scope of marketing,
                including e-commerce platforms, social media channels, complete
                curation and copy for the weekly e-newsletter of 12k+
                subscribers and investors’ e-newsletter of 900.
              </p>
              <br></br>
              <SubTitle>Brand Director</SubTitle>
              <p>
                • Grew from Marketing Manager to sitting on the Board.
              </p>
              <p>
              • Co-founded a visually lead street food concept called BOB's Lobster (listed as Top Food Trucks by Lonely Planet)
              </p>
          </Column>
        </Row>
      </Page>
    </>
  );

}
export default CV;
