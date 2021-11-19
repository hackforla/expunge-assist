import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Footer from 'components/Footer';
import macbook from '../assets/MacBookProduct.jpg';
import rocket from '../assets/rocketship.svg';
import step1 from '../assets/step1Column.jpg';
import step2 from '../assets/step2Column.jpg';
import step3 from '../assets/step3Column.jpg';
import volunteers from '../assets/volunteers.jpg';

const useStyles = makeStyles(() =>
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
      display: 'flex',
    },
    iPhone: {
      height: '50px',
      width: '100px',
    },
    greetingHeaderContainer: {
      fontFamily: 'mulish',
      fontSize: '2.3em',
      paddingLeft: '40px',
      lineHeight: '45px',
      letterSpacing: '1px',
      marginTop: '50px',
      fontWeight: 800,
      width: '100%',
    },
    boldHeader: {
      width: '100%',
      paddingLeft: '50px',
    },
    purpleText: {
      fontFamily: 'mulish',
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
      paddingRight: '70px',
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
      fontSize: '1.2em',
    },
    partnerContainer: {
      width: '100%',
      minHeight: '600px',
      backgroundColor: '#fff',
      height: '100%',
      marginBottom: '20px',
    },
    partnersFormSection: {
      width: '100%',
      height: '400px',
      display: 'flex',
      position: 'relative',
      marginBottom: '40px',
    },
    formContainer: {
      width: '60%',
    },
    partnerForm: {
      height: '375px',
      width: '700px',
      borderRadius: '8px',
      marginLeft: '150px',
      marginTop: '20px',
      border: '8px solid rgba(245, 179, 4, 0.66)',
      backgroundColor: '#fffaf2',
      fontSize: '1.6em',
      paddingBottom: '10px',
    },
    partnerHeadingContainer: {
      width: '70%',
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
      paddingTop: '20px',
    },
    headOverTextContainer: {
      width: '90%',
      fontFamily: 'mulish',
      paddingLeft: '50px',
      fontSize: '0.9em',
      marginTop: '50px',
    },
    partnerMissionContainer: {
      width: ' 100%',
      height: '480px',
    },
    missionCard: {
      width: '600px',
      height: '335px',
      border: '8px solid rgba(153,3,225, 0.5)',
      borderRadius: '8px',
      marginLeft: '120px',
      backgroundColor: '#fffaf2',
      zIndex: 4,
    },
    missionTextContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1.6em',
    },
    missionText: {
      color: '#9903ff',
      fontFamily: 'mulish',
      marginLeft: '50px',
    },
    textContainer: {
      marginTop: '35px',
    },
    missionDescription: {
      fontFamily: 'mulish',
      fontSize: '1.3em',
      letterSpacing: '1px',
      lineHeight: '40px',
      marginLeft: '50px',
      marginRight: '50px',
    },
    missionButton: {
      borderRadius: '8px',
      marginTop: '40px',
      marginLeft: '50px',
      color: '#fff',
      backgroundColor: '#9903ff',
      height: '42px',
      width: '162px',
      fontSize: '1.2em',
      letterSpacing: '1px',
    },
    purpleBand: {
      width: '100%',
      backgroundColor: '#f9f1ff',
      height: '280px',
      zIndex: -2,
      position: 'relative',
      bottom: '140px',
    },
    howItWorksContainer: {
      width: '100%',
      backgroundColor: '#fff',
      marginTop: '50px',
      marginBottom: 0,
      height: '550px',
    },
    rocketImage: {
      width: '40%',
      height: '500px',
      zIndex: 2,
      position: 'relative',
      left: '50%',
      bottom: '85vh',
    },
    stepsHeaderContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '40px',
    },
    stepsHeaderText: {
      fontFamily: 'mulish',
      fontSize: '2.5em',
    },
    colorPurple: {
      color: '#9903ff',
    },
    stepsImageContainer: {
      width: '100%',
      height: '700px',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    },
    stepsImage: {
      width: '255px',
      height: '368px',
      margin: '0 35px',
    },
    volunteering: {
      width: '100%',
      position: 'relative',
    },
    volunteersImg: {
      height: '100%',
      width: '40%',
    },
    volunteerCard: {
      border: '8px solid rgba(245, 179, 4, 0.66)',
      width: '600px',
      borderRadius: '8px',
      height: '350px',
      marginLeft: '50%',
      marginTop: '50px',
      backgroundColor: '#fffaf2',
      zIndex: 4,
      position: 'absolute',
      bottom: '12%',
    },
    volunteerCardHeader: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-start',
    },
    volunteerHeading: {
      padding: '40px 0 0 50px',
      fontSize: '2.2em',
      color: '#9903ff',
      fontFamily: 'mulish',
    },
    volunteerTextContainer: {
      padding: '40px 0 0 50px',
    },
    volunteerText: {
      fontSize: '1.3em',
      paddingRight: '52px',
      lineHeight: '30px',
      fontFamily: 'mulish',
    },
  })
);

export default function LandingPage() {
  const classes = useStyles();
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <div className={classes.pageContainer}>
      <div className={classes.greetingContainer}>
        <div className={classes.greetingTextContainer}>
          <div className={classes.greetingHeaderContainer}>
            <div className={classes.boldHeader}>
              <h3>
                <span className={classes.purpleText}>Expunge Assist</span>
                <div>
                  accelerates the{' '}
                  <span className={classes.purpleText}> Record</span>
                </div>{' '}
                <span className={classes.purpleText}>Clearance</span> process by
                helping user generate a declaration letter.
              </h3>
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
        <div className={classes.greetingImageContainer}>
          <img src={macbook} alt="macbook preview" />
          {/* <img className={classes.iPhone} src={iPhone} alt="iphone preview" /> */}
        </div>
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
              <div className={classes.partnerHeaderContainer}>
                <h2>
                  Why <span className={classes.colorPurple}>Partner</span> with
                  us?
                </h2>
              </div>
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

      <div className={classes.partnerMissionContainer}>
        <div className={classes.missionCard}>
          <div className={classes.missionTextContainer}>
            <h2 className={classes.missionText}>Our Mission</h2>
          </div>
          <div className={classes.textContainer}>
            <p className={classes.missionDescription}>
              Our mission is to help the 200,000+ residents of LA county who are
              eligible for record clearance and help provide a second chance
            </p>
            <button className={classes.missionButton}>Learn More</button>
          </div>
        </div>
        <div className={classes.purpleBand} />
        <img className={classes.rocketImage} src={rocket} alt="rocketship" />
      </div>

      <div className={classes.howItWorksContainer}>
        <div className={classes.stepsHeaderContainer}>
          <h2 className={classes.stepsHeaderText}>
            How <span className={classes.colorPurple}>Expunge Assist</span>{' '}
            Works
          </h2>{' '}
        </div>
        <div className={classes.stepsImageContainer}>
          <img className={classes.stepsImage} src={step1} alt="phone" />
          <img className={classes.stepsImage} src={step2} alt="phone" />
          <img className={classes.stepsImage} src={step3} alt="phone" />
        </div>
      </div>

      <div className={classes.volunteering}>
        <img
          className={classes.volunteersImg}
          src={volunteers}
          alt="volunteers"
        />

        <div className={classes.volunteerCard}>
          <div className={classes.volunteerCardHeader}>
            <h2 className={classes.volunteerHeading}>Volunteer</h2>
          </div>
          <div className={classes.volunteerTextContainer}>
            <p className={classes.volunteerText}>
              We’re looking for members to join our development team and support
              our mission towards improve the record clearance process. <br />
              Sign up below for more info.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
