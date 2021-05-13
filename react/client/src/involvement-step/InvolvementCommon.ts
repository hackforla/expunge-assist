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
  parentYears: string;
  parentDescription: string;
}

// step 2f
export interface IInvolvementUnemployedState {
  unemploymentDescription: string;
  wouldClearanceHelp: string;
}
