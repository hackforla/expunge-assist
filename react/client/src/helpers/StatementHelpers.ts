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
