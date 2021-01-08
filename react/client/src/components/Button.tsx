import styled from 'styled-components';

// import device from 'styles/breakpoints';

interface StyleProps {
  theme?: string;
  hasArrow?: boolean; // todo
}

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
`;

const basicStyles = `
  background: #9903FF;

  &:hover {
    background: #a224f7;
  }
`;

const darkStyles = `
  background: #25003F;

  &:hover {
    background: #330652;
  }
`;

const Button = styled.button<StyleProps>`
  ${commonButtonStyles}
  ${(props) => {
    switch (props.theme) {
      case 'dark':
        return darkStyles;

      case 'basic':
      default:
        return basicStyles;
    }
  }}
`;
export default Button;
