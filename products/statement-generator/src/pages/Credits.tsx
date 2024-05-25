import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { createStyles, makeStyles } from '@material-ui/core';
import creditsHeader from '../assets/creditsHeader.svg';

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
      maxWidth: '945px',
      minWidth: '342px',
      width: '100%',
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
      gap: '16px',
      width: '100%',
      backgroundColor: 'lightblue',
    },

    CreditBox: {
      boxShadow: '0 4px 4px rgb(0 0 0 / 25%)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '24px',
      marginBottom: '40px',
      width: '32rem',
      height: '217.69px',
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
  artist: string;
  provider: string;
  alt_text: string;
}

export const CreditObjects: CreditsObject[] = [
  {
    name: 'Group Chat',

    used_in: 'FAQ',
    artist: 'M/A',
    provider: 'Freepik',
    alt_text: 'People group chatting through smart phones',
  },
  {
    name: 'Sharing Knowledge',
    used_in: 'FAQ',
    artist: 'M/A',
    provider: 'https://undraw.co/search',
    alt_text: '',
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
  interface FilterButtonProps {
    name: string;
  }

  const handleFilterClick = (e: any) => {
    const [filter, setFilter] = useState<Number>(1);
    if (e.target.value === 'All') {
      setFilter(1);
    } else if (e.target.value === 'Illustrations') {
      setFilter(2);
    }
  };

  const FilterButton = ({ name }: FilterButtonProps) => {
    const classes = useStyles();
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
  const classes = useStyles();
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
