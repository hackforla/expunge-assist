import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import FlowNavigation from 'components-layout/FlowNavigation';

import ContentContainer from 'components-layout/ContentContainer';
import Textarea from 'components/Textarea';

function GoalsStep() {
  const { t } = useTranslation();
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
        label={t('goals_form.goals_input_label')}
        placeholder={t('goals_form.goals_input_placeholder')}
        handleChange={onInputChange}
        defaultValue={goals}
        rows={3}
      />

      <Textarea
        id="goalsHow"
        label={t('goals_form.goalsHow_input_label')}
        placeholder={t('goals_form.goalsHow_input_placeholder')}
        handleChange={onInputChange}
        defaultValue={goalsHow}
        rows={3}
      />

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default GoalsStep;
