import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

function InvolvementParentingFlow() {
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    childName,
    parentYears,
    parentDescription,
  } = formState.parentingState;

  const childNameValid = childName !== '';
  const parentYearsValid = parentYears !== '';
  const parentDescriptionValid = parentDescription !== '';
  const isNextDisabled =
    !childNameValid || !parentYearsValid || !parentDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      parentingState: { ...formState.parentingState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="childName"
          label="What is the name of your child?"
          handleChange={onInputChange}
          placeholder="Name of Child"
          defaultValue={childName}
          type="text"
        />

        <Input
          id="parentYears"
          label="How long have you been a parent?"
          type="number"
          placeholder="1"
          handleChange={onInputChange}
          disabled={!childNameValid}
          defaultValue={parentYears}
          adornment="years"
        />

        <Textarea
          id="parentDescription"
          label="Why is being a good parent important to you? (2-3 sentences suggested)"
          handleChange={onInputChange}
          placeholder="Being a good parent is important to me because..."
          disabled={!parentYearsValid}
          defaultValue={parentDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementParentingFlow;
