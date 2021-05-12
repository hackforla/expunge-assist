import React, { useState } from 'react';

import { IStepProps } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import { IInvolvementJobState } from 'involvement-step/InvolvementCommon';

import useUtilityStyles from 'styles/utilityStyles';

const InvolvementJobFlow = ({
  formState,
  setFormState,
  goNextPage,
  goBackPage,
}: IStepProps) => {
  const utilityClasses = useUtilityStyles();
  const [state, setState] = useState<IInvolvementJobState>({
    companyName: '',
    jobTitle: '',
    jobDescription: '',
  });

  const updateFlowState = (changes: object) => {
    const newState = {
      ...state,
      ...changes,
    };
    setState(newState);
    setFormState(formState); // todo
  };

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What is the name of the company you work for?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ companyName: evt.target.value })
          }
          inputName="companyName"
          placeholder="Name of company"
          multi={false}
          isValid
          defaultValue={state.companyName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What is your current job title?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ jobTitle: evt.target.value })
          }
          inputName="jobTitle"
          placeholder="Job Title"
          multi={false}
          isValid
          defaultValue={state.jobTitle}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What do you do at this job? Why is this important to you? (2-3 sentences
        suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ jobDescription: evt.target.value })
          }
          inputName="jobDescription"
          placeholder="I have had the chance to..."
          multi
          isValid
          defaultValue={state.jobDescription}
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementJobFlow;
