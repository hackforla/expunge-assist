import React from 'react';
import styled from 'styled-components';

import AffirmationIllustration from 'assets/affirmation-illustration.svg';

import Button from 'components/Button';

interface StyleProps {
  isActive: boolean;
}

const AffirmationContainer = styled.div<StyleProps>`
  position: fixed;
  background: #f7ebff;
  left: 0;
  bottom: 0;
  top: 60px;
  width: 100%;
  color: #3d0066;
  padding: 24px;
  zindex: 1px;
  flex-direction: column;
  align-items: center;

  ${(props) => (props.isActive ? 'display: flex' : 'display: none')};
`;

interface ComponentProps {
  isActive: boolean;
  titleText: string;
  buttonText: string;
  description: string;
  onChangeAffirmation: (newState: object) => void;
}

const AffirmationComponent = ({
  isActive,
  titleText,
  buttonText = 'Next',
  description,
  onChangeAffirmation,
}: ComponentProps) => {
  return (
    <AffirmationContainer isActive={isActive}>
      <img
        src={AffirmationIllustration}
        alt="affirmation illustration"
        style={{ height: 375 }}
        className="adjacent-mar-top"
      />

      <div className="page-title adjacent-mar-top">{titleText}</div>
      <div className="adjacent-mar-top">{description}</div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        className="adjacent-mar-top align-right-sm"
      >
        <Button
          type="button"
          onClick={() => onChangeAffirmation({ isActive: false })}
        >
          {buttonText}
        </Button>
      </div>
    </AffirmationContainer>
  );
};

export default AffirmationComponent;
