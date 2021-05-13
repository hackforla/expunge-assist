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
  involvementServiceState: IInvolvementServiceState;
  involvementRecoveryState: IInvolvementRecoveryState;
  involvementSchoolState: IInvolvementSchoolState;
  involvementParentingState: IInvolvementParentingState;
  involvementUnemployedState: IInvolvementUnemployedState;
  goalsStep: IGoalsState;
  whyStep: IWhyStepState;
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
  involvementServiceState: {
    organizationName: '',
    serviceDescription: '',
  },
  involvementRecoveryState: {
    recoveryName: '',
    recoveryDescription: '',
  },
  involvementSchoolState: {
    schoolName: '',
    studyName: '',
    passionDescription: '',
  },
  involvementParentingState: {
    childName: '',
    parentYears: '',
    parentDescription: '',
  },
  involvementUnemployedState: {
    unemploymentDescription: '',
    wouldClearanceHelp: '',
  },
  goalsStep: {
    goals: '',
    goalsHow: '',
  },
  whyStep: {
    clearRecordWhy: '',
    clearRecordHow: '',
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

export interface IGoalsState {
  goals: string;
  goalsHow: string;
}

export interface IWhyStepState {
  clearRecordWhy: string;
  clearRecordHow: string;
}
