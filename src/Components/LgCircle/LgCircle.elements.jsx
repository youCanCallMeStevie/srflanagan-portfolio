import styled from "styled-components";
export const PageWrapper =styled.div`
width: 60%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const IconWrapper = styled.div`
display: flex;
position: absolute;
top: 150px;
z-index: 2;
  svg {
    fill:${props => props.theme.primaryCircle};
    transition: all .5s ease;
  }
`;

// export const DownArrowWarpper=styled.div`
// p{
//   display: none;
//   &:hover{
// display: flex;
// font-size:100px;
// z-index: 5;

//   }
// }
// `