import styled from 'styled-components';
import device from './breakpoints'

interface Props {
  background?: string;
}

export const Wrapper = styled.div<Props>`
  background: ${props => props.background};
  color:white;
  height:570px;
  flex: 1 0 auto;
`

export const FlexWrapper = styled.div`
  display:flex;
  justify-content:flex-end;

`

export const FormWrapper = styled.div`

`
