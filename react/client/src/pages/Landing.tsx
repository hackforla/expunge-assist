import React from 'react';
import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

interface LandingProps {
  goNextPage: () => void;
}

const Landing = ({ goNextPage }: LandingProps) => {
  const utilityClasses = useUtilityStyles({ theme: 'dark' });
  return (
    <div className={`${utilityClasses.contentContainer} content-page`}>
      <h1 className="page-title adjacent-mar-top">
        Start fresh with a record expungement
      </h1>
      <div className="adjacent-mar-top">
        Generate a personal statement in just 20 minutes
      </div>

      <div className={`${utilityClasses.buttonContainer} adjacent-mar-top`}>
        <Button
          onClick={() => goNextPage()}
          theme="dark"
          hasArrow
          buttonText="START NOW"
        />
      </div>
    </div>
  );
};

export default Landing;
