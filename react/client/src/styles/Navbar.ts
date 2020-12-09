import styled from 'styled-components';
import device from './breakpoints';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: none;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img,
  span {
    display: none;
    margin: 0 20px;
  }
  @media only screen and ${device.md} {
    background: black;
    height: 50px;
    img,
    span {
      display: block;
    }
  }
  @media only screen and ${device.lg} {
    img,
    span {
      margin: 0 45px;
    }
  }
`;

export const ImageWrapper = styled.div`
  @media only screen and ${device.md} {
    width: 230px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 300px;
  text-transform: uppercase;

  a {
    color: white;
    font-size: 0.625rem;
  }

  @media only screen and ${device.md} {
    & :nth-child(n + 3) {
      display: none;
    }
    width: 260px;
    a {
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;
