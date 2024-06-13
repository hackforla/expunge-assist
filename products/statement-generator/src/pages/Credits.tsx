import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { createStyles, makeStyles } from '@material-ui/core';
import creditsHeader from '../assets/creditsHeader.svg';
import groupChat from '../assets/credits-assets/group-chat.jpg';
import sharingKnowledge from '../assets/faqDesktop.svg';
import error from '../assets/notFound.svg';
import editorial from '../assets/why-img.svg';
import collaboration from '../assets/almost-there-img.svg';
import backArrow from '../assets/credits-assets/back-arrow.svg';
import check from '../assets/credits-assets/check.svg';
import confirmation from '../assets/credits-assets/confirmation.svg';
import copy from '../assets/credits-assets/copy.svg';
import privacyPolicy from '../assets/privacyPolicy.png';
import docX from '../assets/credits-assets/docx.svg';
import download from '../assets/credits-assets/download.svg';
import eaImage from '../assets/eaImage.png';
import multitasking from '../assets/landingWorkImg.svg';
import eye from '../assets/credits-assets/eye.svg';
import email from '../assets/credits-assets/email.svg';
import pencil from '../assets/credits-assets/pencil.svg';
import informationAlert from '../assets/credits-assets/information-alert.svg';
import support101 from '../assets/affirmation-img.svg';
import report from '../assets/future-goals-img.svg';
import cancel from '../assets/credits-assets/cancel.png';
import nextArrow from '../assets/credits-assets/next-arrow.svg';

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
  used_in: string;
  img: any;
  img_size: number;
  artist: string;
  provider: string;
  provider_link: string;
  alt_text: string;
}

