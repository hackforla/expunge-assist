import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core';

import hackForLALogo from 'assets/hackForLALogo.svg';

import { AppUrl } from 'contexts/RoutingProps';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) =>
  createStyles({
    footerContainer: {
      height: 60,
      width: '100%',
      color: palette.common.lightgrey,
      background: palette.common.black,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      padding: spacing(1, 3),
    },
    leftWrapper: {
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    middleWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 auto',
    },
    endWrapper: {
      fontSize: '12px',
      textAlign: 'end',
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    linkBtn: {
      fontSize: '12px',
      color: palette.common.lightgrey,
      padding: spacing(1),
      margin: spacing(0, 1),
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
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

  return (
    <div className={classes.footerContainer}>
      <div className={classes.leftWrapper}>
        <img src={hackForLALogo} alt="Hack for LA Logo" />
      </div>

      <div className={classes.middleWrapper}>
        <AppFooterLink url={AppUrl.PrivacyPolicy}>Privacy Policy</AppFooterLink>
        <AppFooterLink url={AppUrl.TermsOfUse}>Terms Of Use</AppFooterLink>
        <AppFooterLink url={AppUrl.AboutUs}>About Us</AppFooterLink>
        <AppFooterLink url={AppUrl.FAQ}>FAQ</AppFooterLink>
      </div>

      <span className={classes.endWrapper}>COPYRIGHT 2021 HACK FOR LA</span>
    </div>
  );
};

export default AppFooter;
