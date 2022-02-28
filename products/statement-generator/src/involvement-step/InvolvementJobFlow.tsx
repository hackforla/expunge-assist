import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

function InvolvementJobFlow() {
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
          label="What is the name of the company you work for?"
          handleChange={onInputChange}
          placeholder="Name of company"
          defaultValue={companyName}
          type="text"
        />

        <Input
          id="jobTitle"
          label="What is your current job title?"
          handleChange={onInputChange}
          placeholder="Job Title"
          disabled={!companyNameValid}
          defaultValue={jobTitle}
          type="text"
        />

        <Textarea
          id="jobDescription"
          label="What do you do at this job? Why is this important to you? (2-3
        sentences suggested)"
          handleChange={onInputChange}
          placeholder="I have had the chance to..."
          disabled={!jobTitleValid}
          defaultValue={jobDescription}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementJobFlow;
