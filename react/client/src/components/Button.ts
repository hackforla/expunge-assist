import styled from 'styled-components'

const commonButtonStyles = `
  color: #FFFFFF;
  padding: 12px 16px;
  box-shadow: 4px 4px 16px rgba(61, 0, 102, 0.25);

  display: flex;
  border: none;
  border-radius: 24px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.0125em;
  text-transform: uppercase;
  cursor: pointer;

  & :nth-child(1) {
    margin-right:10px;
  }
`

export const Button = styled.button`
  ${commonButtonStyles}
  background: #9903FF;

  &:hover {
    background: #a224f7;
  }
`

export const PrimaryButton = styled.button`
  ${commonButtonStyles}
  background: #25003F;

  &:hover {
    background: #330652;
  }
`

export default Button;
