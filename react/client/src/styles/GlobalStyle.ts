import styled, { createGlobalStyle } from 'styled-components';
import device from './breakpoints';

export const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  pardding:0;
  box-sizing: border-box;
}

body {
  background: #9903ff;
  font-family: Roboto;
  font-weight: 400;
}

h1 {
  font-weight: 400;
  font-size: 2.125rem;
  margin: 1rem 0;
  @media only screen and ${device.md} {
    font-size:3rem;
    font-weight:700;
  }
}

h2 {
  font-weight:500;
  font-size:1.25rem;
  margin: 1rem 0;

}

li {
  list-style-type:none;
}

`

export const Flex = styled.div`
  display:flex;
  justify-content:flex-end;
  @media only screen and ${device.md} {
    justify-content:flex-start;
  }
`

export const Button = styled.button`
  background:black;
  color:white;
  border:none;
  width:143px;
  height:40px;
  border-radius: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:.875em;
  box-shadow: 4px 4px 16px 0px #3D0066 25%;
  & :nth-child(1) {
    margin-right:10px;
  }
`

