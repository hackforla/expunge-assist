import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';

import hackForLALogo from 'assets/hackForLALogo.svg';

const useStyles = makeStyles(({ palette, breakpoints }) =>
  createStyles({
    footerContainer: {
      width: '100%',
      color: palette.common.lightgrey,
      background: palette.common.black,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      padding: '6px 18px',
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
      padding: '6px',
      color: palette.common.lightgrey,
      fontSize: '12px',
      margin: '0 6px',
      [breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  })
);

function FooterLink(props: any) {
  const classes = useStyles();
  const { url, children } = props;

  return (
    <Link className={classes.linkBtn} href={`/${url}`}>
      {children}
    </Link>
  );
}

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.leftWrapper}>
        <img src={hackForLALogo} alt="Hack for LA Logo" />
      </div>

      <div className={classes.middleWrapper}>
        <FooterLink url="PrivacyPolicy">Privacy Policy</FooterLink>
        <FooterLink url="TermsOfUse">Terms Of Use</FooterLink>
        <FooterLink url="AboutUs">About Us</FooterLink>
        <FooterLink url="FAQ">FAQ</FooterLink>
      </div>

      <span className={classes.endWrapper}>COPYRIGHT 2021 HACK FOR LA</span>
    </div>
  );
};

export default Footer;
