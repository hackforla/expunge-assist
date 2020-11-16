import React, { useState, useEffect } from 'react';

import iconBlack from '../assets/iconBlack.svg'
import iconWhite from '../assets/iconWhite.svg'

import { LandingHeader, FormHeader } from '../styles/Header'

interface HeaderProps {
  pageNumber: number;
}

const Header: React.FC<HeaderProps> = ({ pageNumber }) => {
  const [showLandingHeader, setShowLandingHeader] = useState(true);
  let icon: string, background: string, formStep: number, showFormHeader: boolean, color: string;

  useEffect(() => {
    showLandingHeaderOnResize(window.innerWidth)
  },)

  pageNumber === 0 ? icon = iconWhite : icon = iconBlack;
  // pageNumber === 0 ? background = '#9903ff' : background = 'white';
  if (pageNumber === 0) { background = '#9903ff'; color='white' } else {background = 'white'; color = 'black'}
  if (pageNumber === 3 ) { formStep=1; showFormHeader=true; }
  else if (pageNumber === 5) { formStep = 2; showFormHeader=true; }
  else if (pageNumber === 7) { formStep = 3; showFormHeader=true; }
  else if (pageNumber === 9) { formStep = 4; showFormHeader=true; }
  else if (pageNumber === 11) { formStep = 5; showFormHeader=true; }
  else if (pageNumber === 13) { formStep = 6; showFormHeader=true; }
  else { formStep = 0; showFormHeader=false }

  const showLandingHeaderOnResize = (viewWidth :number) => {
    if (pageNumber > 2) {
      viewWidth > 960 ?  setShowLandingHeader(true) : setShowLandingHeader(false);
    }
  }
  window.addEventListener("resize", () => showLandingHeaderOnResize(window.innerWidth))

  return (
    <>
    { showLandingHeader && 
      <LandingHeader background={background} color={color} className="Header">
        <img src={icon} alt="" />
        <div>
          <p>The Record</p>
          <p>Clearance Project</p>
        </div>
      </LandingHeader>

    }
    { showFormHeader &&
      <FormHeader>
        {formStep === 1 && <h2>Introduce Yourself!</h2>}
        {formStep === 2 && <h2>Life Changes</h2>}
        {formStep === 3 && <h2>Involvement</h2>}
        {formStep === 4 && <h2>Goals</h2>}
        {formStep === 5 && <h2>Why</h2>}
        {formStep === 6 && <h2>My Personal Statement</h2>}
        
        {formStep < 6 && <p>Step {formStep} of 5</p> }
        {formStep === 6 && <p>Completed</p> }
      </FormHeader>
    }

    </>
  )
}

export default Header;