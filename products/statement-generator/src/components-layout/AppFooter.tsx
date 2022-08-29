import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

import hackForLALogo from 'assets/hackForLALogo.svg';

import { AppUrl } from 'contexts/RoutingProps';
import Logo from 'components/Logo';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) =>
  createStyles({
    footerWrapper: {
      width: '100%',
      background: '#F7EBFF',
      flex: '0 0 auto',
    },
    appFooter: {
      color: palette.common.black,
      display: 'flex',
      alignItems: 'center',
      padding: spacing(2, 3),

      [breakpoints.down(breakpoints.values.md)]: {
        flexDirection: 'column-reverse',
        padding: spacing(2),
        justifyContent: 'center',
      },
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '16px',
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.down(breakpoints.values.md)]: {
        marginTop: spacing(3),
      },
    },
    rightContainer: {
      display: 'flex',
      [breakpoints.up(breakpoints.values.md)]: {
        marginLeft: 'auto',
      },
    },
    linkBtn: {
      textDecoration: 'none',
      color: palette.common.black,
      fontWeight: 500,
      padding: spacing(1),
      fontSize: '16px',

      '&:hover': {
        color: palette.primary.main,
        textDecoration: 'underline',
      },
      '&:active': {
        color: palette.primary.main,
      },

      '&$linkBtn + $linkBtn': {
        marginLeft: 4,
      },
    },
    hackforlaIcon: {
      height: 25,
      margin: 'auto 10px',
    },
    reg: {
      margin: 'auto 0',
    },
    line: {
      margin: 'auto 0',
      fontWeight: 300,
    },
    logoContainer: {
      display: 'flex',
    },
  })
);

function AppFooterLink(props: any) {
  const classes = useStyles();
  const { url, children } = props;

  return (
    <Link className={classes.linkBtn} to={url}>
      {children}
    </Link>
  );
}

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  return (
    <footer className={classes.footerWrapper}>
      <div className={`${classes.appFooter} ${utilityClasses.widePage}`}>
        <div className={classes.leftContainer}>
          <Logo footer />

          <div className={classes.textContainer}>
            <p>Contact: info@expungeassist.org</p>
          </div>
        </div>

        <div className={classes.rightContainer}>
          <AppFooterLink url={AppUrl.PrivacyPolicy}>
            {t('links.privacy_policy')}
          </AppFooterLink>
          <span className={classes.line}>|</span>
          <AppFooterLink url={AppUrl.TermsOfUse}>
            {t('links.terms_of_use')}
          </AppFooterLink>
          <span className={classes.line}>|</span>
          <a
            href="https://www.hackforla.org/"
            target="_blank"
            rel="noreferrer"
            className={classes.logoContainer}
          >
            <img
              className={classes.hackforlaIcon}
              src={hackForLALogo}
              alt="Hack for LA Logo"
            />
          </a>
          <span className={classes.reg}>© 2022 Hack for LA</span>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
