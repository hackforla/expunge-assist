import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

interface ComponentProps {
  theme?: string;
  hasArrow?: boolean; // todo
  buttonText: string;
  onClick: () => void;
}

interface StyleProps {
  theme?: string;
  hasArrow?: boolean; // todo
}

const useStyles = makeStyles<Theme, StyleProps>(() =>
  createStyles({
    root: {
      color: '#FFFFFF',
      padding: '12px 16px',
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      display: 'flex',
      border: 'none',
      borderRadius: '24px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.0125em',
      textTrasnform: 'uppercase',
      cursor: 'pointer',
      '& :nth-child(1)': {
        marginRight: '10px',
      },
      background: (props) => (props.theme === 'dark' ? '#25003F' : '#9903FF'),
      '&:hover': {
        background: (props) => (props.theme === 'dark' ? '#330652' : '#a224f7'),
      },
    },
  })
);

const Button = ({ theme, hasArrow, buttonText, onClick }: ComponentProps) => {
  const styleProps = { theme, hasArrow };
  const classes = useStyles(styleProps);
  return (
    <button type="button" className={classes.root} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
