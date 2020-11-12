import styled from 'styled-components';
import device from './breakpoints'

interface Props {
  background?: string;
  color?: string;
}

export const LandingHeader = styled.div<Props>`
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

export const FormHeader = styled.div`
  background:#F7EBFF;
  color:black;
  height:200px;
  h2 {
    margin: 0;
  }
  p {
    color:3D0066;
    opacity:30%;
  }
`