import React, { useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import { Banner } from 'components/Banner';

import RoutingContext from 'contexts/RoutingContext';
import { STEP_ENUMS } from 'contexts/RoutingProps';

const useStyles = makeStyles<Theme, IUseUtilityStyle>(({ palette }) =>
  createStyles({
    subheaderContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      // padding: spacing(1, 3),

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

const AppSubheader = () => {
  const { currentStep } = useContext(RoutingContext);

  const classes = useStyles({ pageTheme: 'dark' });

  const isLandingPage = currentStep === STEP_ENUMS.NONE;

  return (
    <div className={classes.subheaderContainer}>
      {isLandingPage && <Banner />}
    </div>
  );
};

export default AppSubheader;
