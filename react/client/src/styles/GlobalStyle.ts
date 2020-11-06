import styled, { createGlobalStyle } from 'styled-components';
import { color } from 'styled-system';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  background: #9903ff;
  font-family: Roboto;
  font-weight: 400;
}

h1 {
  font-weight: 400;
  font-size: 2.125em;
}

h2 {
  font-weight:500;
  font-size:1.25em;
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
  & :nth-child(1) {
    margin-right:10px;
  }
`