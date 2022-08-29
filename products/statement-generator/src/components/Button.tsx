import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Theme, makeStyles, createStyles } from '@material-ui/core';

import arrowRight from 'assets/arrowRight.svg';

interface ComponentProps {
  className?: string;
  theme?: string;
  hasArrow?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  buttonText: string;
  onClick: () => void;
}

interface StyleProps {
  theme?: string;
  hasArrow?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette }) =>
  createStyles({
    root: {
      padding: '8px 16px',
      display: 'flex',
      borderRadius: '24px',
      lineHeight: '16px',
      textDecoration: 'none',

      border: ({ theme }) => {
        switch (theme) {
          case 'white':
            return `1px solid ${palette.primary.light}`;
          case 'transparent':
          case 'transparent-on-dark':
          case 'transparent-on-light':
          default:
            return '1px solid transparent';
        }
      },

      boxShadow: (props) => {
        switch (props.theme) {
          case 'white':
          case 'transparent':
          case 'transparent-on-dark':
          case 'transparent-on-light':
            return 'none';
          default:
            return `4px 4px 16px rgba(61, 0, 102, 0.25)`;
        }
      },

      color: (props) => {
        switch (props.theme) {
          case 'white':
          case 'transparent-on-light':
            return palette.primary.darker;
          case 'transparent-on-dark':
          default:
            return '#FFFFFF';
        }
      },

      background: (props) => {
        switch (props.theme) {
          case 'dark':
            return palette.primary.darker;
          case 'white':
            return '#FFFFFF';
          case 'transparent':
          case 'transparent-on-dark':
          case 'transparent-on-light':
            return 'transparent';
          case 'cancel':
            return palette.warning.main;
          case 'landing':
          default:
            return palette.primary.main;
        }
      },
      '&:hover': {
        background: (props) => {
          switch (props.theme) {
            case 'dark':
              return '#330652';
            case 'white':
              return '#FFFFFF';
            case 'transparent':
            case 'transparent-on-dark':
            case 'transparent-on-light':
              return 'transparent';
            case 'cancel':
              return palette.warning.main;
            default:
              return palette.primary.main;
          }
        },
      },
      '&:disabled': {
        color: (props) => {
          switch (props.theme) {
            case 'dark':
            case 'white':
            case 'transparent-on-dark':
              return '#757575';
            case 'transparent-on-light':
            case 'transparent':
              return '#b7b7b7';
            default:
              return '#FFFFFF';
          }
        },
        background: (props) => {
          switch (props.theme) {
            case 'dark':
            case 'white':
              return palette.common.lightgrey;
            case 'transparent':
            case 'transparent-on-dark':
            case 'transparent-on-light':
              return 'transparent';
            default:
              return '#ba85de';
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
  className = '',
  theme,
  hasArrow,
  disabled = false,
  icon,
  buttonText,
  onClick,
}: ComponentProps) => {
  const styleProps = { theme, hasArrow };
  const classes = useStyles(styleProps);
  return (
    <Button
      disabled={disabled}
      type="button"
      className={`${classes.root} ${className}`}
      onClick={onClick}
    >
      {icon}
      {buttonText}
      {hasArrow && <img src={arrowRight} alt="arrow right" />}
    </Button>
  );
};

interface ILinkButtonComponent {
  className?: string;
  theme?: string;
  buttonText: string;
  to: string;
}

export function LinkButtonComponent({
  className = '',
  theme,
  buttonText,
  to,
}: ILinkButtonComponent) {
  const styleProps = { theme };
  const classes = useStyles(styleProps);
  return (
    <Link type="button" className={`${classes.root} ${className}`} to={to!}>
      {buttonText}
    </Link>
  );
}

export default ButtonComponent;
