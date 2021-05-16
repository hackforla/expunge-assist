import React, { useEffect, useContext } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import AffirmationComponent from 'components/AffirmationComponent';
import Header from 'components/Header';
import Form from 'components/Form';
import FormHeader from 'components/FormHeader';
import Landing from 'pages/Landing';

import { RoutingContext } from 'contexts/RoutingContext';
import { AffirmationContext } from 'contexts/AffirmationContext';
import { PAGE_ENUMS } from 'contexts/RoutingProps';
import FormStateContextProvider from 'contexts/FormStateContext';

interface styleProps {
  isLandingPage: boolean;
}

const useStyles = makeStyles<Theme, styleProps>(() =>
  createStyles({
    root: {
      background: (props) => (props.isLandingPage ? '#9903ff' : 'white'),
      color: (props) => (props.isLandingPage ? 'white' : '#131313'),
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
  const useAffirmationContext = () => React.useContext(AffirmationContext);

  const { goBackPage, pageEnum } = useContext(RoutingContext);
  const { affirmationData, updateAffirmationData } = useAffirmationContext();
  const isLandingPage = pageEnum === PAGE_ENUMS.NONE;

  const styleProps = { isLandingPage };
  const classes = useStyles(styleProps);

  useEffect(() => {
    // handle closing the affirmation on home page
    if (match.path === '/') updateAffirmationData({ isActive: false });
  }, [match]);

  // todo: move text into a json for localization
  useEffect(() => {
    switch (pageEnum) {
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
  }, [pageEnum]);

  return (
    <div className={`${classes.root} page-container`}>
      <Header isMainPage={isLandingPage} />

      <AffirmationComponent
        buttonText={affirmationData.buttonText}
        titleText={affirmationData.titleText}
        description={affirmationData.description}
        isActive={affirmationData.isActive}
        onChangeAffirmation={updateAffirmationData}
      />

      {isLandingPage && <Landing />}

      {!affirmationData.isActive && !isLandingPage && (
        <FormStateContextProvider>
          <FormHeader pageEnum={pageEnum} />
          <Form
            pageEnum={pageEnum}
            goBackPage={goBackPage}
            onChangeAffirmation={updateAffirmationData}
            affirmationIsActive={affirmationData.isActive}
          />
        </FormStateContextProvider>
      )}
    </div>
  );
};

export default PageContainer;
