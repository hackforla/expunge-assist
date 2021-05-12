import {
  IInvolvementCheckboxState,
  IInvolvementJobState,
  IInvolvementServiceState,
  IInvolvementRecoveryState,
  IInvolvementSchoolState,
  IInvolvementParentingState,
  IInvolvementUnemployedState,
} from 'involvement-step/InvolvementCommon';

export interface IStepProps {
  formState: IStepState;
  setFormState: (value: any) => void;
  goNextPage: () => void;
  goBackPage: () => void;
}

export interface IStepState {
  introduction: IIntroductionState;
  involvementCheckboxState?: IInvolvementCheckboxState;
  involvementJobState?: IInvolvementJobState;
  involvementServiceState?: IInvolvementServiceState;
  involvementRecoveryState?: IInvolvementRecoveryState;
  involvementSchoolState?: IInvolvementSchoolState;
  involvementParentingState?: IInvolvementParentingState;
  involvementUnemployedState?: IInvolvementUnemployedState;
  goalsStep: IGoalsState;
}

export const defaultStepState = {
  introduction: {
    fullName: '',
    age: '',
    isVeteran: '',
  },
  goalsStep: {
    goals: '',
    goalsHow: '',
  },
};

export interface IIntroductionState {
  fullName: string;
  age: string;
  isVeteran: string;
}

export interface IGoalsState {
  goals: string;
  goalsHow: string;
}
