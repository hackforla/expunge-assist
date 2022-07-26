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
        maxHeight: ({ footer }: IUseUtilityStyle) =>
          footer ? '25px' : 'null',
        marginBottom: ({ footer }: IUseUtilityStyle) =>
          footer ? '10px' : 'null',
        [breakpoints.down(breakpoints.values.md)]: {
          background: palette.primary.lighter,
          justifyContent: 'center',
        },

        [breakpoints.down(breakpoints.values.sm)]: {
          display: 'none',
        },
      },

      logoLink: {
        textDecoration: 'none',
        display: 'flex',
        flexDirection: ({ footer} : IUseUtilityStyle) =>
          footer ? 'column' : 'row',
        marginLeft: spacing(2),
        textTransform: 'uppercase',
        fontWeight: 800,
        color: ({ pageTheme }: IUseUtilityStyle) =>
          pageTheme === 'dark' ? 'white' : palette.common.black,

        [breakpoints.up(breakpoints.values.md)]: {
          flexDirection: 'row',
          fontSize:({ footer }: IUseUtilityStyle) =>
            footer ? '12px' : '24px',
          '& span + span': {
            marginLeft: ({ footer }: IUseUtilityStyle) =>
              footer ? 0 : 8,
          },
        },
        [breakpoints.down(breakpoints.values.md)]: {
          flexDirection: 'column',
          fontSize: '12px',
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

      <TextLogo theme={theme} footer={footer}/>
    </div>
  );
}
