import { IStepState } from 'contexts/FormStateProps';

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function generateIntroduction(formState: IStepState): String {
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
export function generateInvolvementJob(formState: IStepState): String {
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
export function generateInvolvementCommunity(formState: IStepState): String {
  const {
    involvementServiceState: { organizationName, serviceDescription },
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
export function generateInvolvementRecovery(formState: IStepState): String {
  const {
    involvementRecoveryState: { recoveryName, recoveryDescription },
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
export function generateInvolvementSchool(formState: IStepState): String {
  const {
    involvementSchoolState: { schoolName, studyName, passionDescription },
  } = formState;

  if (schoolName === '' || studyName === '' || passionDescription === '') {
    return '';
  }

  return `Since my conviction, I have begun attending school at ${schoolName}, where I have been studying ${studyName}. ${passionDescription}`;
}

