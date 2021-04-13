import React from "react";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { Page, Container, Title, SubTitle } from "../../styles/globalStyles";
import { SmCircle, LgCircle } from "../index";

function CV({ theme, setTheme }) {
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (
    <>
      <Page>
        {" "}
        <Container>
          <LgCircle xAxis={"220"} next={"skills"} />
          <SmCircle xAxis={"0"} />

          <Title>Stephanie Flanagan</Title>
          <Title>//Full-Stack Developer</Title>
          <SubTitle>I make things work.</SubTitle>
        </Container>
      </Page>
      <Page>
      <Container>

        <Title id="skills" >Skills</Title>
        {/* <LgCircle xAxis={"0"} next={"experience"}/> */}

        </Container> 
    


      </Page>
    </>
  );
}

export default CV;
