import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import RadioGroup from 'components/RadioGroup';
import HelpPopUp from 'components/HelpPopUp';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

export function IntroductionStep() {
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
      <FormContainer>
        <Input
          id="fullName"
          label="What is your name?"
          defaultValue={fullName}
          placeholder="Full Name"
          handleChange={onInputChange}
          type="text"
        />

        <Input
          id="age"
          label="How old are you?"
          type="number"
          defaultValue={age}
          placeholder="25"
          disabled={!fullNameValid}
          handleChange={onInputChange}
          adornment="years old"
        />

        <RadioGroup
          id="isVeteran"
          label="Are you a veteran of the United States of America?"
          choices={['Yes', 'No']}
          value={isVeteran}
          disabled={!ageValid}
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            updateStepToForm({
              introduction: {
                ...formState.introduction,
                isVeteran: evt.currentTarget.value,
              },
            });
          }}
        />
      </FormContainer>

      <HelpPopUp />

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default IntroductionStep;
