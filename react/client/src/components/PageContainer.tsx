import React, { useState, useEffect } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import AffirmationComponent from 'components/AffirmationComponent';
import Header from 'components/Header';
import Form from 'components/Form';
import FormHeader from 'components/FormHeader';
import Landing from 'components/pages/Landing';

import { Context } from 'components/contexts/Context';

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

interface AffirmationProps {
  isActive: boolean;
  titleText: string;
  buttonText: string;
  description: string;
}

const useStore = () => React.useContext(Context);

const PageContainer: React.FC<PageProps> = ({ match }) => {
  const { pageNumber, goToPage } = useStore();

  const isLandingPage = pageNumber === 0;

  const styleProps = { isLandingPage };
  const classes = useStyles(styleProps);

  // create state just for the Affirmation component
  const [affirmationData, setAffirmationData] = useState<AffirmationProps>({
    isActive: false,
    titleText: 'Welcome!',
    buttonText: 'Begin',
    description: 'This is a tool to generate a personal statement.',
  });

  const updateAffirmationData = (newState: object) => {
    setAffirmationData({ ...affirmationData, ...newState });
  };

  useEffect(() => {
    // handle closing the affirmation on home page
    if (match.path === '/') {
      updateAffirmationData({ isActive: false });
    }
  }, [match]);

  return (
    <div className={`${classes.root} page-container`}>
      <AffirmationComponent
        buttonText={affirmationData.buttonText}
        titleText={affirmationData.titleText}
        description={affirmationData.description}
        isActive={affirmationData.isActive}
        onChangeAffirmation={updateAffirmationData}
      />

      <Header pageNumber={pageNumber} />

      {!isLandingPage && <FormHeader pageNumber={pageNumber} />}

      {isLandingPage && <Landing goToPage={goToPage} />}

      {!isLandingPage && (
        <Form
          pageNumber={pageNumber}
          goToPage={goToPage}
          onChangeAffirmation={updateAffirmationData}
        />
      )}
    </div>
  );
};

export default PageContainer;
