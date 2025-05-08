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

  const veteranSentence =
    introduction.isVeteran === 'Yes'
      ? 'I am also a proud veteran of the United States Armed Forces.'
      : '';

  return `${nameSentence} ${veteranSentence} ${lastSentence}`;
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

  // Determine the correct article "a" or "an" based on the first letter of the jobTitle
  const article = generateArticle(jobTitle);

  return `I have been working at ${companyName} as ${article} ${jobTitle}. At ${companyName}, ${jobDescription}`;
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

  return unemploymentDescription;
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

  return `I have been volunteering with ${organizationName}. At ${organizationName}, ${serviceDescription} `;
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

  return `${recoveryName} has been part of my self-improvement process. ${recoveryDescription}`;
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

  return `I have been attending ${schoolName}, where I have been studying ${studyName}. ${passionDescription}`;
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

  return `${numberChildrenDescription} ${parentDescription}`;
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

  return `I have benefited from ${activityName}. ${activityDescription}`;
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

  return `${goals} To work towards my goals, ${goalsHow}`;
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

  return `${clearRecordWhy} ${clearRecordHow}`;
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

export function capitalizeSentences(text: string): string {
  let formattedText = text.trim();
  formattedText = formattedText.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
    c.toUpperCase()
  );
  if (!/[.!?]$/.test(formattedText)) {
    formattedText += '.';
  }
  return formattedText;
}

export function capitalizeEachWord(text: string): string {
  return text
    .trim()
    .replace(/[.,/#!$%^&*;:?{}=_`~()-]+$/, '') // Remove unwanted punctuation
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

export function removePunctuationAndCapitalizeFirstWord(text: string): string {
  let formattedText = text.trim();
  formattedText = formattedText.replace(/[.,/#!$%^&*;:?{}=_`~()-]+$/, '');
  formattedText =
    formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
  return formattedText;
}

export function removePunctuation(text: string): string {
  return text.trim().replace(/[.,/#!$%^&*;:?{}=_`~()-]+$/, '');
}

export function generateArticle(word: string): string {
  return /^[aeiou]/i.test(word) ? 'an' : 'a';
}

export function capitalizeStandaloneI(text: string): string {
  return text.replace(/\bi\b/g, 'I');
}
