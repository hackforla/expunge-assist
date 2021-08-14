import React from 'react';

import { IInvolvementJobState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementInitialStepProps {
  stepState: IInvolvementJobState;
  setFormState: (value: any) => void;
}

const InvolvementJobFlow = ({
  stepState,
  setFormState,
}: IInvolvementInitialStepProps) => {
  const utilityClasses = useUtilityStyles();

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

  const companyNameValid = stepState.companyName !== '';
  const jobTitleValid = stepState.jobTitle !== '';
  const jobDescriptionValid = stepState.jobDescription !== '';
  const isNextDisabled =
    !companyNameValid || !jobTitleValid || !jobDescriptionValid;

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What is the name of the company you work for?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ companyName: evt.target.value })
          }
          inputName="companyName"
          placeholder="Name of company"
          multi={false}
          isValid={companyNameValid}
          defaultValue={stepState.companyName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What is your current job title?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ jobTitle: evt.target.value })
          }
          inputName="jobTitle"
          placeholder="Job Title"
          multi={false}
          disabled={!companyNameValid}
          isValid={jobTitleValid}
          defaultValue={stepState.jobTitle}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What do you do at this job? Why is this important to you? (2-3 sentences
        suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ jobDescription: evt.target.value })
          }
          inputName="jobDescription"
          placeholder="I have had the chance to..."
          multi
          disabled={!jobTitleValid}
          isValid={jobDescriptionValid}
          defaultValue={stepState.jobDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </div>
  );
};

export default InvolvementJobFlow;
