import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

import { AppUrl } from 'contexts/RoutingProps';

import useUtilityStyles from 'styles/utilityStyles';

import landingWorkImg from 'assets/landingWorkImg.svg';
import eaImage from 'assets/eaImage.png';
import screenshotExample from 'assets/screenshotExample.png';
import howItWorks from 'assets/howItWorks.png';
import completeLetter from 'assets/completeLetter.png';
import privacyPolicy from 'assets/privacyPolicy.png';

import ButtonComponent, { LinkButtonComponent } from 'components/Button';
import LandingAccordions from '../components/LandingAccordions';

const useStyles = makeStyles(({ globals, palette, breakpoints, spacing }) =>
  createStyles({
    wideSection: {
      padding: spacing(6, 3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      [breakpoints.down(breakpoints.values.md)]: {
        padding: spacing(3),
      },
    },
    backgroundBlock: {
      backgroundColor: palette.primary.lighter,
      zIndex: 1,
      position: 'relative',
    },
    section: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '960px',
      padding: spacing(3),
      marginLeft: 'auto',
      marginRight: 'auto',

      '&.column': {
        flexDirection: 'column',
      },
      // adjacent sections are spaced apart
      '&$section ~ $section': {
        marginTop: spacing(6),
      },
      '& h2': {
        fontWeight: '600',
        [breakpoints.down(breakpoints.values.sm)]: {
          textAlign: 'left',
          alignSelf: 'flex-start',
        },
      },

      [breakpoints.down(breakpoints.values.md)]: {
        maxWidth: globals.contentWidth,
        flexDirection: 'column',
      },
    },
    sectionLeft: {
      display: 'flex',
      justifyContent: 'flex-end',
      flex: '1 1 50%',

      [breakpoints.down(breakpoints.values.md)]: {
        flex: '1 1 auto',
        width: '100%',
        justifyContent: 'center',
      },
    },
    sectionRight: {
      display: 'flex',
      justifyContent: 'flex-start',
      flex: '1 1 50%',

      '&:not(:empty)': {
        [breakpoints.up(breakpoints.values.md)]: {
          marginLeft: spacing(2),
        },
        [breakpoints.down(breakpoints.values.md)]: {
          flex: '1 1 auto',
          width: '100%',
          marginTop: spacing(2),
        },
      },
      [breakpoints.down(breakpoints.values.md)]: {
        justifyContent: 'center',
      },
      [breakpoints.down(breakpoints.values.sm)]: {
        textAlign: 'left',
        alignItems: 'flex-start',
      },
    },
    sectionContent: {
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },

    sectionCenter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      textAlign: 'center',
      '& img': {
        margin: '42px 0 10px 0',
      },
      [breakpoints.down(breakpoints.values.sm)]: {
        textAlign: 'left',
        alignItems: 'flex-start',
      },
    },
    unorderedList: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    opportunitySection: {
      backgroundColor: `${palette.primary.lighter}`,
      width: '100%',
      padding: '100px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      margin: '0 auto',
      '& button': {
        width: '170px',
        margin: `${spacing(2)}px auto 0px auto`,
      },
      [breakpoints.down(breakpoints.values.sm)]: {
        padding: '24px',
      },
    },
    firstSection: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    firstSectionContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      [breakpoints.up(breakpoints.values.md)]: {
        width: 400,
      },

      '&> * + *': {
        marginTop: spacing(2),
        paddingTop: 0,
      },
    },
    section3inner: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: spacing(3),

      [breakpoints.down(breakpoints.values.md)]: {
        maxWidth: globals.contentWidth,
        flexDirection: 'column',
      },
    },
    section2Image: {
      width: '200px',
      [breakpoints.up(breakpoints.values.md)]: {
        width: '300px',
      },
      [breakpoints.down(breakpoints.values.md)]: {
        width: '300px',
      },
    },
    sectionImage: {
      [breakpoints.down(breakpoints.values.md)]: {
        width: '300px',
      },
      [breakpoints.down(breakpoints.values.sm)]: {
        width: '100%',
      },
    },

    // only shows up on desktop sizes
    horizontalImage: {
      width: '40%',
      marginLeft: 'auto',

      [breakpoints.down(breakpoints.values.md)]: {
        display: 'none',
      },
    },
    // only shows up on mobile sizes
    verticalImage: {
      // mobile view
      width: '100%',
      maxWidth: globals.contentWidth,
      alignSelf: 'center',
      [breakpoints.up(breakpoints.values.md)]: {
        display: 'none',
      },
    },

    startButtonContainer: {
      [breakpoints.down(breakpoints.values.md)]: {
        justifyContent: 'center',
      },
    },
    sectionButton: {
      marginTop: spacing(3),
      display: 'flex',
      flexDirection: 'row',
    },
    waveBg: {
      zIndex: -2,
      marginTop: '-5%',
      marginBottom: '24px',

      [breakpoints.up(breakpoints.values.md)]: {
        height: 100,
      },
      [breakpoints.up(breakpoints.values.lg)]: {
        height: 125,
      },
    },
  })
);

function WaveBackground() {
  const classes = useStyles();
  return (
    <div className={classes.waveBg}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F7EBFF"
          fillOpacity="1"
          d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
    </div>
  );
}

