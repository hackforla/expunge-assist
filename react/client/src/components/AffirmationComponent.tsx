import React from 'react';

import Button from 'components/Button';

interface AffirmationProps {
  buttonText: string;
  onClickAffirmation: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const AffirmationComponent = ({
  buttonText,
  onClickAffirmation,
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
        // paddingTop: 24,
        // paddingBottom: 24,
        padding: 24,
        zIndex: 1,
      }}
    >
      <div
        className="adjacent-mar-top"
        style={{ height: 375, background: '#bf9ed6' }}
      >
        [image]
      </div>

      <div className="page-title adjacent-mar-top">Welcome!</div>
      <div className="adjacent-mar-top">
        This is a tool to generate a personal statement.
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        className="adjacent-mar-top"
      >
        <Button type="button" onClick={onClickAffirmation}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default AffirmationComponent;
