import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core';

import hackForLALogo from 'assets/hackForLALogo.svg';

import { AppUrl } from 'contexts/RoutingProps';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    footerWrapper: {
      width: '100%',
      background: palette.primary.light,
      flex: '0 0 auto',
    },
    appFooter: {
      color: palette.common.black,
      display: 'flex',
      alignItems: 'center',
      padding: spacing(1, 3),
    },
    leftContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: spacing(1),
    },
    middleContainer: {
      display: 'flex',
      marginLeft: 'auto',
    },
    linkBtn: {
      textDecoration: 'none',
      color: palette.common.black,
      padding: spacing(1),
      fontSize: '14px',

      '&:hover': {
        color: palette.primary.main,
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
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={`${classes.appFooter} ${utilityClasses.widePage}`}>
        <a href="https://www.hackforla.org/" target="_blank" rel="noreferrer">
          <img
            className={classes.hackforlaIcon}
            src={hackForLALogo}
            alt="Hack for LA Logo"
          />
        </a>

        <div className={classes.leftContainer}>
          <span style={{ fontSize: 13, fontWeight: 'bold' }}>
            © 2022 Hack for LA
          </span>
          <span style={{ fontSize: 12 }}>info@expungeassist.org</span>
        </div>

        <div className={classes.middleContainer}>
          <AppFooterLink url={AppUrl.PrivacyPolicy}>
            Privacy Policy
          </AppFooterLink>
          <AppFooterLink url={AppUrl.TermsOfUse}>Terms Of Use</AppFooterLink>
          <AppFooterLink url={AppUrl.AboutUs}>About Us</AppFooterLink>
          <AppFooterLink url={AppUrl.FAQ}>FAQ</AppFooterLink>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
