import React, { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import FlowNavigation from 'components-layout/FlowNavigation';

import ContentContainer from 'components-layout/ContentContainer';
import Textarea from 'components/Textarea';
import { capitalizeSentences } from 'helpers/statementGenerators';

function GoalsStep() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { goals, goalsHow } = formState.goalsState;

  const goalsRef = useRef<HTMLInputElement>(null);

  const goalsValid = goals !== '';
  const goalsHowValid = goalsHow !== '';
  const isNextDisabled = !goalsValid || !goalsHowValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value.trim();

    if (id === 'goals') {
      formattedValue = capitalizeSentences(value);
    } else if (id === 'goalsHow') {
      formattedValue = value
        .replace(/(^\s*i\s|[.!?]\s*\w)/g, (c) => c.toUpperCase())
        .trim();
      if (!/[.!?]$/.test(formattedValue)) {
        formattedValue += '.';
      }
    }

    const changes = { [id]: formattedValue };
    updateStepToForm({
      goalsState: { ...formState.goalsState, ...changes },
    });
  };

  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  return (
    <ContentContainer ref={contentContainerRef} tabIndex={-1}>
      <Textarea
        ref={goalsRef}
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
