export interface IStepProps {
  formState: IStepState;
  setFormState: (value: any) => void;
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
  statements: IStatementState;
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
  statements: {
    introduction: '',
    job: '',
    service: '',
    recovery: '',
    school: '',
    parenting: '',
    unemployed: '',
    goals: '',
    why: '',
  },
};

export interface IIntroductionState {
  fullName: string;
  age: string;
  isVeteran: string;
}

// involvement checkboxes
export interface IInvolvementInitialState {
  isJobChecked?: boolean;
  isRecoveryChecked?: boolean;
  isSchoolChecked?: boolean;
  isParentingChecked?: boolean;
  isCommunityChecked?: boolean;
  isNoneChecked?: boolean;
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

export interface IStatementState {
  introduction: string;
  job: string;
  service: string;
  recovery: string;
  school: string;
  parenting: string;
  unemployed: string;
  goals: string;
  why: string;
}

export const sampleStepState = {
  introduction: {
    fullName: 'Daniel Xiao',
    age: '29',
    isVeteran: 'Yes',
  },
  involvementInitialState: {
    isJobChecked: true,
    isCommunityChecked: true,
    isRecoveryChecked: true,
    isSchoolChecked: false,
    isParentingChecked: false,
    isNoneChecked: false,
  },
  involvementJobState: {
    companyName: 'Cool Company',
    jobTitle: 'Big Boss',
    jobDescription: 'I make the decisions on what the biggest cake should be.',
  },
  involvementServiceState: {
    organizationName: 'Taste Tester',
    serviceDescription: 'I check cakes for poison. It is a very serious job.',
  },
  involvementRecoveryState: {
    recoveryName: 'Addicts Anonymous',
    recoveryDescription:
      'I go to a meeting every week to help me overcome my addiction to poisons.',
  },
  involvementSchoolState: {
    schoolName: 'Villians University',
    studyName: 'Chemistry',
    passionDescription: 'I always liked looking at how chemicals affected ',
  },
  involvementParentingState: {
    childName: 'Cyanide Nx11',
    parentYears: '11',
    parentDescription:
      'I have been taking care of my baby for over 11 years. I hope that this will be the best one ever.',
  },
  involvementUnemployedState: {
    unemploymentDescription:
      'I have not been able to find any jobs that are not about licking or eating things.',
    wouldClearanceHelp: 'Yes',
  },
  goalsStep: {
    goals: 'I want to get a new job so I do not have to eat any more poison.',
    goalsHow: 'I am learning new ways to work that go beyond eating.',
  },
  whyStep: {
    clearRecordWhy: 'It will help me make a better life for me and my family.',
    clearRecordHow:
      'If my record no longer says I have poison resistance, I can be hired for other jobs.',
  },
};
