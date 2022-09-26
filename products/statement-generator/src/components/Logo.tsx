import React from 'react';
import { Link } from 'react-router-dom';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import iconBlack from 'assets/iconBlack.svg';
import iconWhite from 'assets/iconWhite.svg';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(
  ({ palette, breakpoints, spacing }) =>
    createStyles({
      logoContainer: {
        display: 'flex',
        fontSize: 20,
        maxHeight: ({ footer }: IUseUtilityStyle) => (footer ? '25px' : 'null'),
        marginBottom: ({ footer }: IUseUtilityStyle) =>
          footer ? '10px' : 'null',

        [breakpoints.down(breakpoints.values.sm)]: {
          // display: 'none',
        },
      },

      logoLink: {
        textDecoration: 'none',
        display: 'flex',
        marginLeft: spacing(2),
        textTransform: 'uppercase',
        fontWeight: 800,
        color: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? 'white' : palette.common.black,

        // we want the text to be stacked vertically,
        //  when we are in the footer AND when in mobile view
        [breakpoints.up(breakpoints.values.sm)]: {
          '& span + span': {
            marginLeft: ({ footer }: IUseUtilityStyle) => (footer ? 0 : 8),
          },
        },

        flexDirection: ({ footer }: IUseUtilityStyle) =>
          footer ? 'column' : 'row',
        fontSize: ({ footer }: IUseUtilityStyle) => (footer ? 12 : 'inherit'),
        [breakpoints.down(breakpoints.values.sm)]: {
          flexDirection: 'column',
          fontSize: 12,
        },
      },
    })
);

interface ILogoComponent {
  theme?: string; // dark, light
  footer?: boolean; // is logo located in the footer?
}

function TextLogo({ theme, footer }: ILogoComponent) {
  const classes = useStyles({ pageTheme: theme, footer });

  return (
    <Link to="/" className={classes.logoLink}>
      <span>Expunge</span>
      <span>Assist</span>
    </Link>
  );
}

export default function Logo({ theme, footer }: ILogoComponent) {
  const classes = useStyles({ pageTheme: theme, footer });

  const logoIcon = theme === 'dark' ? iconWhite : iconBlack;

  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <img src={logoIcon} alt="" />
      </Link>

      <TextLogo theme={theme} footer={footer} />
    </div>
  );
}
