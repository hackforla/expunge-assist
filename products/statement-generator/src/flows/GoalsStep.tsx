import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import FlowNavigation from 'page-layout/FlowNavigation';

import ContentContainer from 'page-layout/ContentContainer';
import Textarea from 'components/Textarea';

function GoalsStep() {
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { goals, goalsHow } = formState.goalsState;

  const goalsValid = goals !== '';
  const goalsHowValid = goalsHow !== '';
  const isNextDisabled = !goalsValid || !goalsHowValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      goalsState: { ...formState.goalsState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <Textarea
        id="goals"
        label="Please describe what goals you have to improve your life even further,
        like attending school, getting specialized training, etc. (2-3 sentences
        suggested)"
        handleChange={onInputChange}
        placeholder="I have plans of..."
        defaultValue={goals}
      />

      <Textarea
        id="goalsHow"
        label="How are you working towards acheiving these goals? What are the concrete
        steps you are taking? (2-3 sentences suggested)"
        handleChange={onInputChange}
        placeholder="I have been..."
        disabled={!goalsValid}
        defaultValue={goalsHow}
      />

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default GoalsStep;
