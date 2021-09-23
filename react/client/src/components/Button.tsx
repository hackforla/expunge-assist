import React from 'react';
import { Button, Theme, makeStyles, createStyles } from '@material-ui/core';
// icons are not where the mui docs say they are ... '@mui/icons-material/XXX';
import EmailIcon from '@material-ui/icons/Email';
// download icon is missing from node_modules
// import DownloadIcon from '@material-ui/icons/Download';
import GetAppIcon from '@material-ui/icons/GetApp';
// copy icon is missing from node_modules
// import ContentCopyIcon from '@material-ui/icons/ContentCopy';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import arrowRight from 'assets/arrowRight.svg';

interface ComponentProps {
  className?: string;
  theme?: string;
  hasArrow?: boolean;
  disabled?: boolean;
  icon?: string;
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
            return 'black';
          default:
            return '#FFFFFF';
        }
      },

      background: (props) => {
        switch (props.theme) {
          case 'dark':
            return '#25003F';
          case 'transparent':
            return '#FFFFFF';
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
              return '#FFFFFF';
            default:
              return '#a224f7';
          }
        },
      },
      '&:disabled': {
        color: (props) => {
          switch (props.theme) {
            case 'dark':
            case 'transparent':
              return '#757575';
            default:
              return '#FFFFFF';
          }
        },
        background: (props) => {
          switch (props.theme) {
            case 'dark':
            case 'transparent':
              return '#e4e4e4';
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
      {/* {icon && `<${icon} />`} */}
      {/* {icon !== undefined && */}
      {/* (icon === 'EmailIcon' ? <EmailIcon /> : <GetAppIcon />)} */}
      {icon === 'EmailIcon' ? <EmailIcon /> : null}
      {icon === 'GetAppIcon' ? <GetAppIcon /> : null}
      {icon === 'FileCopyIcon' ? <FileCopyIcon /> : null}
      {buttonText}
      {hasArrow && <img src={arrowRight} alt="arrow right" />}
    </Button>
  );
};

export default ButtonComponent;
