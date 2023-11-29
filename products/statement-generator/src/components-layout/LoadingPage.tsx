import React from 'react';
import { useLottie } from 'lottie-react';
import loadingData from '../assets/loading.json';

const LoadingPage: React.FC = () => {
  const options = {
    animationData: loadingData,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <p>TESTING</p>
      {View}
    </div>
  );
};

export default LoadingPage;
