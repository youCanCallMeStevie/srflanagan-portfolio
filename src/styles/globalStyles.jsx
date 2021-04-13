import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
    font-family: "Roboto", sans-serif;
    background-color: ${props => props.theme.pageBackground};
transition: all .5s ease;
}
`;
export const Page = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background-color: ${props => props.theme.pageBackground};
transition: all .5s ease;


// `
export const Avatar = styled.div`
  margin: 1rem;
  img {
    border-radius: 50px;
    height: 40px;
    width: 40px;
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
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  } ;
`;

export const Title = styled.h1`
color: ${props => props.theme.titleColor};
transition: all .5s ease;
`;

export const SubTitle = styled.h2`
color: ${props => props.theme.subTitleColor};
font-size: 18px;
transition: all .5s ease;
`

// export const Toggle = styled.button`
//   cursor: pointer;
//   height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   border: none;
//   background-color: ${props => props.theme.titleColor};
//   color: ${props => props.theme.pageBackground};
//   &:focus {
//     outline: none;
//   }
//   transition: all 0.5s ease;
// `;

export const smCircle = styled.svg`

transition: all .5s ease;
`
export default GlobalStyles;
