import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

import AffirmationImage from 'assets/affirmation-img.svg';
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
      display: (props) => (props.isActive ? 'block' : 'none'),
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '375px',
      margin: '5rem auto 0',
      position: 'relative',
    },
    cropIllustration: {
      overflow: 'hidden',
      position: 'absolute',
      width: '348px',
    },
    illustration: {
      width: '600px',
      position: 'relative',
      left: '-111px',
      top: '-12px',
    },
    messageContainer: {
      display: 'flex',
      flexDirection: 'column',
      background: '#f7ebff',
      height: '350px',
      position: 'relative',
      top: '277px',
      paddingTop: '20px',
      borderTopRightRadius: '64px',
      minWidth: '375px',
      padding: '24px',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '-40px',
        left: '8px',
        height: '40px',
        width: '40px',
        borderBottomLeftRadius: '200px',
        boxShadow: '0 20px 0 0 #f7ebff',
      },
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

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.cropIllustration}>
          <img
            src={AffirmationImage}
            alt="affirmation illustration"
            className={`${classes.illustration} adjacent-mar-top`}
          />
        </div>

        <div className={classes.messageContainer}>
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
              hasArrow
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffirmationComponent;
