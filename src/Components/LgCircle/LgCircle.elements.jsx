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

z-index: 2;
  svg {
    fill:${props => props.theme.primaryCircle};
    transition: all .5s ease;
  }
`;