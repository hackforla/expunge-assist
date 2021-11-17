import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Footer from 'components/Footer';
import ourMissionImg from '../assets/ourMissionImg.jpg';
import history from '../assets/thehistory.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    aboutContainer: {
      width: '100%',
      height: '100%',
    },
    ourMissionContainer: {
      backgroundColor: '#fffaf2',
      width: '100%',
      height: '400px',
      display: 'flex',
    },
    ourMissionTextContainer: {
      width: '60%',
    },
    ourMissionImageContainer: {
      width: '40%',
      paddingTop: '30px',
    },
    missionHeaderContainer: {
      width: '100%',
      padding: '30px 0 0 50px',
    },
    ourMissionHeading: {
      fontFamily: 'mulish',
      fontWeight: 600,
    },
    ourMissionBodyText: {
      padding: '50px 35px 0 50px',
      width: '100%',
      fontSize: '1.3em',
      lineHeight: '28px',
      letterSpacing: '2px',
    },
    ourMissionImg: {
      width: '400px',
      height: '300px',
    },
    ourMissionText: {
      width: '620px',
    },
    buttonContainer: {
      width: '100%',
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'space-start',
      paddingLeft: '50px',
    },
    volunteerButton: {
      width: '201px',
      height: '50px',
      backgroundColor: '#F8CD58',
      color: '#222',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.2em',
      fontFamily: 'mulish',
      fontWeight: 800,
    },
    partnerButton: {
      width: '201px',
      height: '50px',
      backgroundColor: '#9903ff',
      color: '#fff',
      marginLeft: '200px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1.2em',
      fontFamily: 'mulish',
      fontWeight: 800,
    },
    historyContainer: {
      backgroundColor: '#F9F1FF',
      height: '450px',
      width: '100%',
      display: 'flex',
    },
    historyImageContainer: {
      width: '40%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    historyTextContainer: {
      width: '60%',
    },
    historyHeadingContainer: {
      width: '100%',
      marginTop: '40px',
    },
    historyHeading: {
      fontFamily: 'mulish',
      fontSize: '2.2em',
      lineHeight: '44px',
      fontWeight: 700,
    },
    historyTextParagraphs: {
      fontSize: '1.5em',
      width: '700px',
      marginTop: '25px',
      lineHeight: '26px',
      fontWeight: 100,
      fontFamily: 'mulish',
    },
    accomplishContainer: {
      width: '100%',
      backgroundColor: '#fffaf2',
      height: '500px',
    },
    accomplishHeaderContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '50px',
    },
    accomplishHeader: {
      fontFamily: 'mulish',
    },
  })
);

const AboutUs: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.ourMissionContainer}>
        <div className={classes.ourMissionTextContainer}>
          <div className={classes.missionHeaderContainer}>
            <h1 className={classes.ourMissionHeading}>Our Mission</h1>
          </div>
          <div className={classes.ourMissionBodyText}>
            <p className={classes.ourMissionText}>
              Expunge Assist (formerly known as the Record Clearance Project) is
              a project of Hack for LA. Expunge Assist helps people in
              California with criminal records accomplish record clearance,
              expungement or reduction as a result of Prop 47 & Prop 64.
            </p>
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.volunteerButton}>
              Volunteer with Us
            </button>
            <button className={classes.partnerButton}>Become a Partner</button>
          </div>
        </div>
        <div className={classes.ourMissionImageContainer}>
          <img className={classes.ourMissionImg} src={ourMissionImg} alt="" />
        </div>
      </div>
      <div className={classes.historyContainer}>
        <div className={classes.historyImageContainer}>
          <img src={history} alt="" />
        </div>
        <div className={classes.historyTextContainer}>
          <div className={classes.historyHeadingContainer}>
            <h2 className={classes.historyHeading}>The History</h2>
            <div>
              <p className={classes.historyTextParagraphs}>
                Record clearance or reduction in California is possible as a
                result of legislation which includes Prop 64 & Prop 47.
              </p>
              <p className={classes.historyTextParagraphs}>
                Community organizers and non-profits are already working in this
                space to clear records for millions of eligible cases
              </p>
              <p className={classes.historyTextParagraphs}>
                New legislation under AB 1793 has initiated the process of
                automation for many of these records.
              </p>
              <p className={classes.historyTextParagraphs}>
                Still, many Californians will still have to submit a petition to
                have their record cleared.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.accomplishContainer}>
        <div className={classes.accomplishHeaderContainer}>
          <h2 className={classes.accomplishHeader}>
            What We&apos;ve Accomplished So Far
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
