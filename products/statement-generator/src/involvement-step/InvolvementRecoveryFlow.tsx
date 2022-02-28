import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

function InvolvementRecoveryFlow() {
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { recoveryName, recoveryDescription } = formState.recoveryState;

  const recoveryNameValid = recoveryName !== '';
  const recoveryDescriptionValid = recoveryDescription !== '';
  const isNextDisabled = !recoveryNameValid || !recoveryDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      recoveryState: { ...formState.recoveryState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="recoveryName"
          label="What is the name of the recovery program you are involved with?"
          handleChange={onInputChange}
          placeholder="Name of Organization"
          defaultValue={recoveryName}
          type="text"
        />

        <Textarea
          id="recoveryDescription"
          label="Why is this recovery program important to you? (2-3 sentences
        suggested)"
          handleChange={onInputChange}
          placeholder="This program is important to me because..."
          disabled={!recoveryNameValid}
          defaultValue={recoveryDescription}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementRecoveryFlow;
