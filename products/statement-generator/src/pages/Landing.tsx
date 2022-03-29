import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

import { LinkButtonComponent } from 'components/Button';

import { AppUrl } from 'contexts/RoutingProps';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(({ globals, palette, breakpoints, spacing }) =>
  createStyles({
    widePage: {
      maxWidth: globals.wideWidth,
      padding: spacing(3),
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
    section: {
      width: 400,

      [breakpoints.down(breakpoints.values.md)]: {
        width: '100%',
      },

      '&$section ~ $section': {
        marginTop: spacing(4),
      },
      '&$section:nth-child(even)': {
        alignSelf: 'flex-end',
      },
    },

    primaryContainer: {
      backgroundColor: palette.primary.lighter,
      zIndex: 1,
      position: 'relative',
    },
    primarySection: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',

      '&> div': {
        width: 400,
      },
    },
    primaryImage: {
      width: '40%',
      marginLeft: 'auto',
    },

    waveBg: {
      height: 100,
      zIndex: -2,
      marginTop: -80,
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

interface ILandingSection {
  header: string;
  paragraph: string;
  children?: React.ReactNode;
  className?: string;
}

function LandingSection({
  header,
  paragraph,
  children,
  className = '',
}: ILandingSection) {
  const classes = useStyles();
  return (
    <section className={`${classes.section} ${className}`}>
      <div>
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
      {children}
    </section>
  );
}

function LandingPage() {
  const { t } = useTranslation();
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  return (
    <div>
      <div className={classes.primaryContainer}>
        <div className={classes.widePage}>
          <section className={`${classes.section} ${classes.primarySection}`}>
            <div>
              <h2>{t('landingPage.sectionTitle1')}</h2>
              <p>{t('landingPage.sectionParagraph1')}</p>

              <div className={utilityClasses.buttonContainer}>
                <LinkButtonComponent
                  to={AppUrl.Welcome}
                  buttonText={t('button.startNow')}
                />
              </div>
            </div>

            <div className={classes.primaryImage}>
              <img
                src="https://via.placeholder.com/150"
                alt="placeholder graphic"
              />
            </div>
          </section>
        </div>
      </div>

      <WaveBackground />

      <div className={classes.widePage}>
        <LandingSection
          header={t('landingPage.sectionTitle2')}
          paragraph={t('landingPage.sectionParagraph2')}
        />
        <LandingSection
          header={t('landingPage.sectionTitle3')}
          paragraph={t('landingPage.sectionParagraph3')}
        />
        <LandingSection
          header={t('landingPage.sectionTitle4')}
          paragraph={t('landingPage.sectionParagraph4')}
        />
      </div>
    </div>
  );
}

export default LandingPage;
