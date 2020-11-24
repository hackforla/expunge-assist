import React from 'react';

import { Wrapper } from '../../styles/BeforeYouBegin'

const BeforeYouBegin: React.FC<GlobalProps> = ({ goToPage }) => {
  return (
    <Wrapper>
      <h2>Before you begin</h2>
      <p>Please make sure you are eligible for getting your record cleared. If you need help with this please email placeholder@website.com.</p>
      <p>Be aware your statement is stored locally on your device, and never transmitted to our servers or any third-party</p>
      <p>This software is developed by a non-governmental third party, Code for America</p>
      <p>Please also review our Privacy Policy and Terms of Use before beginning.</p>
      <p>Please allocate at least 30 minutes of time to complete this.</p>
      <p>If at anytime you are confused please click the question mark button for guidance.</p>
      <button onClick={() => goToPage(2)}>I UNDERSTAND</button>
    </Wrapper>
  )
}

export default BeforeYouBegin;