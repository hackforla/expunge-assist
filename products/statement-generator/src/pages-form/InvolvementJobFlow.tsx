import React, { useContext } from 'react';
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
    const changes = { [id]: value };
    updateStepToForm({
      involvementJobState: { ...formState.involvementJobState, ...changes },
    });
  };

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
