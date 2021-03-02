import React from 'react';
import { Button, Theme, makeStyles, createStyles } from '@material-ui/core';

import arrowRight from '../assets/arrowRight.svg';

interface ComponentProps {
  theme?: string;
  hasArrow?: boolean;
  buttonText: string;
  onClick: () => void;
}

interface StyleProps {
  theme?: string;
  hasArrow?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(() =>
  createStyles({
    root: {
      padding: '12px 16px',
      display: 'flex',
      border: 'none',
      borderRadius: '24px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.0125em',
      textTransform: 'uppercase',
      marginBottom: '1rem',
      cursor: 'pointer',

      boxShadow: (props) => {
        switch (props.theme) {
          case 'transparent':
            return 'none';
          default:
            return `4px 4px 16px rgba(61, 0, 102, 0.25)`;
        }
      },

      color: (props) => {
        switch (props.theme) {
          case 'transparent':
            return '#25003F, 100%';
          default:
            return '#FFFFFF';
        }
      },

      background: (props) => {
        switch (props.theme) {
          case 'dark':
            return '#25003F';
          case 'transparent':
            return 'white';
          default:
            return '#9903FF';
        }
      },
      '&:hover': {
        background: (props) => {
          switch (props.theme) {
            case 'dark':
              return '#330652';
            case 'transparent':
              return 'white';
            default:
              return '#a224f7';
          }
        },
      },
      '& img': {
        marginLeft: '10px',
        marginRight: '0px',
      },
    },
  })
);

const ButtonComponent = ({
  theme,
  hasArrow,
  buttonText,
  onClick,
}: ComponentProps) => {
  const styleProps = { theme, hasArrow };
  const classes = useStyles(styleProps);
  return (
    <Button type="button" className={classes.root} onClick={onClick}>
      {buttonText}
      {hasArrow && <img src={arrowRight} alt="arrow right" />}
    </Button>
  );
};

export default ButtonComponent;
