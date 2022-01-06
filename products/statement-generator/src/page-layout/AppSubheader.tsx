import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

interface IAppSubheader {
  children?: any;
  // className?: string;
}

const useStyles = makeStyles<Theme, IUseUtilityStyle>(({ palette, spacing }) =>
  createStyles({
    subheaderContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: spacing(1, 3),

      background: ({ pageTheme }: IUseUtilityStyle) => {
        switch (pageTheme) {
          case 'dark':
            return palette.primary.main;
          case 'light':
            return palette.primary.light;
          case 'transparent':
          default:
            return 'transparent';
        }
      },

      color: ({ pageTheme }: IUseUtilityStyle) => {
        switch (pageTheme) {
          case 'dark':
            return 'white';
          case 'light':
          case 'transparent':
          default:
            return palette.primary.darker;
        }
      },
    },
  })
);

const AppSubheader = (props: IAppSubheader) => {
  const { children } = props;

  const classes = useStyles({ pageTheme: 'dark' });

  return <div className={classes.subheaderContainer}>{children}</div>;
};

export default AppSubheader;
