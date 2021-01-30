import React from 'react';
import useUtilityStyles from 'styles/utilityStyles';

import arrowRight from '../../assets/arrowRight.svg';

// this is kind of funky but will need to be updated when text is changed
const disclaimerText = `
Please make sure you are eligible for getting your record cleared. If you need help with this please email placeholder@website.com.

Be aware your statement is stored locally on your device, and never transmitted to our servers or any third-party

This software is developed by a non-governmental third party, Code for America

Please also review our Privacy Policy and Terms of Use before beginning.

Please allocate at least 30 minutes of time to complete this.

If at anytime you are confused please click the question mark button for guidance.
`;

const BeforeYouBegin = ({ goToPage }: GlobalProps) => {
  const utilityClasses = useUtilityStyles({});
  return (
    <>
      <div className="adjacent-mar-top" style={{ fontWeight: 500 }}>
        Before you begin
      </div>
      <div className="adjacent-mar-top" style={{ whiteSpace: 'pre-wrap' }}>
        {disclaimerText}
      </div>

      <div className={`${utilityClasses.flex} adjacent-mar-top`}>
        <button
          type="button"
          onClick={() => goToPage(2)}
          className={utilityClasses.button}
        >
          <span>I understand</span>
          <img src={arrowRight} alt="arrow right" />
        </button>
      </div>
    </>
  );
};

export default BeforeYouBegin;
