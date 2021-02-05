import React, { useState } from 'react';
import Textarea from 'components/Textarea';
import Input from 'components/Input';
import Button from 'components/Button';
import TextPreview from 'components/TextPreview';
import RadioGroup from 'components/RadioGroup';

import '../../styles/Step1.css';

const Step1 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const [step1Inputs, setStep1Inputs] = useState({
    fullName: '',
    age: '',
    isVeteran: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    // Update Form state (old)
    if (inputName === 'name') {
      setStep1Inputs({ ...step1Inputs, fullName: inputValue });
    } else if (inputName === 'age') {
      setStep1Inputs({ ...step1Inputs, age: inputValue });
    } else if (inputName === 'isVeteran') {
      setStep1Inputs({ ...step1Inputs, isVeteran: inputValue });
    }

    // Update Component state
    if (step1Inputs.fullName !== '') {
      const ageDiv: any = document.querySelector('.div-age');
      ageDiv.style.visibility = 'visible';
      ageDiv.firstChild.style.color = 'black';
    }
    if (step1Inputs.age !== '') {
      const veteranDiv: any = document.querySelector('.div-veteran');
      veteranDiv.style.visibility = 'visible';
      veteranDiv.firstChild.style.color = 'black';
    }
  };

  return (
    <div className="Step1">
      <form>
        <div className="div-questions">
          <div className="div-name">
            <p>What is your name?</p>
            <Textarea
              inputName="name"
              placeholder="FirstName LastName"
              handleChange={handleChange}
              multi={false}
            />
          </div>
          <div className="div-age">
            <p>How old are you?</p>
            <Input
              type="number"
              inputName="age"
              placeholder="25"
              handleChange={handleChange}
            />
          </div>
          <div className="div-veteran">
            <p>Are you a veteran of the United States of America?</p>
            <RadioGroup
              labels={['Yes', 'No']}
              inputName="isVeteran"
              handleChange={handleChange}
              activeRadio={step1Inputs.isVeteran}
            />
          </div>
        </div>

        <div className="div-preview">
          <TextPreview
            content="Thank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old. I am also a proud veteran of the United States Armed Forces."
            onAdjustClick={() => console.log('adjust clicked')}
            nameOfStep="Introduction"
          />
        </div>

        <Button onClick={() => goToPage(1)} buttonText="BACK" theme="white" />
        <Button onClick={() => goToPage(4)} buttonText="NEXT" hasArrow />
      </form>
    </div>
  );
};

export default Step1;
