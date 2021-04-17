import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&family=Lato:wght@400;700&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    background-color: ${props => props.theme.pageBackground};
transition: all .5s ease;
body{
  font-family: 'Lato', sans-serif;
}
}
`;

export const Button = styled.button`
  border-radius: 8px;
  background: ${props => props.theme.accents};
  white-space: nowrap;
  padding: 12px 24px;
  margin: 0px 8px;
  color: ${props => props.theme.pageBackground};
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 5001;
  letter-spacing: 1.5px;
  &:hover {
    background: ${props => props.theme.secondaryCircle};
    color: ${props => props.theme.accents};
    transition: all 0.5s ease;
  }
  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;
export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  padding: 50px;
`;

export const Avatar = styled.div`
  margin: 1rem;
  /* transition: all 0.5s ease; */
  display: flex;
  justify-content: center;

  img {
      transition: all 0.5s ease;

    border-radius: 50px;
    height: 50px;
    width: 50px;
    overflow: hidden;
    height: 100%;
    width: 100%fit-content;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-top: 2em;
  display: flex;
  justify-content: center;
  p {
    color: ${props => props.theme.titleColor};
    letter-spacing: 1px;
  }
`;

export const ScriptHeading = styled.h1`
  color: ${props => props.theme.titleColor};
  font-family: "Bad Script", cursive;
`;

export const Title = styled.h1`
  color: ${props => props.theme.titleColor};
  font-size: 5.5em;
  margin-bottom: 12px;
  @media screen and (max-width: 960px) {
    font-size: 4.5em;

  }
  @media screen and (max-width: 500px) {
    font-size: 3em;
  }
`;

export const Heading = styled.h2`
  color: ${props => props.theme.titleColor};
  font-size: 2em;
  margin-top: 12px;
  letter-spacing: 5px;
`;

export const SubTitle = styled.h3`
  color: ${props => props.theme.titleColor};
  font-size: 1.2em;
  margin-bottom: 16px;
  font-weight: 700px;
  letter-spacing: 2px;
`;
export const Quote = styled.div`
  color: ${props => props.theme.subTitleColor};
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  font-weight: 700px;
  margin-bottom: 16px;
`;

export const Divider = styled.div`
  border-bottom: 5px solid ${props => props.theme.titleColor};
  width: 20em;
  margin: 1em 0 1em 0;
  @media screen and (max-width: 960px) {
    width: 15em;
}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 45vw;
  min-width: 300px;
  @media screen and (max-width: 960px) {
    max-width: 100%
  };
  p {
    color: ${props => props.theme.titleColor};
    letter-spacing: 1px;
  };
  img {
    min-width: 300px;
    height: 300px;
    border-radius: 50%;
    margin: 50px;
    @media screen and (max-width: 500px) {
      min-width: 200px;
      height: 200px;
    }
  }
`;


export const smCircle = styled.svg`
  transition: all 0.5s ease;
`;

export default GlobalStyles;
