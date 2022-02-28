import React, { useContext } from 'react';

import PrimaryLandingSection from 'components/PrimaryLandingSection';
import HowEAWorks from 'components/landingPageComponents/HowEAWorks';

import RoutingContext from 'contexts/RoutingContext';

const Landing = () => {
  const { goNextPage } = useContext(RoutingContext);

  return (
    <>
      <PrimaryLandingSection goNextPage={goNextPage} />

      <HowEAWorks />
    </>
  );
};

export default Landing;
