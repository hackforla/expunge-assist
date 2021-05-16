import { IStepState } from 'contexts/FormStateProps';

/**
 * this constant that references a step in the form
 *
 * @type PageEnum
 */
export const PAGE_ENUMS = {
  NONE: 'PAGE_ENUMS.NONE',
  BEFORE_YOU_BEGIN: 'PAGE_ENUMS.BEFORE_YOU_BEGIN',
  INTRODUCTION: 'PAGE_ENUMS.INTRODUCTION',
  INVOLVEMENT: {
    INITIAL: 'PAGE_ENUMS.INVOLVEMENT.INITIAL',
    JOB: 'PAGE_ENUMS.INVOLVEMENT.JOB',
    COMMUNITY_SERVICE: 'PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE',
    RECOVERY: 'PAGE_ENUMS.INVOLVEMENT.RECOVERY',
    SCHOOL: 'PAGE_ENUMS.INVOLVEMENT.SCHOOL',
    PARENTING: 'PAGE_ENUMS.INVOLVEMENT.PARENTING',
    UNEMPLOYED: 'PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED',
  },
  GOALS: 'PAGE_ENUMS.GOALS',
  WHY: 'PAGE_ENUMS.WHY',
  FINALIZE: 'PAGE_ENUMS.FINALIZE',
  PREVIEWING: 'PAGE_ENUMS.PREVIEWING',
  EDITING: 'PAGE_ENUMS.EDITING',
  DOWNLOAD: 'PAGE_ENUMS.DOWNLOAD',
};

/**
 * map of a constant to the page url
 *
 * @type PAGES
 */
export const PAGES = {
  [PAGE_ENUMS.NONE]: '',
  [PAGE_ENUMS.BEFORE_YOU_BEGIN]: 'start',
  [PAGE_ENUMS.INTRODUCTION]: 'intro',
  [PAGE_ENUMS.INVOLVEMENT.INITIAL]: 'involvement/initial',
  [PAGE_ENUMS.INVOLVEMENT.JOB]: 'involvement/job',
  [PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE]: 'involvement/service',
  [PAGE_ENUMS.INVOLVEMENT.RECOVERY]: 'involvement/recovery',
  [PAGE_ENUMS.INVOLVEMENT.SCHOOL]: 'involvement/school',
  [PAGE_ENUMS.INVOLVEMENT.PARENTING]: 'involvement/parenting',
  [PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED]: 'involvement/unemployed',
  [PAGE_ENUMS.GOALS]: 'goals',
  [PAGE_ENUMS.WHY]: 'why',
  [PAGE_ENUMS.FINALIZE]: 'finalize',
  [PAGE_ENUMS.EDITING]: 'edit',
  [PAGE_ENUMS.DOWNLOAD]: 'download',
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
 * @param {PageEnum} currentStep
 * @returns {PageEnum}
 */
export function getNextFormStep(currentStep: string, formState?: IStepState) {
  switch (currentStep) {
    case PAGE_ENUMS.NONE:
      return PAGE_ENUMS.BEFORE_YOU_BEGIN;

    case PAGE_ENUMS.BEFORE_YOU_BEGIN:
      return PAGE_ENUMS.INTRODUCTION;

    case PAGE_ENUMS.INTRODUCTION:
      return PAGE_ENUMS.INVOLVEMENT.INITIAL;

    case PAGE_ENUMS.INVOLVEMENT.INITIAL:
      return PAGE_ENUMS.INVOLVEMENT.JOB;

    case PAGE_ENUMS.INVOLVEMENT.JOB:
      return PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE;

    case PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE:
      return PAGE_ENUMS.INVOLVEMENT.RECOVERY;

    case PAGE_ENUMS.INVOLVEMENT.RECOVERY:
      return PAGE_ENUMS.INVOLVEMENT.SCHOOL;

    case PAGE_ENUMS.INVOLVEMENT.SCHOOL:
      return PAGE_ENUMS.INVOLVEMENT.PARENTING;

    case PAGE_ENUMS.INVOLVEMENT.PARENTING:
      return PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED;

    case PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED:
      return PAGE_ENUMS.GOALS;

    case PAGE_ENUMS.GOALS:
      return PAGE_ENUMS.WHY;

    case PAGE_ENUMS.WHY:
      return PAGE_ENUMS.FINALIZE;

    case PAGE_ENUMS.FINALIZE:
    default:
      return PAGE_ENUMS.NONE;
  }
}

/**
 * @param {PageEnum} currentStep
 * @returns {Array<PageEnum>}
 */
export function getNextInvolvementStep(currentStep: string, formState: IStepState) {
  if (formState?.involvementInitialState?.isNoneChecked) {
    return [PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED];
  }

  const availablePages = [];
  if (formState?.involvementInitialState?.isJobChecked) {
    availablePages.push(PAGE_ENUMS.INVOLVEMENT.JOB);
  }
  if (formState?.involvementInitialState?.isRecoveryChecked) {
    availablePages.push(PAGE_ENUMS.INVOLVEMENT.RECOVERY);
  }
  if (formState?.involvementInitialState?.isSchoolChecked) {
    availablePages.push(PAGE_ENUMS.INVOLVEMENT.SCHOOL);
  }
  if (formState?.involvementInitialState?.isParentingChecked) {
    availablePages.push(PAGE_ENUMS.INVOLVEMENT.PARENTING);
  }
  if (formState?.involvementInitialState?.isCommunityChecked) {
    availablePages.push(PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE);
  }

  return availablePages;
}

/**
 * @param {PageEnum} pageEnum
 * @returns {Boolean}
 */
export function isAnInvolvementPage(pageEnum: string) {
  return (
    pageEnum === PAGE_ENUMS.INVOLVEMENT.INITIAL ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.JOB ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.RECOVERY ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.SCHOOL ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.PARENTING ||
    pageEnum === PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED
  );
}