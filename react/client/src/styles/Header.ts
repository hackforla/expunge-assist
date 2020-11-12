import styled from 'styled-components';
import device from './breakpoints'

interface Props {
  background?: string;
  color?: string;
}

export const Wrapper = styled.div<Props>`
  background: ${props => props.background};
  display:flex;
  padding: 1.5em 0 0 1.5em;
  @media only screen and ${device.md} {
    margin: 0 0 0 2.5em;
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