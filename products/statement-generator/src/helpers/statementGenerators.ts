import { IStepState } from 'contexts/FormStateProps';

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateIntroduction(formState: IStepState): string {
  const { introduction } = formState;

  const firstSentence =
    'Thank you so much for taking the time to read my letter.';

  const nameSentence =
    introduction.fullName !== '' && introduction.age !== ''
      ? `My name is ${introduction.fullName}, and I am ${introduction.age} years old.`
      : '';

  const veteranSentance =
    introduction.isVeteran === 'Yes'
      ? 'I am also a proud veteran of the United States Armed Forces.'
      : '';

  return `${firstSentence} ${nameSentence} ${veteranSentance}`;
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

  return `Since my conviction, I have been working at ${companyName} as a ${jobTitle}. At ${companyName}, ${jobDescription}`;
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

  return `I have also been really involved in community service. In particular, I’ve been working with ${organizationName}. ${serviceDescription}`;
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

  return `Since my conviction, I have gotten serious about my recovery. I am involved with ${recoveryName}. ${recoveryDescription}`;
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

  return `Since my conviction, I have begun attending ${schoolName}, where I have been studying ${studyName}. ${passionDescription}`;
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

  return `Since my conviction, I have prioritized my parenting. ${numberChildrenDescription} ${parentDescription}`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementUnemployed(formState: IStepState): string {
  const {
    unemployedState: { unemploymentDescription },
  } = formState;

  if (unemploymentDescription === '') {
    return '';
  }

  return `Since my conviction, ${unemploymentDescription} I believe that having my record cleared would help me find a job and be more involved in my community.`;
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

  return `${goals} To work towards my goals, ${goalsHow} Having my record cleared would help me achieve these goals for my future.`;
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

  return `I want to clear my record because ${clearRecordWhy} ${clearRecordHow} Getting my record cleared will have a major impact on my life.`;
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
