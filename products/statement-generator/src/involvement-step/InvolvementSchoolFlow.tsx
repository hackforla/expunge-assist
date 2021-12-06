import React from 'react';

import { IInvolvementSchoolState } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';
import useUtilityStyles from 'styles/utilityStyles';
import Input from '../components/Input';

interface IInvolvementSchoolStepProps {
  stepState: IInvolvementSchoolState;
  setFormState: (value: any) => void;
}

const InvolvementSchoolFlow = ({
  stepState,
  setFormState,
}: IInvolvementSchoolStepProps) => {
  const utilityClasses = useUtilityStyles();

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

  const schoolNameValid = stepState.schoolName !== '';
  const studyNameValid = stepState.studyName !== '';
  const passionDescriptionValid = stepState.passionDescription !== '';
  const isNextDisabled =
    !schoolNameValid || !studyNameValid || !passionDescriptionValid;

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexColumn}>
        What is the name of the school you are attending?
        <Input
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ schoolName: evt.target.value })
          }
          inputName="schoolName"
          placeholder="Name of School"
          defaultValue={stepState.schoolName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What are you currently studying?
        <Input
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateStepState({ studyName: evt.target.value })
          }
          inputName="studyName"
          placeholder="Name of Subject/Study Area"
          disabled={!schoolNameValid}
          defaultValue={stepState.studyName}
          type="text"
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
          isValid={passionDescriptionValid}
          disabled={!studyNameValid}
          defaultValue={stepState.passionDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </div>
  );
};

export default InvolvementSchoolFlow;
