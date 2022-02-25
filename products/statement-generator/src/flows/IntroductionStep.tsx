import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
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
        <Input
          label="What is your name?"
          id="fullName"
          defaultValue={fullName}
          placeholder="Full Name"
          handleChange={onInputChange}
          type="text"
        />

        <Input
          label="How old are you?"
          type="number"
          id="age"
          defaultValue={age}
          placeholder="25"
          disabled={!fullNameValid}
          handleChange={onInputChange}
          adornment="years old"
        />

        <RadioGroup
          label='Are you a veteran of the United States of America?'
          choices={['Yes', 'No']}
          inputName="isVeteran"
          activeRadio={isVeteran}
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
