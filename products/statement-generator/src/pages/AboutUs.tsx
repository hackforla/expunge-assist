import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ButtonComponent from 'components/Button';

import ContentContainer from 'components-layout/ContentContainer';

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
      <h2>{t('about_us_page.page_header')}</h2>
      <h3>{t('about_us_page.title1')}</h3>
      <br />
      <p className={classes.paragraphStyle}>{t('about_us_page.paragraph1')}</p>
      <br />

      <ButtonComponent
        onClick={() => handleMeetTheTeam()}
        buttonText={t('Meet the Team')}
        className={classes.buttonStyle}
      />

      <br />
      <br />
      <h3>{t('about_us_page.title2')}</h3>
      <br />
      <p className={classes.paragraphStyle}>{t('about_us_page.paragraph2')}</p>
      <p className={classes.paragraphStyle}>
        <span className={classes.spanStyle}>
          This tool is provided for free by{' '}
          <Link
            underline="always"
            className={classes.linkStyle}
            href="https://www.hackforla.org/"
          >
            Hack for LA
          </Link>
          , a project under the nonprofit{' '}
          <Link
            underline="always"
            className={classes.linkStyle}
            href="https://www.civictechstructure.org/"
          >
            Civic Tech Structure
          </Link>
          .
        </span>
      </p>
      <br />
      <p className={classes.paragraphStyle}>{t('about_us_page.paragraph2c')}</p>
      <br />

      <h3>{t('about_us_page.title3')}</h3>
      <br />
      <ul className={classes.paragraphStyle}>
        <li className={classes.pointStyle}>
          <span className={classes.spanStyle}>
            {t('about_us_page.paragraph3_li1')}
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
        </li>
      </ul>
      <h3>{t('about_us_page.title4')}</h3>
      <br />
      <p className={classes.paragraphStyle}>{t('about_us_page.paragraph4')}</p>
      <br />
      <p className={classes.paragraphStyle}>{t('about_us_page.paragraph4b')}</p>
      <br />

      <ButtonComponent
        onClick={() => handleContactUs()}
        buttonText={t('Contact Us')}
        className={classes.buttonStyle}
      />

      <br />
    </ContentContainer>
  );
}
