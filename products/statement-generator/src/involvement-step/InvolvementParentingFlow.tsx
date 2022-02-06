import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

function InvolvementParentingFlow() {
  const utilityClasses = useUtilityStyles();
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
      <div className={utilityClasses.flexColumn}>
        What is the name of your child?
        <Input
          id="childName"
          handleChange={onInputChange}
          placeholder="Name of Child"
          defaultValue={childName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        How long have you been a parent?
        <Input
          type="number"
          id="parentYears"
          placeholder="1"
          handleChange={onInputChange}
          disabled={!childNameValid}
          defaultValue={parentYears}
          adornment="years"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why is being a good parent important to you? (2-3 sentences suggested)
        <Textarea
          id="parentDescription"
          handleChange={onInputChange}
          placeholder="Being a good parent is important to me because..."
          multi
          isValid={parentDescriptionValid}
          disabled={!parentYearsValid}
          defaultValue={parentDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementParentingFlow;
