import { IStepState } from 'contexts/FormStateProps';

/**
 * this constant that references a step in the form
 *
 * @type StepEnum
 */
export const STEP_ENUMS = {
  NONE: 'STEP_ENUMS.NONE',
  BEFORE_YOU_BEGIN: 'STEP_ENUMS.BEFORE_YOU_BEGIN',
  INTRODUCTION: 'STEP_ENUMS.INTRODUCTION',
  INVOLVEMENT: {
    INITIAL: 'STEP_ENUMS.INVOLVEMENT.INITIAL',
    JOB: 'STEP_ENUMS.INVOLVEMENT.JOB',
    COMMUNITY_SERVICE: 'STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE',
    RECOVERY: 'STEP_ENUMS.INVOLVEMENT.RECOVERY',
    SCHOOL: 'STEP_ENUMS.INVOLVEMENT.SCHOOL',
    PARENTING: 'STEP_ENUMS.INVOLVEMENT.PARENTING',
    UNEMPLOYED: 'STEP_ENUMS.INVOLVEMENT.UNEMPLOYED',
  },
  GOALS: 'STEP_ENUMS.GOALS',
  WHY: 'STEP_ENUMS.WHY',
  FINALIZE: 'STEP_ENUMS.FINALIZE',
  PREVIEWING: 'STEP_ENUMS.PREVIEWING',
  EDITING: 'STEP_ENUMS.EDITING',
  DOWNLOAD: 'STEP_ENUMS.DOWNLOAD',
};

/**
 * map of a constant to the page url
 *
 * @type PAGES
 */
export const PAGES = {
  [STEP_ENUMS.NONE]: '',
  [STEP_ENUMS.BEFORE_YOU_BEGIN]: 'start',
  [STEP_ENUMS.INTRODUCTION]: 'intro',
  [STEP_ENUMS.INVOLVEMENT.INITIAL]: 'involvement/initial',
  [STEP_ENUMS.INVOLVEMENT.JOB]: 'involvement/job',
  [STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE]: 'involvement/service',
  [STEP_ENUMS.INVOLVEMENT.RECOVERY]: 'involvement/recovery',
  [STEP_ENUMS.INVOLVEMENT.SCHOOL]: 'involvement/school',
  [STEP_ENUMS.INVOLVEMENT.PARENTING]: 'involvement/parenting',
  [STEP_ENUMS.INVOLVEMENT.UNEMPLOYED]: 'involvement/unemployed',
  [STEP_ENUMS.GOALS]: 'goals',
  [STEP_ENUMS.WHY]: 'why',
  [STEP_ENUMS.FINALIZE]: 'finalize',
  [STEP_ENUMS.EDITING]: 'edit',
  [STEP_ENUMS.DOWNLOAD]: 'download',
};

/**
 * map of PAGES to a PAGE_ENUM
 *
 * @type URL
 */
export const URL: { [key: string]: string } = {};
Object.keys(PAGES).forEach((pageKey) => {
  const pageValue = PAGES[pageKey];
  URL[pageValue] = pageKey;
});

/**
 * @param {StepEnum} currentStep
 * @returns {StepEnum}
 */
export function getNextFormStep(currentStep: string, formState?: IStepState) {
  switch (currentStep) {
    case STEP_ENUMS.NONE:
      return STEP_ENUMS.BEFORE_YOU_BEGIN;

    case STEP_ENUMS.BEFORE_YOU_BEGIN:
      return STEP_ENUMS.INTRODUCTION;

    case STEP_ENUMS.INTRODUCTION:
      return STEP_ENUMS.INVOLVEMENT.INITIAL;

    case STEP_ENUMS.INVOLVEMENT.INITIAL:
      return STEP_ENUMS.INVOLVEMENT.JOB;

    case STEP_ENUMS.INVOLVEMENT.JOB:
      return STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE;

    case STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE:
      return STEP_ENUMS.INVOLVEMENT.RECOVERY;

    case STEP_ENUMS.INVOLVEMENT.RECOVERY:
      return STEP_ENUMS.INVOLVEMENT.SCHOOL;

    case STEP_ENUMS.INVOLVEMENT.SCHOOL:
      return STEP_ENUMS.INVOLVEMENT.PARENTING;

    case STEP_ENUMS.INVOLVEMENT.PARENTING:
      return STEP_ENUMS.INVOLVEMENT.UNEMPLOYED;

    case STEP_ENUMS.INVOLVEMENT.UNEMPLOYED:
      return STEP_ENUMS.GOALS;

    case STEP_ENUMS.GOALS:
      return STEP_ENUMS.WHY;

    case STEP_ENUMS.WHY:
      return STEP_ENUMS.FINALIZE;

    case STEP_ENUMS.FINALIZE:
    default:
      return STEP_ENUMS.NONE;
  }
}

/**
 * @param {StepEnum} currentStep
 * @returns {Array<StepEnum>}
 */
export function getNextInvolvementStep(
  currentStep: string,
  formState: IStepState
) {
  if (formState?.involvementInitialState?.isNoneChecked) {
    return [STEP_ENUMS.INVOLVEMENT.UNEMPLOYED];
  }

  const availablePages = [];
  if (formState?.involvementInitialState?.isJobChecked) {
    availablePages.push(STEP_ENUMS.INVOLVEMENT.JOB);
  }
  if (formState?.involvementInitialState?.isRecoveryChecked) {
    availablePages.push(STEP_ENUMS.INVOLVEMENT.RECOVERY);
  }
  if (formState?.involvementInitialState?.isSchoolChecked) {
    availablePages.push(STEP_ENUMS.INVOLVEMENT.SCHOOL);
  }
  if (formState?.involvementInitialState?.isParentingChecked) {
    availablePages.push(STEP_ENUMS.INVOLVEMENT.PARENTING);
  }
  if (formState?.involvementInitialState?.isCommunityChecked) {
    availablePages.push(STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE);
  }

  return availablePages;
}

/**
 * @param {StepEnum} currentStep
 * @returns {Boolean}
 */
export function isAnInvolvementPage(currentStep: string) {
  return (
    currentStep === STEP_ENUMS.INVOLVEMENT.INITIAL ||
    currentStep === STEP_ENUMS.INVOLVEMENT.JOB ||
    currentStep === STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE ||
    currentStep === STEP_ENUMS.INVOLVEMENT.RECOVERY ||
    currentStep === STEP_ENUMS.INVOLVEMENT.SCHOOL ||
    currentStep === STEP_ENUMS.INVOLVEMENT.PARENTING ||
    currentStep === STEP_ENUMS.INVOLVEMENT.UNEMPLOYED
  );
}
