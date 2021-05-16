import React from 'react';

import { IInvolvementSchoolState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import useUtilityStyles from 'styles/utilityStyles';

interface IInvolvementSchoolStepProps {
  stepState: IInvolvementSchoolState;
  setFormState: (value: any) => void;
  goNextPage: () => void;
  goBackPage: () => void;
}

const InvolvementSchoolFlow = ({
  stepState,
  setFormState,
  goNextPage,
  goBackPage,
}: IInvolvementSchoolStepProps) => {
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
        What is the name of the school you are attending?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ schoolName: evt.target.value })
          }
          inputName="schoolName"
          placeholder="Name of School"
          multi={false}
          isValid
          defaultValue={stepState.schoolName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What are you currently studying?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ studyName: evt.target.value })
          }
          inputName="studyName"
          placeholder="Name of Subject/Study Area"
          multi={false}
          isValid
          defaultValue={stepState.studyName}
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why are you passionate about studying this? (2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ passionDescription: evt.target.value })
          }
          inputName="passionDescription"
          placeholder="I am passionate about..."
          multi
          isValid
          defaultValue={stepState.passionDescription}
        />
      </div>

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

export default InvolvementSchoolFlow;