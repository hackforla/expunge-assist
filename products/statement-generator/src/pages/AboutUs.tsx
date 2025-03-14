import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ButtonComponent from 'components/Button';
import collaboraton from '../assets/aboutUs/collaboration.svg';
import mobile from '../assets/aboutUs/mobile.svg';
import teamwork from '../assets/aboutUs/teamwork.svg';
import courtroom from '../assets/aboutUs/courtroom.svg';
import handshake from '../assets/aboutUs/handshake.svg';

const useStyles = makeStyles(({ spacing, breakpoints }) =>
  createStyles({
    pageContainer: {
      maxWidth: '72%',
      minWidth: '300px',
      width: '100%',
      padding: spacing(3),
      paddingTop: spacing(9),
      paddingBottom: spacing(9),
      margin: 'auto',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
      gap: 94,

      [breakpoints.down('sm')]: {
        maxWidth: '90%',
        padding: 0,
        gap: 38,
        paddingBottom: spacing(7),
      },
    },
    section: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '50px',

      [breakpoints.down('md')]: {
        flexDirection: 'column',
        width: '100%',
        gap: '36px',
        margin: 0,
      },
    },
    sectionTitle: {
      fontSize: 40,
      fontWeight: 600,
      boxShadow: 'none',
      border: 'none',
      margin: '34px 0 16px 0',

      [breakpoints.down('md')]: {
        fontSize: '2em',
        marginTop: '24px',
      },
    },
    subSectionTitle: {
      fontSize: 30,
      margin: '28px 0 12px 0',

      [breakpoints.down('md')]: {
        fontSize: 23,
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
      fontSize: '20px',
      fontWeight: 200,
      lineHeight: 1.5,
      paddingTop: '8px',
      paddingBottom: '8px',

      [breakpoints.down('md')]: {
        fontSize: 16,
      },
    },
    headerText: {
      fontSize: '20px',
      fontWeight: 200,
      lineHeight: 1.5,
      paddingTop: '12px',
      paddingBottom: '12px',

      [breakpoints.down('md')]: {
        fontSize: 20,
        lineHeight: 1.65,
        marginTop: '6px',
      },
    },
    link: {
      color: 'black',
      fontSize: '20px',
      lineHeight: 1.5,
      textDecoration: 'underline',

      [breakpoints.down('md')]: {
        fontSize: 16,
      },
    },
    pointStyle: {
      fontSize: '10pt',
    },
    ulStyle: {
      lineHeight: '1.5',
      marginLeft: -5,

      [breakpoints.down('md')]: {
        marginLeft: 0,
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
        // width: '100%',
        display: 'none',
      },
    },
    mobileImgContainer: {
      display: 'none',

      [breakpoints.down('md')]: {
        display: 'flex',
        margin: 'auto',
        paddingTop: spacing(2),
        paddingBottom: spacing(2),
      },
    },
    img: {
      width: 'auto',
      maxWidth: '100%',
      minWidth: '182px',
      [breakpoints.down('md')]: {
        width: '80%',
        margin: 'auto',
      },
    },
    buttonStyle: {
      width: 'fit-content',
      fontWeight: 'normal',
      marginTop: 10,

      [breakpoints.down('md')]: {
        display: 'flex',
        margin: 'auto',
        width: '80%',
        fontSize: 18,
        marginTop: 16,
        paddingTop: spacing(2),
        paddingBottom: spacing(2),
      },
      [breakpoints.down('sm')]: {
        width: '100%',
      },
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
    window.open('mailto:info@expungeassist.org');
  };
  return (
    <div className={classes.pageContainer}>
      <div className={classes.section}>
        <div className={classes.textSection}>
          <p className={classes.sectionTitle}>
            {t('about_us_page.page_header')}
          </p>
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
              {t('about_us_page.paragraph1b_a')}
            </span>
            <Link
              href="https://www.hackforla.org/"
              target="_blank"
              className={classes.link}
            >
              {t('about_us_page.paragraph1b_li1')}
            </Link>
            <span className={`${classes.text}`}>
              {t('about_us_page.paragraph1b_b')}
            </span>
            <Link
              href="https://www.civictechstructure.org/"
              target="_blank"
              className={classes.link}
            >
              {t('about_us_page.paragraph1b_li2')}
            </Link>
            <span className={`${classes.text}`}>
              {t('about_us_page.paragraph1b_c')}
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
            <li className={classes.pointStyle}>
              <span className={`${classes.text}`}>
                {t('about_us_page.paragraph3_li1')}
              </span>
              <Link
                href="https://safeandjust.org/interactivereport/repairing-the-road-to-redemption-in-california/#:~:text=Based%20on%20the%20experiences%20of,increase%20legal%20remedies%20and%20remove"
                target="_blank"
                className={classes.link}
              >
                {t('about_us_page.paragraph3_li1_link')}
              </Link>
            </li>
            <li className={classes.pointStyle}>
              <span className={`${classes.text}`}>
                {t('about_us_page.paragraph3_li2')}
              </span>
            </li>
            <li className={classes.pointStyle}>
              <span className={`${classes.text}`}>
                {t('about_us_page.paragraph3_li3')}
              </span>
              <Link
                href="https://asj.allianceforsafetyandjustice.org/people-with-records-survey/"
                target="_blank"
                className={classes.link}
              >
                {t('about_us_page.paragraph3_li3_link')}
              </Link>
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
            className={classes.buttonStyle}
          />
        </div>
      </div>
    </div>
  );
}
