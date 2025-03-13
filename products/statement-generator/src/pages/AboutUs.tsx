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
    link: {
      color: 'black',
      fontSize: '20px',
      lineHeight: 1.5,
      textDecoration: "underline",
    },
    buttonStyle: {
      width: 'fit-content',
      fontWeight: 'normal',
      marginTop: 10,
    },
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
      gap: 90,

      [breakpoints.down('xs')]: {
        width: '100%',
        padding: spacing(2),
      },
    },
    section: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '50px',

      [breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        gap: '36px',
        margin: 0,
      },
    },
    // sectionReverse: {
    //   [breakpoints.down('sm')]: {
    //     flexDirection: 'column-',
    //   },
    // },
    sectionTitle: {
      fontSize: 40,
      fontWeight: 500,
      boxShadow: 'none',
      border: 'none',
      margin: '34px 0 16px 0',

      [breakpoints.down('sm')]: {
        fontSize: 30,
        marginTop: '24px',
      },
    },
    subSectionTitle: {
      fontSize: 30,
      margin: '28px 0 12px 0',

      [breakpoints.down('sm')]: {
        fontSize: 25,
      },
    },
    textSection: {
      flex: '1 1 60%',
      paddingLeft: '26px',
      paddingRight: '26px',
    },
    text: {
      fontSize: '20px',
      lineHeight: 1.5,
      paddingTop: '12px',
      paddingBottom: '12px',
    },
    pointStyle: {
      fontSize: '10pt',
    },
    ulStyle: {
      lineHeight: '1.5',
      marginLeft: -5,
    },
    imgContainer: {
      textAlign: 'center',
      flex: '1 1 40%',

      [breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    img: {
      width: 'auto',
      maxWidth: '100%',
      minWidth: '182px',
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
          <p className={classes.sectionTitle}>{t('about_us_page.page_header')}</p>
          <p className={classes.text}>{t('about_us_page.page_subtitle')}</p>
        </div>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={collaboraton}
            alt="Four people looking at a laptop"
          />
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.textSection}>
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>{t('about_us_page.title1')}</h3>
          <p className={classes.text}>{t('about_us_page.paragraph1')}</p>
          <p className={classes.text}>{t('about_us_page.paragraph1b')}</p>
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
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>{t('about_us_page.title2')}</h3>
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
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>{t('about_us_page.title3')}</h3>
          <ul className={classes.ulStyle}>
            <li className={classes.pointStyle}>
              <span className={`${classes.text}`}>
                {t('about_us_page.paragraph3_li1')}
              </span>
              <Link href="https://safeandjust.org/interactivereport/repairing-the-road-to-redemption-in-california/#:~:text=Based%20on%20the%20experiences%20of,increase%20legal%20remedies%20and%20remove"
              target="_blank"
              className={classes.link}>
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
              <Link href="https://asj.allianceforsafetyandjustice.org/people-with-records-survey/"
              target="_blank"
              className={classes.link}>
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
          <h3 className={`${classes.sectionTitle} ${classes.subSectionTitle}`}>{t('about_us_page.title4')}</h3>
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
