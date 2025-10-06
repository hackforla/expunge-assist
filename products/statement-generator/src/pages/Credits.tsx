import React from 'react';
import { useTranslation } from 'react-i18next';

import { createStyles, makeStyles } from '@material-ui/core';

import { SvgIconComponent, Launch } from '@material-ui/icons';

import useUtilityStyles from 'styles/utilityStyles';

import DynamicText from 'components/DynamicText';

import creditsHeader from '../assets/creditsHeader.svg';
import sharingKnowledge from '../assets/faqDesktop.svg';
import error from '../assets/notFound.svg';
import editorial from '../assets/why-img.svg';
import collaboration from '../assets/almost-there-img.svg';
import confirmation from '../assets/confirmation.svg';
import privacyPolicy from '../assets/privacyPolicy.png';
import eaImage from '../assets/eaImage.png';
import multitasking from '../assets/landingWorkImg.svg';
import support101 from '../assets/affirmation-img.svg';
import report from '../assets/future-goals-img.svg';
import clearance from '../assets/aboutUs/courtroom.svg';
import teamwork from '../assets/aboutUs/teamwork.svg';
import partnership from '../assets/aboutUs/handshake.svg';
import colaboration from '../assets/aboutUs/collaboration.svg';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) =>
  createStyles({
    Header: {
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: palette.primary.lighter,
      marginBottom: '12px',

      [breakpoints.down('sm')]: {
        minHeight: '509px',
      },
    },
    HeaderContent: {
      maxWidth: '59rem',
      minWidth: '342px',
      width: '100%',
      margin: '45px 16px 54.64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      [breakpoints.down('md')]: {
        flexDirection: 'column',
        width: '100%',
        margin: '24px 16px',
        gap: '36px',
      },
    },
    HeaderText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: palette.primary.lighter,
      flex: '1 1 60%',
      marginRight: '36px',

      [breakpoints.down('md')]: {
        marginRight: 0,
        alignItems: 'center',
      },

      [breakpoints.down('sm')]: {
        gap: '24px',
      },
    },
    Heading: {
      fontSize: '34px',
      lineHeight: '51px',
      marginBotton: '16px',
      fontWeight: 700,
    },
    SubHeading: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 400,

      [breakpoints.down(breakpoints.values.lg)]: {
        textAlign: 'center',
      },
    },
    ImgContainer: {
      width: '100%',
      textAlign: 'center',
      flex: '1 1 40%',
      marginRight: '16px',
    },
    Img: {
      width: 'auto',
      maxWidth: '100%',
      minWidth: '182px',
    },
    Filter: {
      width: '100vw',
      marginBottom: '12px',
    },
    FilterContent: {
      maxWidth: '59rem',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto 54.64px',
      [breakpoints.down('md')]: {
        width: '100%',
        margin: '0 auto 54.64px',
        padding: '0 16px 16px',
      },
    },
    FilterLink: {
      background: 'none',
      color: 'inherit',
      border: 'none',
      padding: 0,
      font: 'inherit',
      cursor: 'pointer',
      outline: 'inherit',
      '&:hover': {
        color: '#9903FF',
        textDecoration: 'underline',
        cursor: 'pointer',
      },
      '&:focus': {
        color: '#9903FF',
        textDecoration: 'underline',
      },
    },
    FilterHeader: {
      maxWidth: '451px',
      minWidth: '290px',
      fontWeight: 'bolder',
      marginLeft: 'auto',
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'baseline',
      padding: '16px',
      gap: '16px',
      width: '100%',
    },
    CreditContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      flex: '50%',
      flexShrink: 1,
      gap: '16px',
      flexWrap: 'wrap',
    },
    CreditBox: {
      boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
      borderRadius: '8px',
      padding: '16px',
      width: '29rem',
      maxHeight: '13.606rem',
      minHeight: '13.606rem',
      alignContent: 'center',
    },
    creditFlex: {
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      objectFit: 'contain',
    },
    creditImgContainer: {
      maxWidth: '10rem',
      minWidth: '10rem',
      maxHeight: '12rem',
      objectFit: 'contain',
      display: 'block',
      margin: 'auto',
      '& img': {
        alignItems: 'center',
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
        display: 'block',
        margin: 'auto',
      },
    },
    creditIconContainer: {
      maxWidth: '10rem',
      minWidth: '10rem',
      objectFit: 'contain',
      margin: 'auto',
      '& svg': {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: 'auto',
      },
    },
    creditText: {
      '& h2': {
        fontWeight: 'bold',
        [breakpoints.down('md')]: {
          fontSize: '16px',
        },
      },
    },
    line: {
      margin: 'auto 0',
      fontWeight: 300,

      [breakpoints.down(breakpoints.values.md)]: {
        display: 'none',
      },
    },
    iconAttribution: {
      textAlign: 'center',
      margin: spacing(4, 0),

      [breakpoints.down('md')]: {
        margin: spacing(3, 0),
      },
    },
  })
);

