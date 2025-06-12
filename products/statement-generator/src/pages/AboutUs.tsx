import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ButtonComponent from 'components/Button';
import DynamicText from 'components/DynamicText';

import collaboraton from '../assets/aboutUs/collaboration.svg';
import mobile from '../assets/aboutUs/mobile.svg';
import teamwork from '../assets/aboutUs/teamwork.svg';
import courtroom from '../assets/aboutUs/courtroom.svg';
import handshake from '../assets/aboutUs/handshake.svg';

const useStyles = makeStyles(({ spacing, breakpoints }) =>
  createStyles({
    pageContainer: {
      width: '100%',
      paddingBottom: spacing(12),
      margin: 'auto',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      gap: 94,

      [breakpoints.down('sm')]: {
        gap: 24,
        paddingBottom: spacing(7),
      },
    },
    section: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '50px',
      maxWidth: '980px',
      margin: 'auto',

      [breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '24px 16px 24px 16px',
        gap: 0,
      },
    },
    heroBg: {
      width: '100%',
      backgroundColor: '#F7EBFF',
      paddingTop: spacing(9),
      paddingBottom: spacing(9),

      [breakpoints.down('md')]: {
        paddingTop: spacing(1),
        paddingBottom: spacing(3),
      },
    },
    sectionTitle: {
      fontWeight: 500,
      margin: '34px 0 24px 0',

      [breakpoints.down('md')]: {
        margin: '0 0 0 0',
      },
    },
    subSectionTitle: {
      margin: '28px 0 0 0',

      [breakpoints.down('md')]: {
        margin: '22px 0 8px 0',
      },
    },
    textSection: {
      flex: '1 1 60%',
      padding: '0 2% 0 2%',

      [breakpoints.down('md')]: {
        padding: 0,
        width: '100%',
      },
    },
    text: {
      fontSize: 16,
      fontWeight: 200,
      lineHeight: 1.5,
      paddingTop: '36px',

      [breakpoints.down('md')]: {
        paddingTop: 0,

        '& + p': {
          paddingTop: '24px',
        },
      },
    },
    headerText: {
      fontWeight: 200,
      lineHeight: 1.5,
      marginBottom: '12px',

      [breakpoints.down('md')]: {
        lineHeight: 1.65,
        marginTop: '24px',
        marginBottom: '24px',
      },
    },
    link: {
      color: 'black',
      fontSize: 16,
      lineHeight: 1.5,
      textDecoration: 'underline',
    },
    ulStyle: {
      lineHeight: '1.5',
      margin: '36px 0 0 -5px',

      [breakpoints.down('md')]: {
        margin: '24px 0 0 0',
        lineHeight: '1.2',
      },
    },
    headImgContainer: {
      textAlign: 'center',
      flex: '1 1 40%',

      [breakpoints.down('md')]: {
        width: '100%',
      },
    },
    imgContainer: {
      textAlign: 'center',
      flex: '1 1 40%',

      [breakpoints.down('md')]: {
        display: 'none',
      },
    },
    mobileImgContainer: {
      display: 'none',

      [breakpoints.down('md')]: {
        display: 'flex',
        margin: 'auto',
        paddingTop: '24px',
        paddingBottom: '36px',
      },
    },
    img: {
      width: 'auto',
      maxWidth: '100%',
      minWidth: '182px',
      [breakpoints.down('md')]: {
        width: '80%',
        margin: 'auto',
        maxWidth: '400px',
      },
    },
    buttonStyle: {
      width: 'fit-content',
      fontWeight: 'normal',
      // fontSize: 20,
      marginTop: 36,
      padding: '12px 16px',
      lineHeight: '1.5',
      borderRadius: 24,

      [breakpoints.down('md')]: {
        display: 'flex',
        margin: 'auto',
        marginTop: '28px',
        width: '80%',
      },
      [breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    contactButton: {
      marginTop: 28,
    },
  })
);

export default function AboutUs() {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleMeetTheTeam = () => {
    window.open('https://www.hackforla.org/projects/expunge-assist');
  };

  const handleContactUs = () => {
    window.open('mailto:expungeassist@hackforla.org');
  };
  return (
    <div className={classes.pageContainer}>
      <div className={classes.heroBg}>
        <div className={classes.section}>
          <div className={classes.textSection}>
            <h2 className={classes.sectionTitle}>
              {t('about_us_page.page_header')}
            </h2>
            <p className={classes.headerText}>
              {t('about_us_page.page_subtitle')}
            </p>
          </div>
          <div className={classes.headImgContainer}>
            <img
              className={classes.img}
              src={collaboraton}
              alt="Four people looking at a laptop"
            />
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.textSection}>
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>
            {t('about_us_page.title1')}
          </h3>
          <div className={classes.mobileImgContainer}>
            <img
              className={classes.img}
              src={mobile}
              alt="Expunge Assist website on a mobile phone"
            />
          </div>
          <p className={classes.text}>{t('about_us_page.paragraph1')}</p>
          <p className={classes.text}>
            <span className={`${classes.text}`}>
              <DynamicText i18nkey="about_us_page.paragraph1b" />
            </span>
          </p>
          <p className={classes.text}>{t('about_us_page.paragraph1c')}</p>
        </div>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={mobile}
            alt="A team looking at a large screen"
          />
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={teamwork}
            alt="Four people looking at a laptop"
          />
        </div>
        <div className={classes.textSection}>
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>
            {t('about_us_page.title2')}
          </h3>
          <div className={classes.mobileImgContainer}>
            <img
              className={classes.img}
              src={teamwork}
              alt="Four people looking at a laptop"
            />
          </div>
          <p className={classes.text}>{t('about_us_page.paragraph2')}</p>
          <ButtonComponent
            onClick={() => handleMeetTheTeam()}
            buttonText={t('Meet the Team')}
            className={classes.buttonStyle}
          />
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.textSection}>
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>
            {t('about_us_page.title3')}
          </h3>
          <div className={classes.mobileImgContainer}>
            <img
              className={classes.img}
              src={courtroom}
              alt="A lawyer speaking to a judge"
            />
          </div>
          <ul className={classes.ulStyle}>
            <li>
              <span className={`${classes.text}`}>
                <DynamicText i18nkey="about_us_page.paragraph3_li1" />
              </span>
            </li>
            <li>
              <span className={`${classes.text}`}>
                <DynamicText i18nkey="about_us_page.paragraph3_li2" />
              </span>
            </li>
            <li>
              <span className={`${classes.text}`}>
                <DynamicText i18nkey="about_us_page.paragraph3_li3" />
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={courtroom}
            alt="A lawyer speaking to a judge"
          />
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={handshake}
            alt="Two people shaking hands"
          />
        </div>
        <div className={classes.textSection}>
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>
            {t('about_us_page.title4')}
          </h3>
          <div className={classes.mobileImgContainer}>
            <img
              className={classes.img}
              src={handshake}
              alt="Two people shaking hands"
            />
          </div>
          <p className={classes.text}>{t('about_us_page.paragraph4')}</p>
          <p className={classes.text}>{t('about_us_page.paragraph4b')}</p>
          <ButtonComponent
            onClick={() => handleContactUs()}
            buttonText={t('Contact Us')}
            className={`${classes.buttonStyle} ${classes.contactButton}`}
          />
        </div>
      </div>
    </div>
  );
}
