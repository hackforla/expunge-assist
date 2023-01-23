import { IStepState } from 'contexts/FormStateProps';

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateIntroduction(formState: IStepState): string {
  const { introduction } = formState;

  const lastSentence =
    'Thank you for considering my case to expunge my criminal record.';

  const nameSentence =
    introduction.fullName !== '' && introduction.age !== ''
      ? `My name is ${introduction.fullName}, and I am ${introduction.age} years old.`
      : '';

  const veteranSentance =
    introduction.isVeteran === 'Yes'
      ? 'I am also a proud veteran of the United States Armed Forces.'
      : '';

  return `${nameSentence} ${veteranSentance} ${lastSentence}`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementJob(formState: IStepState): string {
  const {
    involvementJobState: { companyName, jobTitle, jobDescription },
  } = formState;

  if (!formState.involvement.isJobChecked) {
    return '';
  }

  if (companyName === '' || jobTitle === '' || jobDescription === '') {
    return '';
  }

  return `I have been working at ${companyName} as a ${jobTitle}. At ${companyName}, ${jobDescription} Having my record cleared would help me continue to advance in my career.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementUnemployment(formState: IStepState): string {
  const {
    unemploymentState: { unemploymentDescription },
  } = formState;

  if (!formState.involvement.isUnemploymentChecked) {
    return '';
  }

  if (unemploymentDescription === '') {
    return '';
  }

  return `Finding employment hasn’t been easy with a conviction on my record. ${unemploymentDescription} Having my record cleared would help me find a job and be more self-sufficient.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementCommunity(formState: IStepState): string {
  const {
    communityServiceState: { organizationName, serviceDescription },
  } = formState;

  if (!formState.involvement.isCommunityChecked) {
    return '';
  }

  if (organizationName === '' || serviceDescription === '') {
    return '';
  }

  return `I have been volunteering with ${organizationName}. At ${organizationName}, ${serviceDescription} Serving others has been fulfilling for me. `;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementRecovery(formState: IStepState): string {
  const {
    recoveryState: { recoveryName, recoveryDescription },
  } = formState;

  if (!formState.involvement.isRecoveryChecked) {
    return '';
  }

  if (recoveryName === '' || recoveryDescription === '') {
    return '';
  }

  return `${recoveryName} has been part of my self-improvement process. ${recoveryDescription} I believe my involvement in this shows that I am committed to improving my life.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementSchool(formState: IStepState): string {
  const {
    schoolState: { schoolName, studyName, passionDescription },
  } = formState;

  if (!formState.involvement.isSchoolChecked) {
    return '';
  }

  if (schoolName === '' || studyName === '' || passionDescription === '') {
    return '';
  }

  return `Education is important to me. I have been attending ${schoolName}, where I have been studying ${studyName}. ${passionDescription} Furthering my education has been significant in my life.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementParenting(formState: IStepState): string {
  const {
    parentingState: { numberChildren, parentDescription },
  } = formState;

  if (!formState.involvement.isParentingChecked) {
    return '';
  }

  if (numberChildren === '' || parentDescription === '') {
    return '';
  }

  const numberChildrenDescription =
    Number(numberChildren) > 1
      ? `I have ${numberChildren} children.`
      : `I have 1 child.`;

  return `I have been prioritizing my parenting. ${numberChildrenDescription} ${parentDescription} Focusing on parenting has changed my life for the better.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementSomethingElse(
  formState: IStepState
): string {
  const {
    somethingElseState: { activityDescription, activityName },
  } = formState;

  if (activityDescription === '') {
    return '';
  }

  return `I have benefited from ${activityName}. ${activityDescription} This has been important to me personally as I work towards my goals. `;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateFutureGoals(formState: IStepState): string {
  const {
    goalsState: { goals, goalsHow },
  } = formState;

  if (goals === '' || goalsHow === '') {
    return '';
  }

  return `I believe my activities support my case for expungement by showing that I am committed to being a productive citizen. I have also set important goals for myself. ${goals} To work towards my goals, ${goalsHow} This is important to me and the future I want for myself.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateWhy(formState: IStepState): string {
  const {
    whyState: { clearRecordWhy, clearRecordHow },
  } = formState;

  if (clearRecordWhy === '' || clearRecordHow === '') {
    return '';
  }

  return `Getting my record cleared would have a major impact on my life. ${clearRecordWhy} ${clearRecordHow} Thank you for considering my case.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateClosing(formState: IStepState): string {
  const {
    introduction: { fullName },
  } = formState;

  return `Sincerely,\n\n${fullName}`;
}
