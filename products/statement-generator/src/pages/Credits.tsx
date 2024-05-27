import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { createStyles, makeStyles } from '@material-ui/core';
import creditsHeader from '../assets/creditsHeader.svg';
import groupChat from '../assets/credits-assets/group-chat.jpg';
import sharingKnowledge from '../assets/credits-assets/sharing-knowledge.svg';
import error from '../assets/credits-assets/404error.svg';
import collaboration from '../assets/credits-assets/almost-there.svg';
import atTheOffice from '../assets/credits-assets/at-the-office.svg';
import backArrow from '../assets/credits-assets/back-arrow.svg';
import check from '../assets/credits-assets/check.svg';
import confirmation from '../assets/credits-assets/confirmation.svg';
import copy from '../assets/credits-assets/Copy.svg';
import dataSecure from '../assets/credits-assets/data-secure.svg';
import docX from '../assets/credits-assets/docx.svg';
import download from '../assets/credits-assets/Download.svg';
import eaMobile from '../assets/credits-assets/ea-mobile.svg';
import multitasking from '../assets/credits-assets/Multitasking.svg';
import eye from '../assets/credits-assets/Eye.svg';
import email from '../assets/credits-assets/Email.svg';
import pencil from '../assets/credits-assets/Pencil.svg';
import support101 from '../assets/credits-assets/support-101.svg';
import report from '../assets/credits-assets/Report.svg';

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
      maxWidth: '945px',
      minWidth: '342px',
      width: '100%',
      margin: '45px auto 54.64px',
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
      backgroundColor: 'red',
    },
    FilterContent: {
      maxWidth: '65rem',
      display: 'flex',
      flexDirection: 'column',
      margin: '45px auto 54.64px',
      backgroundColor: 'yellow',
      [breakpoints.down('md')]: {
        width: '100%',
        margin: '45px auto 54.64px',
        padding: '16px',
        gap: '36px',
        backgroundColor: 'teal',
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
      backgroundColor: 'lightblue',
    },
    CreditContainer: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'salmon',
      flexDirection: 'row',
      gap: '16px',
      flexWrap: 'wrap',
    },
    CreditBox: {
      boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '24px',
      marginBottom: '40px',
      maxWidth: '32rem',
      minWidth: '21.5rem',
      height: '217.69px',
      flex: '50%',
    },
    creditFlex: {
      display: 'flex',
      flexDirection: 'row',
      gap: '32px',
      justifyContent: 'center',
      alignItems: 'center',
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
  used_in: string;
  img: any;
  artist: string;
  provider: string;
  provider_link: string;
  alt_text: string;
}

export const CreditObjects: CreditsObject[] = [
  {
    name: 'Group Chat',
    img: groupChat,
    used_in: 'FAQ',
    artist: 'M/A',
    provider: 'Freepik',
    provider_link:
      'https://www.freepik.com/free-vector/characters-people-chatting-through-smartphones_3226068.htm#query=people%20chatting&position=11&from_view=search&track=ais#position=11&query=people%20chatting',
    alt_text: 'People group chatting through smart phones',
  },
  {
    name: 'Sharing Knowledge',
    img: sharingKnowledge,
    used_in: 'FAQ',
    artist: 'M/A',
    provider_link: 'https://undraw.co/search',
    alt_text: '',
    provider: 'Undraw',
  },
  {
    name: '404 Error',
    img: error,
    used_in: '404 page',
    artist: 'Cuate',
    provider_link: 'https://storyset.com/illustration/404-error/cuate',
    provider: 'Storyset',
    alt_text: '404 error',
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

  const handleFilterClick = (e: any) => {
    const [filter, setFilter] = useState<Number>(1);
    if (e.target.value === 'All') {
      setFilter(1);
    } else if (e.target.value === 'Illustrations') {
      setFilter(2);
    } else if (e.target.value === 'Icons') {
      setFilter(3);
    }
  };

  const FilterCards: React.FC = () => {
    return (
      <div className={classes.CreditContainer}>
        {CreditObjects.map((credit) => {
          return (
            <div className={classes.CreditBox}>
              <div className={classes.creditFlex}>
                <div>
                  <h2>{credit.name}</h2>
                  <p>Used on: {credit.used_in}</p>
                  <p>Artist: {credit.artist}</p>
                  <p>
                    Provider: <a href={credit.provider}>{credit.provider}</a>
                  </p>
                </div>
                <div>
                  <img src={credit.img} alt={credit.alt_text} width={144} />
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
