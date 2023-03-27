import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ButtonComponent, { LinkButtonComponent } from 'components/Button';

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
      <p>{t('about_us_page.paragraph1')}</p>
      <br />
      <ButtonComponent
        onClick={() => handleMeetTheTeam()}
        buttonText={t('Meet the Team')}
        className={classes.buttonStyle}
      />
      <br />
      <h3>{t('about_us_page.title2')}</h3>
      <br />
      <ul>
        <li className={classes.pointStyle}>
          <span className={classes.spanStyle}>
            Expunge Assist is part of{' '}
            <Link
              underline="always"
              className={classes.linkStyle}
              href="https://www.hackforla.org/"
            >
              Hack for LA
            </Link>{' '}
            and{' '}
            <Link
              underline="always"
              className={classes.linkStyle}
              href="https://codeforamerica.org/"
            >
              Code for America{' '}
            </Link>
          </span>
        </li>
        <li className={classes.pointStyle}>
          <span className={classes.spanStyle}>
            {t('about_us_page.paragraph2_li2')}
          </span>
        </li>
        <li className={classes.pointStyle}>
          <span className={classes.spanStyle}>
            {t('about_us_page.paragraph2_li3')}
          </span>
        </li>
      </ul>
      <p>
        <Link
          underline="always"
          className={classes.linkStyle}
          href="https://codeforamerica.org/programs/criminal-justice/automatic-record-clearance/"
        >
          *source
        </Link>
      </p>
      <h3>{t('about_us_page.title3')}</h3>
      <br />
      <ul>
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
      <p>{t('about_us_page.paragraph4')}</p>
      <br />
      <p>{t('about_us_page.paragraph4b')}</p>
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
