import React from 'react';
import { Theme, makeStyles, createStyles, Link } from '@material-ui/core';

import hackForLALogo from 'assets/hackForLALogo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerContainer: {
      width: '100%',
      color: '#cbcbcb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#0a0a0a',
      flexShrink: 0,
      padding: '6px 18px',
    },
    leftWrapper: {
      [theme.breakpoints.down('sm')]: {
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
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    linkBtn: {
      padding: '6px',
      color: '#cbcbcb',
      fontSize: '12px',
      margin: '0 6px',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
  })
);

function NavbarLink(props: any) {
  const classes = useStyles();
  const { url, children } = props;

  return (
    <Link className={classes.linkBtn} href={`/${url}`}>
      {children}
    </Link>
  );
}

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <div className={classes.leftWrapper}>
        <img src={hackForLALogo} alt="Hack for LA Logo" />
      </div>

      <div className={classes.middleWrapper}>
        <NavbarLink url="PrivacyPolicy">Privacy Policy</NavbarLink>
        <NavbarLink url="TermsOfUse">Terms Of Use</NavbarLink>
        <NavbarLink url="AboutUs">About Us</NavbarLink>
        <NavbarLink url="FAQ">FAQ</NavbarLink>
      </div>

      <span className={classes.endWrapper}>COPYRIGHT 2021 HACK FOR LA</span>
    </div>
  );
};

export default Navbar;
