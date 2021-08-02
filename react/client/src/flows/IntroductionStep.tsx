import React, { useState } from 'react';

import { IIntroductionState } from 'contexts/FormStateProps';

import Textarea from 'components/Textarea';
import Input from 'components/Input';
import TextPreview from 'components/TextPreview';
import RadioGroup from 'components/RadioGroup';
import HelpPopUp from 'components/HelpPopUp';
import FlowNavigation from 'components/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

interface IIntroductionStepProps {
  stepState: IIntroductionState;
  setFormState: (value: any) => void;
}

const IntroductionStep = ({
  stepState,
  setFormState,
}: IIntroductionStepProps) => {
  const utilityClasses = useUtilityStyles({});

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    if (inputName === 'name') {
      setFormState({ ...stepState, fullName: inputValue });
    }

    if (inputName === 'age') setFormState({ ...stepState, age: inputValue });

    if (inputName === 'isVeteran')
      setFormState({ ...stepState, isVeteran: inputValue });
  };

  let veteranSentence;
  stepState.isVeteran === 'Yes'
    ? (veteranSentence = `I am also a proud veteran of the United States Armed Forces.`)
    : (veteranSentence = ``);
  const textPreviewContent = `Thank you so much for taking the time to read my personal statement. My name is ${stepState.fullName}, and I am ${stepState.age} years old. ${veteranSentence}`;

  const fullNameValid = stepState.fullName !== '';
  const ageValid = Number(stepState.age) > 0;
  const isNextDisabled = !fullNameValid || !ageValid;

  if (showPreview) {
    return (
      <div className={utilityClasses.contentContainer}>
        <div>
          <TextPreview
            content={textPreviewContent}
            onAdjustClick={() => setShowPreview(false)}
            nameOfStep="Introduction"
          />
        </div>

        <FlowNavigation
          onBack={() => setShowPreview(false)}
          isNextDisabled={isNextDisabled}
        />
      </div>
    );
  }

  return (
    <div className={utilityClasses.contentContainer}>
      <form className={utilityClasses.flexGrow}>
        <p>What is your name?</p>
        <Textarea
          inputName="name"
          placeholder="Firstname Lastname"
          handleChange={handleChange}
          multi={false}
          isValid={fullNameValid}
          defaultValue={stepState.fullName}
        />

        <p className="greyedOut">How old are you?</p>
        <Input
          type="number"
          inputName="age"
          placeholder="25"
          disabled={!fullNameValid}
          handleChange={handleChange}
          defaultValue={stepState.age}
          adornment="years old"
        />

        <p className="greyedOut">
          Are you a veteran of the United States of America?
        </p>
        <RadioGroup
          labels={['Yes', 'No']}
          inputName="isVeteran"
          disabled={!ageValid}
          handleChange={handleChange}
          activeRadio={stepState.isVeteran}
        />
      </form>

      <HelpPopUp />

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </div>
  );
};

export default IntroductionStep;
