import React, { useContext } from 'react';
import Button from 'components/Button';
import { Banner } from 'components/Banner';

import RoutingContext from 'contexts/RoutingContext';

import useUtilityStyles from 'styles/utilityStyles';

const Landing = () => {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });

  const { goNextPage } = useContext(RoutingContext);

  return (
    <div className={utilityClasses.primaryContainer}>
      <Banner />
      <div className={utilityClasses.contentContainer}>
        <div className={utilityClasses.flexGrow}>
          <h2 className="page-title">Start fresh with a record expungement</h2>
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
      </div>
    </div>
  );
};

export default Landing;
