import React from 'react';

import { IInvolvementJobState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementInitialStepProps {
  stepState: IInvolvementJobState;
  setFormState: (value: any) => void;
  goNextPage: () => void;
  goBackPage: () => void;
}

const InvolvementJobFlow = ({
  stepState,
  setFormState,
  goNextPage,
  goBackPage,
}: IInvolvementInitialStepProps) => {
  const utilityClasses = useUtilityStyles();

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

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
          isValid
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
          isValid
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
          isValid
          defaultValue={stepState.jobDescription}
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementJobFlow;
