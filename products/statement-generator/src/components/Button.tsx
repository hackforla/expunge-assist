import React, { useContext, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Theme, makeStyles, createStyles } from '@material-ui/core';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

interface StyleProps {
  theme?: string;
  hasArrow?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette }) =>
  createStyles({
    root: {
      minHeight: '44px',
      display: 'flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: '24px',
      lineHeight: '16px',
      textDecoration: 'none',

      border: ({ theme }) => {
        switch (theme) {
          case 'white':
          case 'transparent':
          case 'transparent-on-dark':
          case 'transparent-on-light':
          default:
            return `1px solid ${palette.primary.light}`;
        }
      },

      boxShadow: (props) => {
        switch (props.theme) {
          case 'white':
          case 'transparent':
          case 'transparent-on-dark':
          case 'transparent-on-light':
            return 'none';
          case 'dark':
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
          case 'dark':
          default:
            return '#FFFFFF';
        }
      },

      background: (props) => {
        switch (props.theme) {
          case 'white':
            return '#FFFFFF';
          case 'transparent':
          case 'transparent-on-dark':
          case 'transparent-on-light':
            return 'transparent';
          case 'cancel':
            return palette.warning.main;
          case 'dark':
          default:
            return palette.primary.main;
        }
      },
      '&:hover': {
        background: (props) => {
          switch (props.theme) {
            case 'white':
              return '#FFFFFF';
            case 'transparent':
            case 'transparent-on-dark':
            case 'transparent-on-light':
              return 'transparent';
            case 'cancel':
              return palette.warning.main;
            case 'dark':
            default:
              return palette.primary.main;
          }
        },
      },
      '&:disabled': {
        color: (props) => {
          switch (props.theme) {
            case 'white':
            case 'transparent-on-dark':
              return '#757575';
            case 'transparent-on-light':
            case 'transparent':
              return '#b7b7b7';
            case 'dark':
              return 'rgba(37, 0, 63, 0.8)';
            default:
              return '#FFFFFF';
          }
        },
        background: (props) => {
          switch (props.theme) {
            case 'white':
              return palette.common.lightgrey;
            case 'transparent':
            case 'transparent-on-dark':
            case 'transparent-on-light':
              return 'transparent';
            case 'dark':
              return palette.primary.dark;
            default:
              return '#C5B3D1';
          }
        },
      },
    },
  })
);

interface ComponentProps {
  className?: string;
  theme?: string;
  hasBackArrow?: boolean;
  hasForwardArrow?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ComponentProps>(
  (
    {
      className = '',
      theme,
      hasBackArrow,
      hasForwardArrow,
      disabled = false,
      icon,
      buttonText,
      onClick,
      tabIndex,
      onKeyDown,
    },
    ref
  ) => {
    const styleProps = { theme, hasBackArrow, hasForwardArrow };
    const classes = useStyles(styleProps);
    return (
      <Button
        ref={ref}
        disabled={disabled}
        type="button"
        className={`${classes.root} ${className}`}
        onClick={onClick}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
      >
        {hasBackArrow && (
          <ArrowBackRoundedIcon
            data-testid="back-arrow"
            style={{ height: '.8em' }}
          />
        )}
        {icon}
        {buttonText}
        {hasForwardArrow && (
          <ArrowForwardRoundedIcon
            data-testid="forward-arrow"
            style={{ height: '.8em' }}
          />
        )}
      </Button>
    );
  }
);

interface ILinkButtonComponent {
  className?: string;
  theme?: string;
  buttonText: string;
  to: string;
  dataTestId?: string;
}

export function LinkButtonComponent({
  className = '',
  theme,
  buttonText,
  to,
  dataTestId,
}: ILinkButtonComponent) {
  const styleProps = { theme };
  const classes = useStyles(styleProps);
  return (
    <Link
      type="button"
      className={`${classes.root} ${className}`}
      to={to!}
      data-testid={dataTestId}
    >
      {buttonText}
    </Link>
  );
}

// <FormRouteButton /> is a workaround to make sure RoutingContext.tsx knows that a page has been changed
interface FormRouteButtonProps extends ComponentProps {
  appUrl: AppUrl;
}

export function FormRouteButton({
  appUrl,
  ...otherProps
}: FormRouteButtonProps) {
  const { goNextPage } = useContext(RoutingContext);
  return <ButtonComponent {...otherProps} onClick={() => goNextPage(appUrl)} />;
}

export default ButtonComponent;
