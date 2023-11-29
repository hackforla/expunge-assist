import React from 'react';
import { useLottie } from 'lottie-react';
import loadingData from '../assets/loading.json';
import Logo from '../components/Logo';
import ProgressCircle from '../components/ProgressCircle';

const LoadingPage: React.FC = () => {
  const options = {
    animationData: loadingData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  const logoContainerStyle: React.CSSProperties = {
    pointerEvents: 'none',
  };

  return (
    <div>
      <div style={logoContainerStyle}>
        <Logo />
      </div>
      <div>{View}</div>
      <div>
        <ProgressCircle /> <strong>Loading</strong>
      </div>
    </div>
  );
};

export default LoadingPage;
