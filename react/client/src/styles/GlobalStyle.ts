import styled, { createGlobalStyle } from 'styled-components';
import device from './breakpoints';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #9903ff;
    font-family: Roboto;
    font-weight: 400;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h2 {
    font-weight:500;
    font-size:1.25rem;
    margin: 1rem 0;
  }

  .adjacent-margin + .adjacent-margin {
    margin-top: 10px;

    @media only screen and ${device.md} {
      margin-top: 15px;
    }
  }

  .app-header + .content-page,
  .page-title + .adjacent-margin {
    margin-top: 15px;

    @media only screen and ${device.md} {
      margin-top: 30px;
    }
  }

  .page-title {
    font-size: 36px;
    font-weight: 400;

    @media only screen and ${device.md} {
      font-size: 48px;
      font-weight: 700;
    }
  }

  .section-title {
    font-size: 36px;
    font-weight: 700;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  @media only screen and ${device.md} {
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  background: black;
  color: white;
  border: none;
  width: 143px;
  height: 40px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875em;
  box-shadow: 4px 4px 16px 0px #3d0066 25%;
  & :nth-child(1) {
    margin-right: 10px;
  }
`;
