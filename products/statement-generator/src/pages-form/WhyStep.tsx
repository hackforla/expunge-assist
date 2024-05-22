import React, { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function WhyStep() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { clearRecordWhy, clearRecordHow } = formState.whyState;

  const whyRef = useRef<HTMLInputElement>(null);

  const clearRecordWhyValid = clearRecordWhy !== '';
  const clearRecordHowValid = clearRecordHow !== '';
  const isNextDisabled = !clearRecordWhyValid || !clearRecordHowValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
      .trim();

    if (!/[.!?]$/.test(formattedValue)) {
      formattedValue += '.';
    }

    const changes = { [id]: formattedValue };
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
