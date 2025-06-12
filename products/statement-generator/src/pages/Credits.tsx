import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { createStyles, makeStyles } from '@material-ui/core';

import {
  SvgIconComponent,
  ArrowForwardRounded,
  ArrowBackRounded,
  CancelRounded,
  CheckCircleRounded,
  CloseRounded,
  CreateRounded,
  EmailRounded,
  ErrorRounded,
  ExpandMoreRounded,
  GetAppRounded,
  HelpRounded,
  InfoRounded,
  FileCopyRounded,
  MenuRounded,
  VisibilityRounded,
  Launch
} from '@material-ui/icons';

import useUtilityStyles from 'styles/utilityStyles';

import creditsHeader from '../assets/creditsHeader.svg';
import groupChat from '../assets/group-chat.jpg';
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

const useStyles = makeStyles(({ palette, breakpoints }) =>
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
      margin: '45px auto 54.64px',
      [breakpoints.down('md')]: {
        width: '100%',
        margin: '45px auto 54.64px',
        padding: '16px',
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
    artist: 'N/A',
    providerLink: 'https://storyset.com/illustration/on-the-office/pana',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Back Arrow',
    icon: ArrowBackRounded,
    class: 3,
    usedIn: 'Buttons',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Go back',
  },
  {
    name: 'Success',
    icon: CheckCircleRounded,
    iconColor: '#0AEBA0',
    class: 3,
    usedIn: 'Advice Page and Letter Generator',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Correct',
  },
  {
    name: 'Sharing Knowledge',
    img: sharingKnowledge,
    class: 2,
    imgSize: 144,
    usedIn: 'FAQ',
    artist: 'M/A',
    providerLink: 'https://undraw.co/search',
    altText: '',
    provider: 'Undraw',
  },
  {
    name: '404 Error',
    img: error,
    class: 2,
    imgSize: 200,
    usedIn: '404 page',
    artist: 'Cuate',
    providerLink: 'https://storyset.com/illustration/404-error/cuate',
    provider: 'Storyset',
    altText: '404 error',
  },
  {
    name: 'Multi-device targeting concept illustration',
    img: confirmation,
    class: 2,
    imgSize: 75,
    usedIn: 'Last Page Pop-Up',
    artist: 'Storyset',
    providerLink:
      'https://www.freepik.com/free-vector/multi-device-targeting-concept-illustration_19949448.htm#&position=1&from_view=search&track=ais',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Copy',
    icon: FileCopyRounded,
    class: 3,
    usedIn: 'Download Page',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Copy to clipboard',
  },
  {
    name: 'Data Secure',
    img: privacyPolicy,
    class: 2,
    imgSize: 75,
    usedIn: 'Landing Page',
    artist: 'N/A',
    providerLink: 'https://storyset.com/illustration/security/cuate',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Collaboration',
    img: collaboration,
    class: 2,
    imgSize: 75,
    usedIn: 'Almost There Pop-Up',
    artist: 'N/A',
    providerLink: 'https://storyset.com/illustration/collaboration/rafiki',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Support',
    img: support101,
    class: 2,
    imgSize: 75,
    usedIn: 'Landing Page',
    artist: 'N/A',
    providerLink: 'https://www.whoooa.rocks/',
    provider: 'Whoooa',
    altText: '',
  },
  {
    name: 'Research',
    img: editorial,
    class: 2,
    imgSize: 75,
    usedIn: 'Why Pop-Up',
    artist: 'N/A',
    providerLink:
      'https://storyset.com/illustration/editorial-commision/rafiki',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Email',
    icon: EmailRounded,
    class: 3,
    usedIn: 'Download Page',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Send in an email',
  },
  {
    name: 'Report',
    img: report,
    class: 2,
    imgSize: 75,
    usedIn: 'Future Goals Pop-Up',
    artist: 'N/A',
    providerLink: 'https://storyset.com/illustration/report/pana',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Cancel',
    icon: CancelRounded,
    iconColor: '#E87461',
    class: 3,
    usedIn: 'Advice Page',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Not correct',
  },
  {
    name: 'Pencil',
    icon: CreateRounded,
    class: 3,
    usedIn: 'Letter Generator',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Edit',
  },
  {
    name: 'Eye',
    class: 3,
    icon: VisibilityRounded,
    iconColor: '#9903FF',
    usedIn: 'Letter Generator',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Preview pages',
  },
  {
    name: 'Information Alert',
    icon: InfoRounded,
    class: 3,
    iconColor: '#2F6FED',
    usedIn: 'Download Page',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Information Alert',
  },
  {
    name: 'Error Alert',
    icon: ErrorRounded,
    class: 3,
    iconColor: '#2F6FED',
    usedIn: 'Before You Begin',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Error Alert',
  },
  {
    name: 'Help',
    icon: HelpRounded,
    class: 3,
    iconColor: '#2F6FED',
    usedIn: 'Letter Generator Popups',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Help',
  },
  {
    name: 'MultiTasking',
    img: multitasking,
    class: 2,
    imgSize: 75,
    usedIn: 'Landing Page',
    artist: 'N/A',
    providerLink: 'https://storyset.com/illustration/multitasking/cuate',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Next Arrow',
    class: 3,
    icon: ArrowForwardRounded,
    usedIn: 'Buttons',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Go forward',
  },
  {
    name: 'Open Menu',
    class: 3,
    icon: MenuRounded,
    usedIn: 'Mobile Menu',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Open menu',
  },
  {
    name: 'Close Menu',
    class: 3,
    icon: CloseRounded,
    usedIn: 'Mobile Menu',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Close menu',
  },
  {
    name: 'Expand',
    class: 3,
    icon: ExpandMoreRounded,
    usedIn: 'Landing Page and FAQ',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Expand section',
  },
  {
    name: 'Download',
    icon: GetAppRounded,
    class: 3,
    usedIn: 'Download Page',
    artist: 'Material Design',
    providerLink: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    altText: 'Download',
  },
  {
    name: 'EA Mobile',
    img: eaImage,
    class: 2,
    imgSize: 75,
    usedIn: 'Landing Page',
    artist: 'N/A',
    providerLink:
      'https://storyset.com/illustration/mobile-login/cuate#default&hide=&hide=false',
    provider: 'Storyset',
    altText: '',
  },
  {
    name: 'Group Chat',
    img: groupChat,
    class: 2,
    imgSize: 200,
    usedIn: 'FAQ',
    artist: 'N/A',
    provider: 'Freepik',
    providerLink:
      'https://www.freepik.com/free-vector/characters-people-chatting-through-smartphones_3226068.htm#query=people%20chatting&position=11&from_view=search&track=ais#position=11&query=people%20chatting',
    altText: 'People group chatting through smart phones',
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
  interface FilterButtonProps {
    name: string;
  }

  const [filter, setFilter] = useState<number>(1);
  const handleFilterClick = (e: any) => {
    if (e.target.value === 'All') {
      setFilter(1);
    } else if (e.target.value === 'Illustrations') {
      setFilter(2);
    } else if (e.target.value === 'Icons') {
      setFilter(3);
    }
  };

  const alphabetizedCredits = CreditObjects.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filteredCredits = alphabetizedCredits.filter((obj) => {
    if (filter === 2) {
      return obj.class === 2;
    }
    if (filter === 3) {
      return obj.class === 3;
    }
    return obj;
  });

  const FilterCards: React.FC = () => {
    const utilityClasses = useUtilityStyles();
    return (
      <div className={classes.CreditContainer}>
        {filteredCredits.map((credit) => (
          <div className={classes.CreditBox} key={credit.name}>
            <div className={classes.creditFlex}>
              <div className={classes.creditText}>
                <h2>{credit.name}</h2>
                <p>Used on: {credit.usedIn}</p>
                <p>Artist: {credit.artist}</p>
                <p>
                  Provider: <a href={credit.providerLink}>{credit.provider}</a> <Launch className={utilityClasses.externalLinkIcon} fontSize="small" />
                </p>
              </div>
              {credit.img && (
                <div className={classes.creditImgContainer}>
                  <img src={credit.img} alt={credit.altText} />
                </div>
              )}
              {credit.icon && (
                <div className={classes.creditIconContainer}>
                  <credit.icon style={{ color: credit.iconColor || 'inherit' }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  };

  const FilterButton = ({ name }: FilterButtonProps) => (
    <button
      className={classes.FilterLink}
      value={name}
      onClick={handleFilterClick}
    >
      {name}
    </button>
  );

  return (
    <div className={classes.Filter}>
      <div className={classes.FilterContent}>
        <div className={classes.FilterHeader}>
          <p>Filter:</p>
          <FilterButton name="All" />
          <span>|</span>
          <FilterButton name="Illustrations" />
          <span>|</span>
          <FilterButton name="Icons" />
        </div>
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
