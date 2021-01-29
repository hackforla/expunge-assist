import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

import AffirmationIllustration from 'assets/affirmation-illustration.svg';

import Button from 'components/Button';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'fixed',
      background: '#f7ebff',
      left: '0',
      bottom: '0',
      top: '60px',
      width: '100%',
      color: '#3d0066',
      padding: '24px',
      zIndex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      display: (isActive) => (isActive ? 'flex' : 'none'),
    },
  })
);

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
  const classes = useStyles(isActive);

  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default AffirmationComponent;
