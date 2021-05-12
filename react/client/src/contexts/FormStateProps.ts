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
  setFormState: (value: any) => void;
  formState: IStepState;
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
}

export const defaultStepState = {
  introduction: {
    name: '',
    age: null,
    isVeteran: false,
  },
};

export interface IIntroductionState {
  name: string;
  age: number | null;
  isVeteran: boolean;
}