interface CreditsObject {
  name: string;
  class: number;
  usedIn: string;
  img?: any;
  imgSize?: number;
  icon?: SvgIconComponent;
  iconColor?: string;
  artist: string;
  provider: string;
  providerLink: string;
  altText: string;
}

export const CreditObjects: CreditsObject[] = [
  {
    name: 'At the office',
    img: creditsHeader,
    class: 2,
    imgSize: 75,
    usedIn: 'Credits Page',
    artist: 'Unknown',
    providerLink: 'https://storyset.com/illustration/on-the-office/pana',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Sharing knowledge',
    img: sharingKnowledge,
    class: 2,
    imgSize: 144,
    usedIn: 'FAQ',
    artist: 'Katerina Limpitsouni',
    providerLink: 'https://undraw.co/search/sharing-knowledge',
    altText: '',
    provider: 'unDraw',
  },
  {
    name: '404 Error',
    img: error,
    class: 2,
    imgSize: 200,
    usedIn: '404 page',
    artist: 'Unknown',
    providerLink: 'https://storyset.com/illustration/404-error/cuate',
    provider: 'Storyset',
    altText: '404 error',
  },
  {
    name: 'Confirmation',
    img: confirmation,
    class: 2,
    imgSize: 75,
    usedIn: 'Download',
    artist: 'Unknown',
    providerLink:
      'https://www.freepik.com/free-vector/multi-device-targeting-concept-illustration_19949448.htm#&position=1&from_view=search&track=ais',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Data secure',
    img: privacyPolicy,
    class: 2,
    imgSize: 75,
    usedIn: 'Home page',
    artist: 'Unknown',
    providerLink: 'https://storyset.com/illustration/security/cuate',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Collaboration',
    img: collaboration,
    class: 2,
    imgSize: 75,
    usedIn: 'Preview and edit',
    artist: 'Unknown',
    providerLink: 'https://storyset.com/illustration/collaboration/rafiki',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Support 101',
    img: support101,
    class: 2,
    imgSize: 75,
    usedIn: 'Welcome',
    artist: 'Ola Maciejewska',
    providerLink: 'https://www.whoooa.rocks/',
    provider: 'Whoooa',
    altText: '',
  },
  {
    name: 'Editorial',
    img: editorial,
    class: 2,
    imgSize: 75,
    usedIn: 'Why',
    artist: 'Unknown',
    providerLink:
      'https://storyset.com/illustration/editorial-commision/rafiki',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Report',
    img: report,
    class: 2,
    imgSize: 75,
    usedIn: 'Future goals',
    artist: 'Unknown',
    providerLink: 'https://storyset.com/illustration/report/pana',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Multitasking',
    img: multitasking,
    class: 2,
    imgSize: 75,
    usedIn: 'Home page',
    artist: 'Unknown',
    providerLink: 'https://storyset.com/illustration/multitasking/cuate',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'EA mobile',
    img: eaImage,
    class: 2,
    imgSize: 75,
    usedIn: 'Home page',
    artist: 'Unknown',
    providerLink:
      'https://storyset.com/illustration/mobile-login/cuate#default&hide=&hide=false',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Clearance',
    img: clearance,
    class: 2,
    imgSize: 75,
    usedIn: 'About Us',
    artist: 'Unknown',
    provider: 'Storyset',
    providerLink:
      'https://www.freepik.com/premium-vector/lawyer-court-concept-illustration_35105574.htm#fromView=search&page=1&position=31&uuid=bfe51bc0-1a04-4c0c-8ff0-0c0147d736ba&new_detail=true&query=justice',
    altText: 'Lawyer addressing seated judge in court',
  },
  {
    name: 'Our team',
    img: teamwork,
    class: 2,
    imgSize: 75,
    usedIn: 'About Us',
    artist: 'Unknown',
    provider: 'Storyset',
    providerLink:
      'https://www.freepik.com/premium-vector/team-page-concept-illustration_10118067.htm#fromView=search&page=3&position=14&uuid=7d30ef21-b45d-4291-9c1a-c9eca8b3b904&query=team+page',
    altText: 'Group discussion in front of screen with in-work webpage',
  },
  {
    name: 'Partnership',
    img: partnership,
    class: 2,
    imgSize: 75,
    usedIn: 'About Us',
    artist: 'Unknown',
    provider: 'Storyset',
    providerLink: 'https://storyset.com/illustration/partnership/amico',
    altText: 'Two professionals shaking hands while standing on puzzle pieces',
  },
  {
    name: 'Team',
    img: colaboration,
    class: 2,
    imgSize: 75,
    usedIn: 'About Us',
    artist: 'Unknown',
    provider: 'Storyset',
    providerLink:
      'https://www.freepik.com/premium-vector/collab-concept-illustration_10791990.htm#fromView=search&page=1&position=35&uuid=f6e593bf-f9a1-47aa-b4e0-9904d4669537',
    altText: '',
  },
];

