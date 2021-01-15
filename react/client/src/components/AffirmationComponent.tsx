import React from 'react';

import Button from 'components/Button';

interface AffirmationProps {
  isActive: boolean;
  buttonText: string;
  description: string;
  onChangeAffirmation: (newState: object) => void;
}

const AffirmationComponent = ({
  isActive,
  buttonText,
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
        transition: 'transform 1000ms',
        transform: isActive ? 'translateY(0%)' : 'translateY(-150%)',
      }}
    >
      <div
        className="adjacent-mar-top"
        style={{ height: 375, background: '#bf9ed6' }}
      >
        [image]
      </div>

      <div className="page-title adjacent-mar-top">Welcome!</div>
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
