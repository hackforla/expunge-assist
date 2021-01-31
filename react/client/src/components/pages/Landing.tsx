import React from 'react';
import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

interface LandingProps {
  goToPage: (pageNumber: number) => void;
}

const Landing = ({ goToPage }: LandingProps) => {
  const classes = useUtilityStyles({ theme: 'dark' });
  return (
    <div className={`${classes.contentContainer} content-page`}>
      <h1 className="page-title adjacent-mar-top">
        Start fresh with a record expungement
      </h1>
      <div className="adjacent-mar-top">
        Generate a personal statement in just 20 minutes
      </div>

      <div className={`${classes.flex} adjacent-mar-top`}>
        <Button
          onClick={() => goToPage(1)}
          theme="dark"
          hasArrow
          buttonText="START NOW"
        />
      </div>
    </div>
  );
};

export default Landing;
