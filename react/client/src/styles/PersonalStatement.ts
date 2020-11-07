import styled from 'styled-components';
import device from './breakpoints'

export const Wrapper = styled.div`
  margin:24px;
  color:white;
`
export const FlexWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
  @media only screen and ${device.md} {
    justify-content:flex-start;
  }
`