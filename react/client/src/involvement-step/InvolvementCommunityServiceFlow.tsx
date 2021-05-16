import React from 'react';

import { IInvolvementServiceState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementInitialStepProps {
  stepState: IInvolvementServiceState;
  setFormState: (value: any) => void;
}

const InvolvementCommunityServiceFlow = ({
  stepState,
  setFormState,
}: IInvolvementInitialStepProps) => {
  const utilityClasses = useUtilityStyles({});

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What is the name of the community service organization that you are
        involved with?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ organizationName: evt.target.value })
          }
          inputName="organizationName"
          placeholder="Name of Organization"
          multi={false}
          isValid
          defaultValue={stepState.organizationName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What do you do at this community service organization? Why is this
        important to you? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ serviceDescription: evt.target.value })
          }
          inputName="serviceDescription"
          placeholder="I have taken on responsibilities including..."
          multi={false}
          isValid
          defaultValue={stepState.serviceDescription}
        />
      </div>

      <FlowNavigation />
    </div>
  );
};

export default InvolvementCommunityServiceFlow;
