import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import ContentContainer from 'components-layout/ContentContainer';
import ButtonComponent from 'components/Button';
import collaboraton from '../assets/aboutUs/collaboration.svg';
import mobile from '../assets/aboutUs/mobile.svg';
import teamwork from '../assets/aboutUs/teamwork.svg';
import courtroom from '../assets/aboutUs/courtroom.svg';
import handshake from '../assets/aboutUs/handshake.svg';


const useStyles = makeStyles(() =>
  createStyles({
    linkStyle: {
      color: 'black',
      textDecorationColor: 'gray',
    },
    buttonStyle: {
      width: 'fit-content',
      fontWeight: 'normal',
    },
    pointStyle: {
      fontSize: '8pt',
    },
    spanStyle: {
      fontSize: '12pt',
    },
    paragraphStyle: {
      lineHeight: '1.5',
    },
    imgContainer: {
      width: '100%',
      textAlign: 'center',
      flex: '1 1 40%',
      marginRight: '16px',
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
    <ContentContainer>
      {/* header section */}
      <div>
        <div>
          <h2>{t('about_us_page.page_header')}</h2>
          <p>{t('about_us_page.page_subtitle')}</p>
        </div>
        <div>
        <img
            className={classes.img}
            src={collaboraton}
            alt="Four people looking at a laptop"
          />
        </div>
      </div>


      {/* section 1: what section */}
      <div>
        <div>
          <h2>{t('about_us_page.title1')}</h2>
          <p>{t('about_us_page.paragraph1')}</p>
          <p>{t('about_us_page.paragraph1b')}</p>
          <p>{t('about_us_page.paragraph1c')}</p>
        </div>
        <div>
        <img
            className={classes.img}
            src={mobile}
            alt="A team looking at a large screen"
          />
        </div>
      </div>


      {/* section 2: who section */}
      <div>
        <div>
          <img
            className={classes.img}
            src={teamwork}
            alt="Four people looking at a laptop"
          />
        </div>
        <div>
          <h2>{t('about_us_page.title2')}</h2>
          <p>{t('about_us_page.paragraph2')}</p>
          <ButtonComponent
            onClick={() => handleMeetTheTeam()}
            buttonText={t('Meet the Team')}
            className={classes.buttonStyle}
          />
        </div>
      </div>


      {/* section 3: why section */}
      <div>
        <div>
          <h2>{t('about_us_page.title3')}</h2>
          <ul className={classes.paragraphStyle}>
            <li className={classes.pointStyle}>
              <span className={classes.spanStyle}>
                {t('about_us_page.paragraph3_li1')}
              </span>
              <span className={classes.spanStyle}>
                {t('about_us_page.paragraph3_li1_link')}
              </span>
            </li>
            <li className={classes.pointStyle}>
              <span className={classes.spanStyle}>
                {t('about_us_page.paragraph3_li2')}
              </span>
            </li>
            <li className={classes.pointStyle}>
              <span className={classes.spanStyle}>
                {t('about_us_page.paragraph3_li3')}
              </span>
              <span className={classes.spanStyle}>
                {t('about_us_page.paragraph3_li3_link')}
              </span>
            </li>
          </ul>
        </div>
        <div>
          <img
            className={classes.img}
            src={courtroom}
            alt="A lawyer speaking to a judge"
          />
        </div>
      </div>



      {/* section 4: partner section */}
      <div>
        <div>
          <img
            className={classes.img}
            src={handshake}
            alt="Two people shaking hands"
          />
        </div>
        <div>
          <h2>{t('about_us_page.title4')}</h2>
          <p>{t('about_us_page.paragraph4')}</p>
          <p>{t('about_us_page.paragraph4b')}</p>
        </div>
        <ButtonComponent
            onClick={() => handleContactUs()}
            buttonText={t('Contact Us')}
            className={classes.buttonStyle}
          />
      </div>
    </ContentContainer>
  );
}
