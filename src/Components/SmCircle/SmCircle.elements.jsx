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
left: 50.5%;
z-index: 2;
  svg {
    fill:${props => props.theme.secondaryCircle};
    transition: all .5s ease;
  }
`;