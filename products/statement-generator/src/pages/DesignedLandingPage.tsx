import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    pageContainer: {
      minWidth: '100%',
      height: '100%',
      maxWidth: '1200px',
    },
    greetingContainer: {
      width: '100%',
      backgroundColor: '#fffaf2',
      display: 'flex',
    },
    greetingTextContainer: {
      width: '50%',
      paddingTop: '30px',
    },
    greetingImageContainer: {
      width: '50%',
    },
    greetingHeaderContainer: {
      fontFamily: 'mulish',
      fontSize: '2.2em',
      paddingLeft: '40px',
      lineHeight: '45px',
      letterSpacing: '1px',
      marginTop: '50px',
      fontWeight: 800,
    },
    boldHeader: {
      width: '60%',
      paddingLeft: '50px',
    },
    purpleText: {
      fontFamily: 'mulish',
      fontSize: '1.5em',
      color: '#9903ff',
    },
    greetingDescriptionContainer: {
      padding: '10px 0 40px 40px',
    },
    greetingDescriptionText: {
      fontSize: '1.2em',
      fontWeight: 'normal',
      lineHeight: '40px',
      fontFamily: 'mulish',
      marginLeft: '50px',
    },
    demoButton: {
      width: '144px',
      height: '42px',
      backgroundColor: '#9903ff',
      color: '#fff',
      borderRadius: '8px',
      letterSoacing: '1px',
      border: 'none',
      marginLeft: '50px',
    },
    partnerContainer: {
      width: '100%',
      minHeight: '600px',
      backgroundColor: '#fff',
      height: '100%',
      marginBottom: '100px',
    },
    partnersFormSection: {
      width: '100%',
      height: '500px',
      display: 'flex',
      position: 'relative',
    },
    formContainer: {
      width: '60%',
    },
    partnerForm: {
      height: '375px',
      width: '700px',
      borderRadius: '8px',
      marginLeft: '150px',
      marginTop: '30px',
      border: '8px solid rgba(245, 179, 4, 0.66)',
      backgroundColor: '#fffaf2',
      fontSize: '1.6em',
      paddingBottom: '10px',
    },
    partnerHeadingContainer: {
      width: '50%',
      marginLeft: '100px',
    },
    partnerHeading: {
      fontFamily: 'mulish',
    },
    partnerFormText: {
      fontFamily: 'mulish',
      marginLeft: '100px',
      marginTop: '30px',
    },
    whyPartnerContainer: {
      width: '100%',
      height: '400px',
    },
    partnersFieldContainer: {
      width: '50%',
    },
    whyPartnerField: {
      border: '8px solid rgba(153,3,255,0.5)',
      height: '384px',
      backgroundColor: '#fffaf2',
      borderRadius: '8px',
      width: '700px',
      fontSize: '1.6em',
      marginLeft: '600px',
    },
    partnerHeaderContainer: {
      width: '100%',
      marginLeft: '80px',
      marginRight: '30px',
    },
    headOverTextContainer: {
      width: '90%',
      fontFamily: 'mulish',
      paddingLeft: '50px',
      fontSize: '0.9em',
      marginTop: '50px',
    },
  })
);

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.greetingContainer}>
        <div className={classes.greetingTextContainer}>
          <div className={classes.greetingHeaderContainer}>
            <div className={classes.boldHeader}>
              <span className={classes.purpleText}>Expunge Assist</span>
              accelerates the{' '}
              <span className={classes.purpleText}>Record Clearnace</span>{' '}
              process by helping user generate a declaration letter.
            </div>
          </div>
          <div className={classes.greetingDescriptionContainer}>
            <p className={classes.greetingDescriptionText}>
              While still under development, Expunge Assist will aim to help
              people in California with criminal records accomplish record
              clearance, expungement, or reduction
            </p>
            <Link to="/demo">
              <button className={classes.demoButton}>See Demo</button>
            </Link>
          </div>
        </div>
        <div className={classes.greetingImageContainer}>image</div>
      </div>

      <div className={classes.partnerContainer}>
        <div className={classes.partnersFormSection}>
          <div className={classes.formContainer}>
            <div className={classes.partnerForm}>
              <div className={classes.partnerHeadingContainer}>
                <h2 className={classes.partnerHeading}>
                  Were looking for{' '}
                  <span className={classes.purpleText}>Partners </span>to help!
                </h2>
              </div>
              <p className={classes.partnerFormText}>Lorem Ipsum</p>
              <p className={classes.partnerFormText}>Ipsum Lorem</p>
            </div>
          </div>
        </div>
        <div className={classes.whyPartnerContainer}>
          <div className={classes.partnersFieldContainer}>
            <div className={classes.whyPartnerField}>
              <div className={classes.partnerHeaderContainer}>Header</div>
              <p className={classes.partnerFormText}>Ipsum Lorem</p>
              <p className={classes.partnerFormText}>Ipsum Lorem</p>
              <p className={classes.partnerFormText}>Ipsum Lorem</p>
              <div className={classes.headOverTextContainer}>
                Head over to our <Link to="/about">About</Link> page to find out
                more about our goal to help improve the record clearance process
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
