import styled from 'styled-components';
import device from './breakpoints'

export const Wrapper = styled.div`
  color:white;
  display:flex;
  @media only screen and ${device.md} {
    margin: 1.5em 0 0 2.5em;
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