import React, { useState } from 'react';
import Textarea from 'components/Textarea';
import Input from 'components/Input';
import Button from 'components/Button';
import TextPreview from 'components/TextPreview';
import RadioGroup from 'components/RadioGroup';
import PopUp from 'components/PopUp';

const Step1 = ({ inputs, setInputs, goNextPage, goBackPage }: StepProps) => {
  const [step1Inputs, setStep1Inputs] = useState({
    fullName: '',
    age: '',
    isVeteran: '',
  });

  const [nameFilled, setNameFilled] = useState(false);

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    if (inputName === 'name') {
      setStep1Inputs({ ...step1Inputs, fullName: inputValue });
      inputValue === '' ? setNameFilled(false) : setNameFilled(true);
    }
    if (inputName === 'age')
      setStep1Inputs({ ...step1Inputs, age: inputValue });
    if (inputName === 'isVeteran')
      setStep1Inputs({ ...step1Inputs, isVeteran: inputValue });
  };

  let veteranSentence;
  step1Inputs.isVeteran === 'Yes'
    ? (veteranSentence = `I am also a proud veteran of the United States Armed Forces.`)
    : (veteranSentence = ``);
  const textPreviewContent = `Thank you so much for taking the time to read my personal statement. My name is ${step1Inputs.fullName}, and I am ${step1Inputs.age} years old. ${veteranSentence}`;

  return !showPreview ? (
    <div className="Step1">
      <form>
        <p>What is your name?</p>
        <Textarea
          inputName="name"
          placeholder="Firstname Lastname"
          handleChange={handleChange}
          multi={false}
          isValid={nameFilled}
          defaultValue={step1Inputs.fullName}
        />
        <p className="greyedOut">How old are you?</p>
        {nameFilled && (
          <Input
            type="number"
            inputName="age"
            placeholder="25"
            handleChange={handleChange}
            defaultValue={step1Inputs.age}
          />
        )}

        <p className="greyedOut">
          Are you a veteran of the United States of America?
        </p>
        {Number(step1Inputs.age) > 0 && (
          <RadioGroup
            labels={['Yes', 'No']}
            inputName="isVeteran"
            handleChange={handleChange}
            activeRadio={step1Inputs.isVeteran}
          />
        )}
      </form>

      <Button onClick={() => goBackPage()} buttonText="BACK" theme="white" />
      {step1Inputs.isVeteran === '' ? (
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
      ) : (
        <div>
          <Button
            onClick={() => setShowPreview(true)}
            buttonText="NEXT"
            hasArrow
          />
        </div>
      )}
    </div>
  ) : (
    <div className="Step1-Preview">
      <div>
        <TextPreview
          content={textPreviewContent}
          onAdjustClick={() => setShowPreview(false)}
          nameOfStep="Introduction"
        />
      </div>
      <div>
        <Button onClick={() => goNextPage()} buttonText="LOOKS GOOD" hasArrow />
      </div>
    </div>
  );
};

export default Step1;
