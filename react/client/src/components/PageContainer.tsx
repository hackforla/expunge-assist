import React, { useEffect, useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import AffirmationComponent from 'components/AffirmationComponent';
import Header from 'components/Header';
import Form from 'components/Form';
import FormHeader from 'components/FormHeader';
import Landing from 'pages/Landing';

import RoutingContext from 'contexts/RoutingContext';
import { AffirmationContext } from 'contexts/AffirmationContext';
import { STEP_ENUMS } from 'contexts/RoutingProps';
import { FormStateContextProvider } from 'contexts/FormStateContext';
import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {
      background: 'white',
      color: '#131313',
      padding: '18px',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
    },
  })
);

interface PageProps {
  match: {
    params: {
      page: string;
    };
    path: string;
  };
}

const PageContainer = ({ match }: PageProps) => {
  const { currentStep } = useContext(RoutingContext);
  const { affirmationData, updateAffirmationData } = useContext(
    AffirmationContext
  );

  const classes = useStyles();
  const utilityClasses = useUtilityStyles();

  useEffect(() => {
    // handle closing the affirmation on home page
    if (match.path === '/') updateAffirmationData({ isActive: false });
  }, [match]);

  // todo: move text into a json for localization
  useEffect(() => {
    switch (currentStep) {
      case 2:
        updateAffirmationData({
          isActive: true,
          titleText: 'Welcome!',
          buttonText: 'Begin',
          description: 'This is a tool to generate a personal statement.',
        });
        break;
      case 3:
        updateAffirmationData({
          isActive: true,
          titleText: 'Congrats!',
          buttonText: 'Next',
          description:
            'You just finished introducing yourself! You are well on your way to completing your personal statement and getting your record cleared!',
        });
        break;
      case 5:
        updateAffirmationData({
          isActive: true,
          titleText: 'Hooray!',
          buttonText: 'Next',
          description:
            'You just finished telling everyone about your involvement in your city and your various communities! Thank you for taking the time to tell us about this!',
        });
        break;
      case 6:
        updateAffirmationData({
          isActive: true,
          titleText: 'Great Job!',
          buttonText: 'Next',
          description:
            'Those are some amazing goals you’ve set for yourself! You’re one step closer towards acheiving them too by getting your record cleared.',
        });
        break;
      default:
        break;
    }
  }, [currentStep]);

  return (
    <div className={classes.root}>
      <Header isMainPage={false} />

      <AffirmationComponent
        buttonText={affirmationData.buttonText}
        titleText={affirmationData.titleText}
        description={affirmationData.description}
        isActive={affirmationData.isActive}
        onChangeAffirmation={updateAffirmationData}
      />

      {!affirmationData.isActive && (
        <FormStateContextProvider>
          <FormHeader />
          <Form
            onChangeAffirmation={updateAffirmationData}
            affirmationIsActive={affirmationData.isActive}
          />
        </FormStateContextProvider>
      )}
    </div>
  );
};

export default PageContainer;