export const CreditObjects: CreditsObject[] = [
  {
    name: 'At the office',
    img: creditsHeader,
    class: 2,
    img_size: 75,
    used_in: 'Credits Page',
    artist: 'N/A',
    provider_link: 'https://storyset.com/illustration/on-the-office/pana',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'Back Arrow',
    img: backArrow,
    class: 3,
    img_size: 75,
    used_in: 'Buttons',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Go back',
  },
  {
    name: 'Success',
    img: check,
    class: 3,
    img_size: 75,
    used_in: 'Advice Page and Letter Generator',
    artist: 'N/A',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Correct',
  },
  {
    name: 'Sharing Knowledge',
    img: sharingKnowledge,
    class: 2,
    img_size: 144,
    used_in: 'FAQ',
    artist: 'M/A',
    provider_link: 'https://undraw.co/search',
    alt_text: '',
    provider: 'Undraw',
  },
  {
    name: '404 Error',
    img: error,
    class: 2,
    img_size: 200,
    used_in: '404 page',
    artist: 'Cuate',
    provider_link: 'https://storyset.com/illustration/404-error/cuate',
    provider: 'Storyset',
    alt_text: '404 error',
  },
  {
    name: 'Multi-device targeting concept illustration',
    img: confirmation,
    class: 2,
    img_size: 75,
    used_in: 'Last Page Pop-Up',
    artist: 'Storyset',
    provider_link:
      'https://www.freepik.com/free-vector/multi-device-targeting-concept-illustration_19949448.htm#&position=1&from_view=search&track=ais',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'Copy',
    img: copy,
    class: 3,
    img_size: 75,
    used_in: 'Download Page',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Copy to clipboard',
  },
  {
    name: 'Data Secure',
    img: privacyPolicy,
    class: 2,
    img_size: 75,
    used_in: 'Landing Page',
    artist: 'N/A',
    provider_link: 'https://storyset.com/illustration/security/cuate',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'DOCX File',
    img: docX,
    class: 3,
    img_size: 75,
    used_in: 'Download Page',
    artist: 'Unknown',
    provider_link: 'https://expungeassist.com/credits/',
    provider: 'Unknown',
    alt_text: 'Download word document',
  },
  {
    name: 'Collaboration',
    img: collaboration,
    class: 2,
    img_size: 75,
    used_in: 'Almost There Pop-Up',
    artist: 'N/A',
    provider_link: 'https://storyset.com/illustration/collaboration/rafiki',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'Support',
    img: support101,
    class: 2,
    img_size: 75,
    used_in: 'Landing Page',
    artist: 'N/A',
    provider_link: 'https://www.whoooa.rocks/',
    provider: 'Whoooa',
    alt_text: '',
  },
  {
    name: 'Research',
    img: editorial,
    class: 2,
    img_size: 75,
    used_in: 'Why Pop-Up',
    artist: 'N/A',
    provider_link:
      'https://storyset.com/illustration/editorial-commision/rafiki',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'Email',
    img: email,
    class: 3,
    img_size: 75,
    used_in: 'Download Page',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Send in an email',
  },
  {
    name: 'Report',
    img: report,
    class: 2,
    img_size: 75,
    used_in: 'Future Goals Pop-Up',
    artist: 'N/A',
    provider_link: 'https://storyset.com/illustration/report/pana',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'Cancel',
    img: cancel,
    class: 3,
    img_size: 75,
    used_in: 'Advice Page',
    artist: 'N/A',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Not correct',
  },
  {
    name: 'Pencil',
    img: pencil,
    class: 3,
    img_size: 75,
    used_in: 'Letter Generator Edit Pages',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Edit',
  },
  {
    name: 'Eye',
    img: eye,
    class: 3,
    img_size: 75,
    used_in: 'Preview Pages in Letter Generator',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Preview pages',
  },
  {
    name: 'Information Alert',
    img: informationAlert,
    class: 3,
    img_size: 75,
    used_in: 'Download Page',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Information Alert',
  },
  {
    name: 'MultiTasking',
    img: multitasking,
    class: 2,
    img_size: 75,
    used_in: 'Landing Page',
    artist: 'N/A',
    provider_link: 'https://storyset.com/illustration/multitasking/cuate',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'Next Arrow',
    img: nextArrow,
    class: 3,
    img_size: 75,
    used_in: 'Buttons',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Go forward',
  },

  {
    name: 'Download',
    img: download,
    class: 3,
    img_size: 75,
    used_in: 'Download Page',
    artist: 'Material Design',
    provider_link: 'https://pictogrammers.com/library/mdi/',
    provider: 'Pictogrammers',
    alt_text: 'Download',
  },
  {
    name: 'EA Mobile',
    img: eaImage,
    class: 2,
    img_size: 75,
    used_in: 'Landing Page',
    artist: 'N/A',
    provider_link:
      'https://storyset.com/illustration/mobile-login/cuate#default&hide=&hide=false',
    provider: 'Storyset',
    alt_text: '',
  },
  {
    name: 'Group Chat',
    img: groupChat,
    class: 2,
    img_size: 200,
    used_in: 'FAQ',
    artist: 'M/A',
    provider: 'Freepik',
    provider_link:
      'https://www.freepik.com/free-vector/characters-people-chatting-through-smartphones_3226068.htm#query=people%20chatting&position=11&from_view=search&track=ais#position=11&query=people%20chatting',
    alt_text: 'People group chatting through smart phones',
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

  const filteredCredits = CreditObjects.filter((obj) => {
    if (filter === 2) {
      return obj.class === 2;
    }
    if (filter === 3) {
      return obj.class === 3;
    }
    return obj;
  });

  const FilterCards: React.FC = () => {
    return (
      <div className={classes.CreditContainer}>
        {filteredCredits.map((credit) => {
          return (
            <div className={classes.CreditBox}>
              <div className={classes.creditFlex}>
                <div className={classes.creditText}>
                  <h2>{credit.name}</h2>
                  <p>Used on: {credit.used_in}</p>
                  <p>Artist: {credit.artist}</p>
                  <p>
                    Provider:{' '}
                    <a href={credit.provider_link}>{credit.provider}</a>
                  </p>
                </div>
                <div className={classes.creditImgContainer}>
                  <img src={credit.img} alt={credit.alt_text} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const FilterButton = ({ name }: FilterButtonProps) => {
    return (
      <button
        className={classes.FilterLink}
        value={name}
        onClick={handleFilterClick}
      >
        {name}
      </button>
    );
  };

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
