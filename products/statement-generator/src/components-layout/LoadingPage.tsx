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

  const animationContainerStyle: React.CSSProperties = {
    width: '500px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const logoContainerStyle: React.CSSProperties = {
    pointerEvents: 'none',
    position: 'absolute',
    top: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const loadingTextStyle: React.CSSProperties = {
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  if (window.innerWidth < 600) {
    animationContainerStyle.width = '300px';
    animationContainerStyle.height = '300px';
    loadingTextStyle.fontSize = '16px';
  }

  return (
    <div style={{ height: '100vh', position: 'relative' }}>
      <div style={logoContainerStyle}>
        <Logo />
      </div>
      <div style={animationContainerStyle}>
        <div>{View}</div>
        <div style={loadingTextStyle}>
          <ProgressCircle /> Loading
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
