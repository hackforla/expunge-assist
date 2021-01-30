import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
import useUtilityStyles from 'styles/utilityStyles';

import AffirmationIllustration from 'assets/affirmation-illustration.svg';
import Button from './Button';

const useStyles = makeStyles<Theme, StyleProps>(() =>
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
      display: (props) => (props.isActive ? 'flex' : 'none'),
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

interface StyleProps {
  isActive: boolean;
}

const AffirmationComponent = ({
  isActive,
  titleText,
  buttonText = 'Next',
  description,
  onChangeAffirmation,
}: ComponentProps) => {
  const styleProps: StyleProps = { isActive };
  const classes = useStyles(styleProps);
  const utilityClasses = useUtilityStyles({});

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
          onClick={() => onChangeAffirmation({ isActive: false })}
          buttonText={buttonText}
        />
      </div>
    </div>
  );
};

export default AffirmationComponent;
