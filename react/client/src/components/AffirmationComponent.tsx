import React from 'react';

const AffirmationComponent = (/* props: React.FC */) => {
  return (
    <div
      style={{
        position: 'fixed',
        background: '#F7EBFF',
        left: 0,
        bottom: 0,
        top: 60,
        width: '100%',
        color: '#3D0066',
        // paddingTop: 24,
        // paddingBottom: 24,
        padding: 24,
        zIndex: 1,
      }}
    >
      <div style={{ height: 375, background: '#bf9ed6' }}>[image]</div>
      <div className="page-title adjacent-mar-top">Welcome!</div>
      <div className="adjacent-mar-top">
        This is a tool to generate a personal statement.
      </div>
    </div>
  );
};

export default AffirmationComponent;
