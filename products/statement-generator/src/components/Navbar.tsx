import React from 'react';
import { Theme, makeStyles, createStyles, Link } from '@material-ui/core';

import hackForLALogo from 'assets/hackForLALogo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      padding: '6px 18px',
      background: theme.palette.primary.main,
      [theme.breakpoints.up('md')]: {
        background: 'black',
      },
    },
    leftWrapper: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    middleWrapper: {
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'space-between',
      maxWidth: '320px',
      textTransform: 'uppercase',
      margin: '0 auto',
      '& a': {},
      [theme.breakpoints.up('md')]: {
        // '& :nth-child(n+3)': {
        //   display: 'none',
        // },
        // width: '260px',
        // '& a': {
        //   fontWeight: '700',
        //   fontSize: '1rem',
        // },
      },
      [theme.breakpoints.down('sm')]: {
        // position: 'relative',
        // bottom: '17px',
      },
    },
    endWrapper: {
      fontSize: '12px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    linkBtn: {
      padding: '6px',
      color: 'white',
      fontSize: '12px',
    },
  })
);

function NavbarLink(props: any) {
  const classes = useStyles();
  const publicUrl = process.env.PUBLIC_URL;
  const { url, children } = props;

  return (
    <Link
      className={classes.linkBtn}
      href={`${publicUrl}/${url}`}
      underline="always"
    >
      {children}
    </Link>
  );
}

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftWrapper}>
        <img src={hackForLALogo} alt="Hack for LA Logo" />
      </div>

      <div className={classes.middleWrapper}>
        <NavbarLink url="PrivacyPolicy">Privacy Policy</NavbarLink>
        <NavbarLink url="TermsOfUse">Terms Of Use</NavbarLink>
        <NavbarLink url="AboutUs">About Us</NavbarLink>
        <NavbarLink url="FAQ">FAQ</NavbarLink>
      </div>

      <span className={classes.endWrapper}>COPYRIGHT 2020 HACK FOR LA</span>
    </div>
  );
};

export default Navbar;
