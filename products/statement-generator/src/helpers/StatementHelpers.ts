import { IStepState } from 'contexts/FormStateProps';

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateIntroduction(formState: IStepState): string {
  const { introduction } = formState;

  const firstSentence =
    'Thank you so much for taking the time to read my personal statement.';

  const nameSentence =
    introduction.fullName !== '' && introduction.age !== ''
      ? `My name is ${introduction.fullName}, and I am ${introduction.age} years old.`
      : '';

  const veteranSentance =
    introduction.isVeteran === 'Yes'
      ? 'I am also a proud veteran of the United States Armed Forces'
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

  if (recoveryName === '' || recoveryDescription === '') {
    return '';
  }

  return `Since my conviction, I have gotten really serious about my recovery. I am very involved with ${recoveryName}. ${recoveryDescription}`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementSchool(formState: IStepState): string {
  const {
    schoolState: { schoolName, studyName, passionDescription },
  } = formState;

  if (schoolName === '' || studyName === '' || passionDescription === '') {
    return '';
  }

  return `Since my conviction, I have begun attending school at ${schoolName}, where I have been studying ${studyName}. ${passionDescription}`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementParenting(formState: IStepState): string {
  const {
    parentingState: { childName, parentYears, parentDescription },
  } = formState;

  if (childName === '' || parentYears === '' || parentDescription === '') {
    return '';
  }

  return `Since my conviction, I have really prioritized being a great parent. My child, ${childName}, is ${parentYears} years old, and I love them so much. ${parentDescription}`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateInvolvementUnemployed(formState: IStepState): string {
  const {
    involvementUnemployedState: { unemploymentDescription, wouldClearanceHelp },
  } = formState;

  if (unemploymentDescription === '' || wouldClearanceHelp === '') {
    return '';
  }

  const wouldHelpText = wouldClearanceHelp === 'Yes' ? 'would' : 'would not';
  return `Since my conviction, ${unemploymentDescription}. I beleive that having my record cleared ${wouldHelpText} help me find a job and be more involved in my community.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateFutureGoals(formState: IStepState): string {
  const {
    goalsStep: { goals, goalsHow },
  } = formState;

  if (goals === '' || goalsHow === '') {
    return '';
  }

  return `${goals} To work towards my goals, ${goalsHow}. Having my record cleared would help me achieve these goals for my future.`;
}

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateWhy(formState: IStepState): string {
  const {
    whyStep: { clearRecordWhy, clearRecordHow },
  } = formState;

  if (clearRecordWhy === '' || clearRecordHow === '') {
    return '';
  }

  return `I want to clear my record because ${clearRecordWhy} ${clearRecordHow} Getting my record cleared will have a major impact on my life.`;
}
