import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { AppUrl } from 'contexts/RoutingProps';

import useUtilityStyles from 'styles/utilityStyles';

import { LinkButtonComponent } from 'components/Button';

import notFoundDesktop from '../assets/notFound-desktop.svg';
import notFoundMobile from '../assets/notFound-mobile.svg';
import notFoundBgDesktop from '../assets/notFound-bg-desktop.svg';
import notFoundBgMobile from '../assets/notFound-bg-mobile.svg';

const useStyles = makeStyles(({ globals, breakpoints, spacing }) =>
  createStyles({
    backgroundImage: {
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right center',
      backgroundImage: `url(${notFoundBgDesktop})`,
      display: 'flex',
      flexGrow: 1,

      [breakpoints.down(breakpoints.values.lg)]: {
        backgroundSize: 'contain',
      },

      [breakpoints.down(breakpoints.values.md)]: {
        backgroundSize: 'contain',
        backgroundPosition: 'right top',
        backgroundImage: `url(${notFoundBgMobile})`,
      },
    },

    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      maxWidth: '1000px',
      marginLeft: 'auto',
      marginRight: 'auto',

      padding: spacing(6, 3),

      [breakpoints.down(breakpoints.values.md)]: {
        padding: spacing(3),
        flexDirection: 'column',
        textAlign: 'center',
      },
    },

    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    desktopImage: {
      marginLeft: 'auto',

      [breakpoints.down(breakpoints.values.md)]: {
        display: 'none',
      },
    },

    mobileImage: {
      width: '80%',
      maxWidth: globals.contentWidth,
      alignSelf: 'center',
      marginBottom: spacing(3),
      [breakpoints.up(breakpoints.values.md)]: {
        display: 'none',
      },
    },

    textContent: {
      alignItems: 'center',
    },

    headerStyle: {
      fontSize: '60px',
      fontWeight: 600,
      lineHeight: '80%',
      [breakpoints.down(breakpoints.values.md)]: {
        fontSize: '34px',
      },
    },

    paragraphStyle: {
      lineHeight: '1.5',
      fontSize: '20px',
      [breakpoints.down(breakpoints.values.md)]: {
        lineHeight: '1.2',
      },
    },

    homeButtonContainer: {
      [breakpoints.down(breakpoints.values.md)]: {
        justifyContent: 'center',
      },
    },
    buttonStyle: {
      width: 'fit-content',
      fontWeight: 'normal',
    },
  })
);

export default function NotFound() {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.backgroundImage}>
      <div className={classes.container}>
        <div className={classes.contentWrapper}>
          <img
            className={classes.mobileImage}
            src={notFoundMobile}
            alt="Person holding magnifying glass"
          />
          <div className={classes.textContent}>
            <h1 className={classes.headerStyle}>404 Error Page</h1>
            <p className={classes.paragraphStyle}>
              The page you are looking for may have been renamed, removed, or
              deleted.
            </p>
          </div>
          <div
            className={`${utilityClasses.buttonContainer} ${classes.homeButtonContainer}`}
          >
            <LinkButtonComponent
              to={AppUrl.Landing}
              buttonText={t('RETURN HOME')}
            />
          </div>
        </div>

        <div className={classes.desktopImage}>
          <img src={notFoundDesktop} alt="Person holding magnifying glass" />
        </div>
      </div>
    </div>
  );
}
