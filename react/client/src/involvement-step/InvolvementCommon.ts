// entire thing
export interface IInvolvementState {
  currentStep: string; // StepEnum

  involvementState: IInvolvementCheckboxState;
  jobState: IInvolvementJobState;
  serviceState?: IInvolvementServiceState;
  recoveryState?: IInvolvementRecoveryState;
  schoolState?: IInvolvementSchoolState;
  parentingState?: IInvolvementParentingState;
  unemployedState?: IInvolvementUnemployedState;
}

//
export const StepEnum = {
  INITIAL: 'INVOLVEMENT.STEP.INITIAL',
  JOB: 'INVOLVEMENT.STEP.JOB',
  SERVICE: 'INVOLVEMENT.STEP.SERVICE',
  RECOVERY: 'INVOLVEMENT.STEP.RECOVERY',
  SCHOOL: 'INVOLVEMENT.STEP.SCHOOL',
  PARENTING: 'INVOLVEMENT.STEP.PARENTING',
  UNEMPLOYED: 'INVOLVEMENT.STEP.UNEMPLOYED',
};

// step 2 initial
export interface IInvolvementCheckboxState {
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

// step 2b
export interface IInvolvementServiceState {
  organizationName: string;
  serviceDescription: string;
}

// step 2c
export interface IInvolvementRecoveryState {
  recoveryName: string;
  recoveryDescription: string;
}

// step 2d
export interface IInvolvementSchoolState {
  schoolName: string;
  studyName: string;
  passionDescription: string;
}

// step 2e
export interface IInvolvementParentingState {
  childName: string;
  parentYears: number;
  parentDescription: string;
}

// step 2f
export interface IInvolvementUnemployedState {
  unemploymentDescription: string;
  wouldClearanceHelp: string;
}

export interface ICheckboxFlowProps {
  state: IInvolvementCheckboxState;
  onChangeState: (newState: object) => void;
}

export interface IJobFlowProps {
  setInputs: (value: any) => void;
  inputs: userInputs;
  goNextPage: () => void;
  goBackPage: () => void;

  // state: IInvolvementJobState;
  // onChangeState: (newState: object) => void;
}

export interface IInvolvementUnemployedFlowProps {
  setInputs: (value: any) => void;
  inputs: userInputs;
  goNextPage: () => void;
  goBackPage: () => void;
}
