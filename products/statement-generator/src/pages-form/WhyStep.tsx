import React, { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

import { AffirmationContext } from 'contexts/AffirmationContext';

function WhyStep() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { clearRecordWhy, clearRecordHow } = formState.whyState;

  const { affirmationData } = useContext(AffirmationContext);

  const whyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!affirmationData.isActive) {
      whyRef.current?.focus();
    }
  }, [affirmationData.isActive]);

  const clearRecordWhyValid = clearRecordWhy !== '';
  const clearRecordHowValid = clearRecordHow !== '';
  const isNextDisabled = !clearRecordWhyValid || !clearRecordHowValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      whyState: { ...formState.whyState, ...changes },
    });
  };

  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  return (
    <ContentContainer ref={contentContainerRef} tabIndex={-1}>
      <FormContainer>
        <Textarea
          ref={whyRef}
          id="clearRecordWhy"
          label={t('why_form.clearRecordWhy_input_label')}
          placeholder={t('why_form.clearRecordWhy_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={clearRecordWhy}
          rows={3}
        />

        <Textarea
          id="clearRecordHow"
          label={t('why_form.clearRecordHow_input_label')}
          placeholder={t('why_form.clearRecordHow_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={clearRecordHow}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default WhyStep;
