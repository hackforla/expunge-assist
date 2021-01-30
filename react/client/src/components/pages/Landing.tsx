import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import arrowRight from '../../assets/arrowRight.svg';

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
        <button onClick={() => goToPage(1)} className={classes.button}>
          <span>START NOW</span>
          <img src={arrowRight} alt="arrow right" />
        </button>
      </div>
    </div>
  );
};

export default Landing;
