import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Paragraph from 'components/Paragraph';
import RadioGroup from 'components/RadioGroup';
import HelpPopUp from 'components/HelpPopUp';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

export function IntroductionStep() {
  const utilityClasses = useUtilityStyles();

  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { fullName, age, isVeteran } = formState.introduction;

  const fullNameValid = fullName !== '';
  const ageValid = Number(age) > 0;
  const isNextDisabled = !fullNameValid || !ageValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      introduction: { ...formState.introduction, ...changes },
    });
  };

  return (
    <ContentContainer>
      <form
        className={`${utilityClasses.flexColumn} ${utilityClasses.flexGrow}`}
      >
        <p>What is your name?</p>
        <Input
          id="fullName"
          defaultValue={fullName}
          placeholder="Full Name"
          handleChange={onInputChange}
          type="text"
        />

        <Paragraph disabled={!fullNameValid}>How old are you?</Paragraph>
        <Input
          type="number"
          id="age"
          defaultValue={age}
          placeholder="25"
          disabled={!fullNameValid}
          handleChange={onInputChange}
          adornment="years old"
        />

        <Paragraph disabled={!ageValid}>
          Are you a veteran of the United States of America?
        </Paragraph>
        <RadioGroup
          labels={['Yes', 'No']}
          inputName="isVeteran"
          activeRadio={isVeteran}
          id="isVeteran"
          disabled={!ageValid}
          handleChange={onInputChange}
        />
      </form>

      <HelpPopUp />

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default IntroductionStep;
