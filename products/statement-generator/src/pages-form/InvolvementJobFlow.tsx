import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';
import FormFlowContainer from 'components-layout/FormFlowContainer';

import {
  capitalizeEachWord,
  capitalizeSentences,
  capitalizeStandaloneI,
} from 'helpers/statementGenerators';

function InvolvementJobFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { companyName, jobTitle, jobDescription } =
    formState.involvementJobState;

  const companyNameValid = companyName !== '';
  const jobTitleValid = jobTitle !== '';
  const jobDescriptionValid = jobDescription !== '';
  const isNextDisabled =
    !companyNameValid || !jobTitleValid || !jobDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value.trim();

    if (id === 'companyName' || id === 'jobTitle') {
      formattedValue = capitalizeEachWord(value);
    } else if (id === 'jobDescription') {
      formattedValue = capitalizeSentences(value);
    }

    formattedValue = capitalizeStandaloneI(formattedValue);

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
    <FormFlowContainer isNextDisabled={isNextDisabled}>
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
    </FormFlowContainer>
  );
}

export default InvolvementJobFlow;
