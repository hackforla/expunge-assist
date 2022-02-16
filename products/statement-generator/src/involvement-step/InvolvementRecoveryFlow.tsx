import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';
import Input from '../components/Input';

function InvolvementRecoveryFlow() {
  const utilityClasses = useUtilityStyles();
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
      <div className={utilityClasses.flexColumn}>
        What is the name of the recovery program you are involved with?
        <Input
          id="recoveryName"
          handleChange={onInputChange}
          placeholder="Name of Organization"
          defaultValue={recoveryName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why is this recovery program important to you? (2-3 sentences suggested)
        <Textarea
          id="recoveryDescription"
          handleChange={onInputChange}
          placeholder="This program is important to me because..."
          multi
          isValid={recoveryDescriptionValid}
          disabled={!recoveryNameValid}
          defaultValue={recoveryDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementRecoveryFlow;