function LandingSection1() {
  const { t } = useTranslation();
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();
  return (
    <section className={`${classes.section} ${classes.firstSection}`}>
      <div className={classes.firstSectionContent}>
        <h2>{t('landing_page.sectionTitle1')}</h2>
        <img
          className={classes.verticalImage}
          src={landingWorkImg}
          alt="Person working on a laptop"
        />
        <p>{t('landing_page.sectionParagraph1')}</p>
        <div
          className={`${utilityClasses.buttonContainer} ${classes.startButtonContainer}`}
        >
          <LinkButtonComponent
            to={AppUrl.Welcome}
            buttonText={t('button.startNow')}
          />
        </div>
      </div>

      <div className={classes.horizontalImage}>
        <img
          style={{ width: '100%' }}
          src={landingWorkImg}
          alt="Person working on a laptop"
        />
      </div>
    </section>
  );
}

function LandingSection2() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <section className={classes.section} style={{ marginTop: '104px' }}>
      <div className={classes.sectionLeft}>
        <img className={classes.section2Image} src={eaImage} alt="expunge" />
      </div>
      <div className={`${classes.sectionRight} ${classes.sectionContent}`}>
        <div>
          <h2>{t('landing_page.sectionTitle2')}</h2>
          <p>{t('landing_page.sectionParagraph2')}</p>
        </div>
        <div className={classes.sectionButton}>
          <LinkButtonComponent to={AppUrl.AboutUs} buttonText={t('ABOUT US')} />
        </div>
      </div>
    </section>
  );
}

function LandingSection3() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <section className={`${classes.section} column`}>
      <h2>{t('landing_page.sectionTitle3')}</h2>

      <div className={classes.section3inner}>
        <div className={classes.sectionLeft}>
          <img
            className={classes.sectionImage}
            src={screenshotExample}
            alt="screenshot example"
          />
        </div>
        <div className={classes.sectionRight}>
          <div className={`${classes.unorderedList}`}>
            <p>{t('landing_page.sectionParagraph3')}</p>
            <br />
            <ul>
              <li>{t('landing_page.sectionParagraph3BulletPoint1')}</li>
              <li>{t('landing_page.sectionParagraph3BulletPoint2')}</li>
              <li>{t('landing_page.sectionParagraph3BulletPoint3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingSection4() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <section className={`${classes.section}`}>
      <div className={classes.sectionLeft}>
        <div className={classes.sectionContent}>
          <h2>{t('landing_page.sectionTitle4')}</h2>
          <p>{t('landing_page.sectionParagraph4')}</p>
        </div>
      </div>
      <div className={classes.sectionRight}>
        <img
          className={classes.sectionImage}
          src={howItWorks}
          alt="how it works"
        />
      </div>
    </section>
  );
}

function LandingSection5() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <section className={`${classes.section}`}>
      <div className={classes.sectionCenter}>
        <h2>{t('landing_page.sectionTitle5')}</h2>
        <p>{t('landing_page.sectionParagraph5a')}</p>
        <img
          className={classes.sectionImage}
          style={{ display: 'block', width: '100%' }}
          src={completeLetter}
          alt="a complete letter"
        />
        <p>{t('landing_page.sectionParagraph5b')}</p>
      </div>
    </section>
  );
}

function LandingSection6() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <section className={`${classes.section}`}>
      <div className={classes.sectionLeft}>
        <div className={classes.sectionContent}>
          <h2>{t('landing_page.sectionTitle6')}</h2>
          <p>{t('landing_page.sectionParagraph6')}</p>
          <div className={classes.sectionButton}>
            <LinkButtonComponent
              to={AppUrl.PrivacyPolicy}
              buttonText={t('VIEW PRIVACY POLICY')}
            />
          </div>
        </div>
      </div>
      <div className={classes.sectionRight}>
        <img
          className={classes.sectionImage}
          src={privacyPolicy}
          alt="privacy policy"
        />
      </div>
    </section>
  );
}

function LandingSection7() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <section className={`${classes.section} column`}>
      <h2>{t('landing_page.sectionTitle7')}</h2>
      <div className={classes.sectionContent}>
        <LandingAccordions />
        <div className={classes.sectionButton}>
          <LinkButtonComponent to={AppUrl.FAQ} buttonText={t('READ OUR FAQ')} />
        </div>
      </div>
    </section>
  );
}

function LandingSection8() {
  const { t } = useTranslation();
  const classes = useStyles();

  const handleContactUs = () => {
    window.open('mailto:info@expungeassist.org');
  };

  return (
    <section className={`${classes.section}`} style={{ marginBottom: '24px' }}>
      <div className={classes.opportunitySection}>
        <h2>{t('landing_page.sectionTitle8')}</h2>
        <p>{t('landing_page.sectionParagraph8')}</p>
        <ButtonComponent
          onClick={() => handleContactUs()}
          buttonText={t('CONTACT US')}
        />
      </div>
    </section>
  );
}

function LandingPage() {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  return (
    <div>
      <div className={classes.backgroundBlock}>
        <div className={`${utilityClasses.widePage} ${classes.wideSection}`}>
          <LandingSection1 />
        </div>
      </div>

      <WaveBackground />

      <LandingSection2 />
      <LandingSection3 />
      <LandingSection4 />
      <LandingSection5 />
      <LandingSection6 />
      <LandingSection7 />
      <LandingSection8 />
    </div>
  );
}

export default LandingPage;
