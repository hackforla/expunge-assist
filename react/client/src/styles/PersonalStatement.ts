import styled from 'styled-components';
import device from './breakpoints'
import { flexbox, space } from 'styled-system';

export const Wrapper = styled.div`
  margin:24px;
  color:white;
  @media only screen and ${device.md} {
    height:850px;
    > img {
      margin-left:40px;
    }
  }
  height:570px;
`

export const LogoWrapper = styled.div`
  display:flex;
  @media only screen and ${device.md} {
    margin-left: 2.5em;
  }
  div {
    display:none;
    margin-left: 1.8em;
    text-transform:uppercase;
    font-size:.75rem;
    @media only screen and ${device.md} {
      display:flex;
      flex-direction:column;
    }
  }
`

export const FlexWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
  @media only screen and ${device.md} {
    justify-content:flex-start;
    margin-top:40px;
  }
`

export const ContentWrapper = styled.div`
  @media only screen and ${device.md} {
    margin: 130px 0 0 130px;
  }
`

export const Box = styled.div`
  ${flexbox},
  ${space}
`