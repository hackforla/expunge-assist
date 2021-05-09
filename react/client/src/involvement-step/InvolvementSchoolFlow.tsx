import React, { useState } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import { IInvolvementSchoolState } from 'involvement-step/InvolvementCommon';

import useUtilityStyles from 'styles/utilityStyles';

const InvolvementSchoolFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: StepProps) => {
  const utilityClasses = useUtilityStyles();
  const [state, setState] = useState<IInvolvementSchoolState>({
    schoolName: '',
    studyName: '',
    passionDescription: '',
  });

  const updateFlowState = (changes: object) => {
    const newState = {
      ...state,
      ...changes,
    };
    setState(newState);
    setInputs(inputs); // todo
  };

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What is the name of the school you are attending?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ schoolName: evt.target.value })
          }
          inputName="schoolName"
          placeholder="Name of School"
          multi={false}
          isValid
          defaultValue={state.schoolName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What are you currently studying?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ studyName: evt.target.value })
          }
          inputName="studyName"
          placeholder="Name of Subject/Study Area"
          multi={false}
          isValid
          defaultValue={state.studyName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why are you passionate about studying this? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ passionDescription: evt.target.value })
          }
          inputName="passionDescription"
          placeholder="I am passionate about..."
          multi
          isValid
          defaultValue={state.passionDescription}
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementSchoolFlow;
