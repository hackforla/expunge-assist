import React from 'react';
import { useLottie } from 'lottie-react';
import loadingData from '../assets/loading.json';
import Logo from '../components/Logo';

const LoadingPage: React.FC = () => {
  const options = {
    animationData: loadingData,
    loop: true,
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
      {View}
    </div>
  );
};

export default LoadingPage;
