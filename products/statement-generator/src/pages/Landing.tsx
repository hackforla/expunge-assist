import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, createStyles } from '@material-ui/core';

import { LinkButtonComponent } from 'components/Button';

import { AppUrl } from 'contexts/RoutingProps';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(({ globals, palette, breakpoints, spacing }) =>
  createStyles({
    backgroundBlock: {
      backgroundColor: palette.primary.lighter,
      zIndex: 1,
      position: 'relative',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '&$section ~ $section': {
        marginTop: spacing(6),
      },

      [breakpoints.up(breakpoints.values.md)]: {
        width: 400,
        '&$section:nth-child(odd)': {
          marginRight: 'auto',
        },
        '&$section:nth-child(even)': {
          alignSelf: 'flex-end',
          marginLeft: 'auto',
        },
      },

      [breakpoints.down(breakpoints.values.md)]: {
        maxWidth: globals.contentWidth,
        width: '100%',
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

    horizontalImage: {
      // desktop view
      width: '40%',
      marginLeft: 'auto',

      [breakpoints.down(breakpoints.values.md)]: {
        display: 'none',
      },
    },
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

    waveBg: {
      zIndex: -2,
      marginTop: '-5%',

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
      <div className={classes.backgroundBlock}>
        <div className={utilityClasses.widePage}>
          <section className={`${classes.section} ${classes.firstSection}`}>
            <div className={classes.firstSectionContent}>
              <h2>{t('landingPage.sectionTitle1')}</h2>
              <img
                className={classes.verticalImage}
                src="https://via.placeholder.com/300x200"
                alt="placeholder graphic"
              />
              <p>{t('landingPage.sectionParagraph1')}</p>
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
                src="https://via.placeholder.com/300x200"
                alt="placeholder graphic"
              />
            </div>
          </section>
        </div>
      </div>

      <WaveBackground />

      <div className={utilityClasses.widePage}>
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
