import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';
import RadioGroup from 'components/RadioGroup';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

import useUtilityStyles from 'styles/utilityStyles';

function InvolvementUnemployedFlow() {
  const utilityClasses = useUtilityStyles();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    unemploymentDescription,
    wouldClearanceHelp,
  } = formState.unemployedState;

  const unemploymentDescriptionValid = unemploymentDescription !== '';
  const wouldClearanceHelpValid = wouldClearanceHelp !== '';
  const isNextDisabled =
    !unemploymentDescriptionValid || !wouldClearanceHelpValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      unemployedState: { ...formState.unemployedState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Textarea
          id="unemploymentDescription"
          label="Please describe why you are having trouble finding work. (2-3
        sentences suggested)"
          handleChange={onInputChange}
          placeholder="I have been having trouble finding work because..."
          defaultValue={unemploymentDescription}
        />

        <RadioGroup
          id="wouldClearanceHelp"
          label="Do you believe that having your record cleared would help you find a job and be more involved in your community?"
          choices={['Yes', 'No']}
          value={wouldClearanceHelp}
          disabled={!unemploymentDescriptionValid}
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            updateStepToForm({
              unemployedState: {
                ...formState.unemployedState,
                wouldClearanceHelp: evt.currentTarget.value,
              },
            });
          }}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementUnemployedFlow;
