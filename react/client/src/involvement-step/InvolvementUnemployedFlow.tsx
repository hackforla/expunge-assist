import React, { useState } from 'react';

import { IStepProps } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';
import RadioGroup from 'components/RadioGroup';

import { IInvolvementUnemployedState } from 'involvement-step/InvolvementCommon';

import useUtilityStyles from 'styles/utilityStyles';

const InvolvementUnemployedFlow = ({
  formState,
  setFormState,
  goNextPage,
  goBackPage,
}: IStepProps) => {
  const utilityClasses = useUtilityStyles();
  const [state, setState] = useState<IInvolvementUnemployedState>({
    unemploymentDescription: '',
    wouldClearanceHelp: '',
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
        Please describe why you are having trouble finding work. (2-3 sentences
        suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ unemploymentDescription: evt.target.value })
          }
          inputName="unemploymentDescription"
          placeholder="I have been having trouble finding work because..."
          multi={false}
          isValid
          defaultValue={state.unemploymentDescription}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Do you believe that having your record cleared would help you find a job
        and be more involved in your community?
        <RadioGroup
          labels={['Yes', 'No']}
          inputName="wouldClearanceHelp"
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ wouldClearanceHelp: evt.target.value })
          }
          activeRadio={state.wouldClearanceHelp}
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementUnemployedFlow;
