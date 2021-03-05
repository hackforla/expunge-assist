// entire thing
export interface IInvolvementState {
  involvementState: IInvolvementCheckboxState;
  jobState: IInvolvementJobState;
  serviceState: IInvolvementServiceState;
  recoveryState: IInvolvementRecoveryState;
  schoolState: IInvolvementSchoolState;
  parentingState: IInvolvementParentingState;
  unemployedState: IInvolvementUnemployedState;
}

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
  wouldClearanceHelp: boolean;
}

export interface ICheckboxFlowProps {
  state: IInvolvementCheckboxState;
  onChangeState: (newState: object) => void;
}

export interface IJobFlowProps {
  state: IInvolvementJobState;
  onChangeState: (newState: object) => void;
}
