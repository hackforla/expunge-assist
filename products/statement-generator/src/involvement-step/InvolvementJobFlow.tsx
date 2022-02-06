import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';
import Input from '../components/Input';

function InvolvementJobFlow() {
  const utilityClasses = useUtilityStyles();
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
      <div className={utilityClasses.flexColumn}>
        What is the name of the company you work for?
        <Input
          handleChange={onInputChange}
          id="companyName"
          placeholder="Name of company"
          defaultValue={companyName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What is your current job title?
        <Input
          handleChange={onInputChange}
          id="jobTitle"
          placeholder="Job Title"
          disabled={!companyNameValid}
          defaultValue={jobTitle}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What do you do at this job? Why is this important to you? (2-3 sentences
        suggested)
        <Textarea
          handleChange={onInputChange}
          id="jobDescription"
          placeholder="I have had the chance to..."
          multi
          disabled={!jobTitleValid}
          isValid={jobDescriptionValid}
          defaultValue={jobDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementJobFlow;
