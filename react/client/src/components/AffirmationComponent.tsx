import React from 'react';

import AffirmationIllustration from 'assets/affirmation-illustration.svg';

import Button from 'components/Button';

interface AffirmationProps {
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
}: AffirmationProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        background: '#F7EBFF',
        left: 0,
        bottom: 0,
        top: 60,
        width: '100%',
        color: '#3D0066',
        padding: 24,
        zIndex: 1,
        display: isActive ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        // transition: 'transform 600ms',
        // transform: isActive ? 'translateY(0%)' : 'translateY(-150%)',
      }}
    >
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
        className="adjacent-mar-top"
      >
        <Button
          type="button"
          onClick={() => onChangeAffirmation({ isActive: false })}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default AffirmationComponent;
