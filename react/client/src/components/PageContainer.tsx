import React, { useEffect } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import AffirmationComponent from 'components/AffirmationComponent';
import Header from 'components/Header';
import Form from 'components/Form';
import FormHeader from 'components/FormHeader';
import Landing from 'components/pages/Landing';

import { RoutingContext } from 'components/contexts/RoutingContext';
import { AffirmationContext } from 'components/contexts/AffirmationContext';

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
  const useRoutingContext = () => React.useContext(RoutingContext);
  const useAffirmationContext = () => React.useContext(AffirmationContext);

  const { pageNumber, goToPage } = useRoutingContext();
  const { affirmationData, updateAffirmationData } = useAffirmationContext();

  const isLandingPage = pageNumber === 0;

  const styleProps = { isLandingPage };
  const classes = useStyles(styleProps);

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
