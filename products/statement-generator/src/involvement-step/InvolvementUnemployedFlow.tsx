import React from 'react';

import { IInvolvementUnemployedState } from 'contexts/FormStateProps';

import FlowNavigation from 'page-layout/FlowNavigation';
import Textarea from 'components/Textarea';
import RadioGroup from 'components/RadioGroup';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementUnemployedStepProps {
  stepState: IInvolvementUnemployedState;
  setFormState: (value: any) => void;
}

const InvolvementUnemployedFlow = ({
  stepState,
  setFormState,
}: IInvolvementUnemployedStepProps) => {
  const utilityClasses = useUtilityStyles();

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

  const unemploymentDescriptionValid = stepState.unemploymentDescription !== '';
  const wouldClearanceHelpValid = stepState.wouldClearanceHelp !== '';
  const isNextDisabled =
    !unemploymentDescriptionValid || !wouldClearanceHelpValid;

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        Please describe why you are having trouble finding work. (2-3 sentences
        suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ unemploymentDescription: evt.target.value })
          }
          inputName="unemploymentDescription"
          placeholder="I have been having trouble finding work because..."
          multi={false}
          isValid={unemploymentDescriptionValid}
          defaultValue={stepState.unemploymentDescription}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Do you believe that having your record cleared would help you find a job
        and be more involved in your community?
        <RadioGroup
          labels={['Yes', 'No']}
          inputName="wouldClearanceHelp"
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ wouldClearanceHelp: evt.target.value })
          }
          activeRadio={stepState.wouldClearanceHelp}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </div>
  );
};

export default InvolvementUnemployedFlow;
