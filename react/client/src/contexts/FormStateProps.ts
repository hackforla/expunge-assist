import {
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
  involvementInitialState: IInvolvementInitialState;
  involvementJobState: IInvolvementJobState;
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
  involvementInitialState: {
    isJobChecked: false,
    isRecoveryChecked: false,
    isSchoolChecked: false,
    isParentingChecked: false,
    isCommunityChecked: false,
    isNoneChecked: false,
  },
  involvementJobState: {
    companyName: '',
    jobTitle: '',
    jobDescription: '',
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

// involvement checkboxes
export interface IInvolvementInitialState {
  isJobChecked: boolean;
  isRecoveryChecked: boolean;
  isSchoolChecked: boolean;
  isParentingChecked: boolean;
  isCommunityChecked: boolean;
  isNoneChecked: boolean;
}
// step 2a
export interface IInvolvementJobState {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
}
export interface IGoalsState {
  goals: string;
  goalsHow: string;
}
