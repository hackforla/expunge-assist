import styled from 'styled-components';
import device from './breakpoints'

interface Props {
  background?: string;
}

export const Wrapper = styled.div<Props>`
  background: ${props => props.background};
  color:white;
  @media only screen and ${device.md} {
    height:850px;
    > img {
      margin-left:40px;
    }
  }
  height:570px;
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