import React from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import iconBlack from 'assets/iconBlack.svg';
import iconWhite from 'assets/iconWhite.svg';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(({ palette, spacing }) =>
  createStyles({
    logoContainer: {
      display: 'flex',
      fontSize: 20,
      maxHeight: ({ imageOnly }: IUseUtilityStyle) =>
        imageOnly ? '25px' : 'null',
      marginBottom: ({ imageOnly }: IUseUtilityStyle) =>
        imageOnly ? 0 : 'null',
    },

    logoLink: {
      textDecoration: 'none',
      display: 'flex',
      marginLeft: spacing(2),
      textTransform: 'uppercase',
      fontWeight: 800,
      color: ({ pageTheme }: IUseUtilityStyle) =>
        pageTheme === 'dark' ? 'white' : palette.common.black,
      fontSize: ({ imageOnly }: IUseUtilityStyle) =>
        imageOnly ? 12 : 'inherit',
    },
  })
);

interface ILogoComponent {
  theme?: string; // dark, light
  imageOnly?: boolean; // include text in logo?
}

export default function Logo({ theme, imageOnly }: ILogoComponent) {
  const classes = useStyles({ pageTheme: theme });

  const logoIcon = theme === 'dark' ? iconWhite : iconBlack;

  return (
    <div className={classes.logoContainer}>
      <Link to="/" aria-label="Expunge Assist home">
        <img src={logoIcon} alt="" />
      </Link>

      {!imageOnly && (
        <Link
          to="/"
          className={classes.logoLink}
          aria-label="Expunge Assist home"
        >
          Expunge Assist
        </Link>
      )}
    </div>
  );
}
