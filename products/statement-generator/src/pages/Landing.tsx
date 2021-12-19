import React, { useContext } from 'react';

import Button from 'components/Button';
import { Banner } from 'components/Banner';

import ContentContainer from 'page-layout/ContentContainer';

import RoutingContext from 'contexts/RoutingContext';

import useUtilityStyles from 'styles/utilityStyles';

const Landing = () => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });

  const { goNextPage } = useContext(RoutingContext);

  return (
    <>
      <Banner />
      <ContentContainer>
        <div className={utilityClasses.flexGrow}>
          <h1>Start fresh with a record expungement</h1>
          <p>Generate a personal statement in just 20 minutes</p>
        </div>

        <div className={utilityClasses.buttonContainer}>
          <Button
            className={utilityClasses.buttonRight}
            onClick={() => goNextPage()}
            theme="dark"
            hasArrow
            buttonText="START NOW"
          />
        </div>
      </ContentContainer>
    </>
  );
};

export default Landing;
