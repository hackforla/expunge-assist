import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function InvolvementJobFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    companyName,
    jobTitle,
    jobDescription,
  } = formState.involvementJobState;

  const companyNameValid = companyName !== '';
  const jobTitleValid = jobTitle !== '';
  const jobDescriptionValid = jobDescription !== '';
  const isNextDisabled =
    !companyNameValid || !jobTitleValid || !jobDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value;

    // Capitalize each word for companyName and jobTitle
    if (id === 'companyName' || id === 'jobTitle') {
      formattedValue = value.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    // Capitalize the first word of each sentence and ensure it ends with a period in jobDescription
    if (id === 'jobDescription') {
      formattedValue = value.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
        c.toUpperCase()
      );
      // Check if the last character is not a punctuation mark, then add a period.
      if (!/[.!?]$/.test(formattedValue.trim())) {
        formattedValue = `${formattedValue.trim()}.`;
      }
    }

    const changes = { [id]: formattedValue };
    updateStepToForm({
      involvementJobState: { ...formState.involvementJobState, ...changes },
    });
  };

  const companyNameLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    companyNameLabelRef.current?.focus();
  }, []);

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="companyName"
          label={t('job_form.companyName_input_label')}
          placeholder={t('job_form.companyName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={companyName}
          shortWidth
          type="text"
          labelRef={companyNameLabelRef}
        />

        <Input
          id="jobTitle"
          label={t('job_form.jobTitle_input_label')}
          placeholder={t('job_form.jobTitle_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={jobTitle}
          shortWidth
          type="text"
        />

        <Textarea
          id="jobDescription"
          label={t('job_form.jobDescription_input_label')}
          placeholder={t('job_form.jobDescription_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={jobDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementJobFlow;
