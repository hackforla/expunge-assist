import React, { useState, useEffect } from 'react';
import Textarea from 'components/Textarea';
import Input from 'components/Input';
import Button from 'components/Button';
import TextPreview from 'components/TextPreview';
import RadioGroup from 'components/RadioGroup';
import PopUp from 'components/PopUp';

import 'styles/Step1.css';

const Step1 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const [step1Inputs, setStep1Inputs] = useState({
    fullName: '',
    age: '',
    isVeteran: '',
  });
  const [step, setStep] = useState('name');

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
  };

  useEffect(() => {
    const formDiv: any = document.querySelector('.div-form');
    const ageDiv: any = document.querySelector('.div-age');
    const veteranDiv: any = document.querySelector('.div-veteran');
    const popUp: any = document.querySelector('.div-popUp');
    const preview: any = document.querySelector('.div-preview');
    const nextButton: any = document.querySelector('.div-nextButton');
    const looksGoodButton: any = document.querySelector('.div-looksGoodButton');

    if (step1Inputs.fullName !== '') {
      setStep('age');
    }
    if (step1Inputs.age !== '') {
      setStep('isVeteran');
    }
    if (step1Inputs.isVeteran !== '') {
      setStep('beforePreview');
    }
    if (step === 'preview') setStep('preview');

    switch (step) {
      case 'name':
        formDiv.style.display = 'block';
        preview.style.display = 'none';
        looksGoodButton.style.visibility = 'hidden';
        break;
      case 'age':
        ageDiv.style.visibility = 'visible';
        ageDiv.firstChild.style.color = 'black';
        break;
      case 'isVeteran':
        veteranDiv.style.visibility = 'visible';
        veteranDiv.firstChild.style.color = 'black';
        break;
      case 'beforePreview':
        popUp.style.visibility = 'hidden';
        nextButton.style.visibility = 'visible';
        break;
      case 'preview':
        formDiv.style.display = 'none';
        nextButton.style.visibility = 'hidden';
        preview.style.display = 'block';
        looksGoodButton.style.visibility = 'visible';
        break;
      default:
    }
  });

  let veteranSentence;
  step1Inputs.isVeteran === 'Yes'
    ? (veteranSentence = `I am also a proud veteran of the United States Armed Forces.`)
    : (veteranSentence = ``);
  const textPreviewContent = `Thank you so much for taking the time to read my personal statement. My name is ${step1Inputs.fullName}, and I am ${step1Inputs.age} years old. ${veteranSentence}`;

  return (
    <div className="Step1">
      <h2>State</h2>
      <p>{step1Inputs.fullName}</p>
      <p>{step1Inputs.age}</p>
      <p>{step1Inputs.isVeteran}</p>
      <h2 style={{ color: 'orange' }}>STEP: {step}</h2>
      <form className="div-form">
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
      </form>

      <div className="div-preview">
        <TextPreview
          content={textPreviewContent}
          onAdjustClick={() => setStep('name')}
          nameOfStep="Introduction"
        />
      </div>

      <div className="div-backButton">
        <Button onClick={() => goToPage(1)} buttonText="BACK" theme="white" />
      </div>
      <div className="div-nextButton">
        <Button onClick={() => setStep('preview')} buttonText="NEXT" hasArrow />
      </div>
      <div className="div-looksGoodButton">
        <Button onClick={() => goToPage(4)} buttonText="LOOKS GOOD" hasArrow />
      </div>
      <div className="div-popUp">
        <PopUp
          title="Some advice for your personal statement"
          info={
            '1. Remember that you are writing for a judge, so refrain from using informal language such as abbreviations or slang' +
            '\n' +
            '2. Write in complete sentences when given the option' +
            '\n' +
            '3. Use the first person when answering questions. This means telling the story from your point of view.' +
            '\n' +
            '4. Please try to limit your responses. We recommend each paragraph being 3-5 sentences.'
          }
        />
      </div>
    </div>
  );
};

export default Step1;
