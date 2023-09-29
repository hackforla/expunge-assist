export interface IStepProps {
  formState: IStepState;
  setFormState: (value: any) => void;
}

export interface IStepState {
  introduction: IIntroductionState;
  involvement: IInvolvementInitialState;
  involvementJobState: IInvolvementJobState;
  communityServiceState: ICommunityServiceState;
  somethingElseState: ISomethingElseState;
  recoveryState: IRecoveryState;
  schoolState: ISchoolState;
  parentingState: IParentingState;
  unemploymentState: IUnemploymentState;
  goalsState: IGoalsState;
  whyState: IWhyState;
  statements: IStatementState;
}

export const defaultStepState = {
  introduction: {
    fullName: '',
    age: '',
    isVeteran: '',
  },
  involvement: {
    isJobChecked: false,
    isRecoveryChecked: false,
    isSchoolChecked: false,
    isParentingChecked: false,
    isCommunityChecked: false,
    isSomethingElseChecked: false,
    isUnemploymentChecked: false,
  },
  involvementJobState: {
    companyName: '',
    jobTitle: '',
    jobDescription: '',
  },
  communityServiceState: {
    organizationName: '',
    serviceDescription: '',
  },
  recoveryState: {
    recoveryName: '',
    recoveryDescription: '',
  },
  schoolState: {
    schoolName: '',
    studyName: '',
    passionDescription: '',
  },
  parentingState: {
    numberChildren: '',
    parentDescription: '',
  },
  somethingElseState: {
    activityName: '',
    activityDescription: '',
  },
  unemploymentState: {
    unemploymentDescription: '',
  },
  goalsState: {
    goals: '',
    goalsHow: '',
  },
  whyState: {
    clearRecordWhy: '',
    clearRecordHow: '',
  },
  statements: {
    heading: '',
    introduction: '',
    job: '',
    service: '',
    recovery: '',
    school: '',
    parenting: '',
    unemployment: '',
    somethingElse: '',
    goals: '',
    why: '',
    closing: '',
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
  isUnemploymentChecked?: boolean;
  isRecoveryChecked?: boolean;
  isSchoolChecked?: boolean;
  isSomethingElseChecked?: boolean;
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
export interface ICommunityServiceState {
  organizationName: string;
  serviceDescription: string;
}
// step 2c
export interface IRecoveryState {
  recoveryName: string;
  recoveryDescription: string;
}
// step 2d
export interface ISchoolState {
  schoolName: string;
  studyName: string;
  passionDescription: string;
}
// step 2e
export interface IParentingState {
  numberChildren: string;
  parentDescription: string;
}
export interface ISomethingElseState {
  activityName: string;
  activityDescription: string;
}
// step 2f
export interface IUnemploymentState {
  unemploymentDescription: string;
}

export interface IGoalsState {
  goals: string;
  goalsHow: string;
}

export interface IWhyState {
  clearRecordWhy: string;
  clearRecordHow: string;
}

export interface IStatementState {
  [key: string]: string;
  introduction: string;
  job: string;
  service: string;
  recovery: string;
  school: string;
  parenting: string;
  unemployment: string;
  somethingElse: string;
  goals: string;
  why: string;
  closing: string;
}

export const sampleStepState = {
  introduction: {
    fullName: process.env.REACT_APP_FULL_NAME,
    age: process.env.REACT_APP_AGE,
    isVeteran: process.env.REACT_APP_IS_VETERAN,
  },
  involvement: {
    isJobChecked: process.env.REACT_APP_IS_JOB_CHECKED,
    isCommunityChecked: process.env.REACT_APP_IS_COMMUNITY_CHECKED,
    isRecoveryChecked: process.env.REACT_APP_IS_RECOVERY_CHECKED,
    isSchoolChecked: process.env.REACT_APP_IS_SCHOOL_CHECKED,
    isParentingChecked: process.env.REACT_APP_IS_PARENTING_CHECKED,
    isNoneChecked: process.env.REACT_APP_IS_NONE_CHECKED,
  },
  involvementJobState: {
    companyName: process.env.REACT_APP_COMPANY_NAME,
    jobTitle: process.env.REACT_APP_JOB_TITLE,
    jobDescription: process.env.REACT_APP_JOB_DESCRIPTION,
  },
  communityServiceState: {
    organizationName: process.env.REACT_APP_ORGANIZATION_NAME,
    serviceDescription: process.env.REACT_APP_SERVICE_DESCRIPTION,
  },
  recoveryState: {
    recoveryName: process.env.REACT_APP_RECOVERY_NAME,
    recoveryDescription: process.env.REACT_APP_RECOVERY_DESCRIPTION,
  },
  schoolState: {
    schoolName: process.env.REACT_APP_SCHOOL_NAME,
    studyName: process.env.REACT_APP_STUDY_NAME,
    passionDescription: process.env.REACT_APP_PASSION_DESCRIPTION,
  },
  parentingState: {
    numberChildren: process.env.REACT_APP_NUMBER_CHILDREN,
    parentDescription: process.env.REACT_APP_PARENT_DESCRIPTION,
  },
  unemploymentState: {
    unemploymentDescription: process.env.REACT_APP_UNEMPLOYMENT_DESCRIPTION,
  },
  goalsState: {
    goals: process.env.REACT_APP_GOALS,
    goalsHow: process.env.REACT_APP_GOALS_HOW,
  },
  whyState: {
    clearRecordWhy: process.env.REACT_APP_CLEAR_RECORD_WHY,
    clearRecordHow: process.env.REACT_APP_CLEAR_RECORD_HOW,
  },
  statements: {
    heading: process.env.REACT_APP_HEADING,
    closing: process.env.REACT_APP_CLOSING,
  },
};
