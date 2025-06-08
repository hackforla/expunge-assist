import React, { useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import FormHeader from 'components/FormHeader';

import RoutingContext from 'contexts/RoutingContext';
import FormStateContext from 'contexts/FormStateContext';
import { isFormPage } from 'contexts/RoutingProps';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(({ globals, palette }) =>
  createStyles({
    subheaderContainer: {
      // note: this will push most content down by the headerHeight,
      //  since most pages have the AppSubheader component even if there is nothing there
      marginTop: globals.headerHeight,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',

      background: ({ pageTheme }: IUseUtilityStyle) => {
        switch (pageTheme) {
          case 'dark':
            return palette.primary.main;
          case 'pink':
            return palette.primary.lighter;
          case 'transparent':
          default:
            return 'transparent';
        }
      },

      color: ({ pageTheme }: IUseUtilityStyle) => {
        switch (pageTheme) {
          case 'dark':
            return 'white';
          case 'pink':
          case 'transparent':
          default:
            return palette.primary.darker;
        }
      },
    },
  })
);

const AppSubheader = () => {
  const { appTheme, currentStep } = useContext(RoutingContext);
  const { showOopsReminder } = useContext(FormStateContext);

  const classes = useStyles({
    pageTheme: appTheme,
  });

  const showSubheader = isFormPage(currentStep) && !showOopsReminder;

  return (
    <div className={classes.subheaderContainer}>
      {showSubheader && <FormHeader />}
    </div>
  );
};

export default AppSubheader;