export const CreditsHeader: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContent}>
        <div className={classes.HeaderText}>
          <h2 className={classes.Heading}>{t('credits_page.page_header')}</h2>
          <p className={classes.SubHeading}>
            {t('credits_page.page_subheader')}
          </p>
        </div>
        <div className={classes.ImgContainer}>
          <img
            className={classes.Img}
            alt="Two people talking"
            src={creditsHeader}
          />
        </div>
      </div>
    </header>
  );
};

export const Filter: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const alphabetizedCredits = CreditObjects.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const FilterCards: React.FC = () => {
    const utilityClasses = useUtilityStyles();
    return (
      <div className={classes.CreditContainer}>
        {alphabetizedCredits.map((credit) => (
          <div className={classes.CreditBox} key={credit.name}>
            <div className={classes.creditFlex}>
              <div className={classes.creditText}>
                <h2>{credit.name}</h2>
                <p>
                  {t('credits_page.card_text.used_on')}: {credit.usedIn}
                </p>
                <p>
                  {t('credits_page.card_text.artist')}: {credit.artist}
                </p>
                <p>
                  {t('credits_page.card_text.provider')}:{' '}
                  <a href={credit.providerLink}>{credit.provider}</a>{' '}
                  <Launch
                    className={utilityClasses.externalLinkIcon}
                    fontSize="small"
                  />
                </p>
              </div>
              {credit.img && (
                <div className={classes.creditImgContainer}>
                  <img src={credit.img} alt={credit.altText} />
                </div>
              )}
              {credit.icon && (
                <div className={classes.creditIconContainer}>
                  <credit.icon
                    style={{ color: credit.iconColor || 'inherit' }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.Filter}>
      <div className={classes.FilterContent}>
        <p className={classes.iconAttribution}>
          <DynamicText i18nkey="credits_page.icon_attribution" />
        </p>
        <FilterCards />
      </div>
    </div>
  );
};

function Credits() {
  return (
    <>
      <CreditsHeader />
      <Filter />
    </>
  );
}

export default Credits;
