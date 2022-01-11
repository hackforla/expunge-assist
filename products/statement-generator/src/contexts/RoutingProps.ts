export enum AppPage {
  None,
  BeforeYouBegin,
  Introduction,
  IntroductionPreview,
  Involvement,
  InvolvementPreview,
  Job,
  JobPreview,
  CommunityService,
  CommunityServicePreview,
  Recovery,
  RecoveryPreview,
  School,
  SchoolPreview,
  Parenting,
  ParentingPreview,
  Unemployed,
  UnemployedPreview,
  Goals,
  GoalsPreview,
  Why,
  WhyPreview,
  Finalize,
  FinalizePreview,
  Editing,
  Download,
  PrivacyPolicy,
  TermsOfUse,
  FAQ,
  AboutUs,
}

/**
 * the reason we have set up this url tracking at all is because of the Involvement page,
 *   where each selection affects what the next page will be and thus what pages are previous
 */
export enum AppUrl {
  Landing = '',
  NotFound = '404',
  BeforeYouBegin = 'start',
  Introduction = 'intro',
  IntroductionPreview = 'introduction/preview',
  Involvement = 'involvement',
  InvolvementPreview = 'involvement',
  Job = 'job',
  JobPreview = 'job',
  CommunityService = 'community-service',
  CommunityServicePreview = 'community-service',
  Recovery = 'recovery',
  RecoveryPreview = 'recovery',
  School = 'school',
  SchoolPreview = 'school',
  Parenting = 'parenting',
  ParentingPreview = 'parenting',
  Unemployed = 'unemployed',
  UnemployedPreview = 'unemployed',
  Goals = 'goals',
  GoalsPreview = 'goals',
  Why = 'why',
  WhyPreview = 'why',
  Finalize = 'finalize',
  FinalizePreview = 'finalize',
  Editing = 'editing',
  Download = 'download',
  PrivacyPolicy = 'privacy-policy',
  TermsOfUse = 'terms-of-use',
  FAQ = 'faq',
  AboutUs = 'about-us',
}

export type AppUrlOrString = AppUrl | string;

const AppUrlList = Object.values(AppUrl);
export function isAppUrl(url: AppUrlOrString): boolean {
  return AppUrlList.includes(url as AppUrl);
}

/**
 * this constant that references a step in the form
 *
 * @type StepEnum
 */
export const STEP_ENUMS = {
  NONE: 'STEP_ENUMS.NONE',
  BEFORE_YOU_BEGIN: 'STEP_ENUMS.BEFORE_YOU_BEGIN',
  INTRODUCTION: 'STEP_ENUMS.INTRODUCTION',
  INTRODUCTION_PREVIEW: 'STEP_ENUMS.INTRODUCTION_PREVIEW',
  INVOLVEMENT: {
    INITIAL: 'STEP_ENUMS.INVOLVEMENT.INITIAL',
    JOB: 'STEP_ENUMS.INVOLVEMENT.JOB',
    JOB_PREVIEW: 'STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW',
    COMMUNITY_SERVICE: 'STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE',
    COMMUNITY_SERVICE_PREVIEW:
      'STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW',
    RECOVERY: 'STEP_ENUMS.INVOLVEMENT.RECOVERY',
    RECOVERY_PREVIEW: 'STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW',
    SCHOOL: 'STEP_ENUMS.INVOLVEMENT.SCHOOL',
    SCHOOL_PREVIEW: 'STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW',
    PARENTING: 'STEP_ENUMS.INVOLVEMENT.PARENTING',
    PARENTING_PREVIEW: 'STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW',
    UNEMPLOYED: 'STEP_ENUMS.INVOLVEMENT.UNEMPLOYED',
    UNEMPLOYED_PREVIEW: 'STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW',
  },
  GOALS: 'STEP_ENUMS.GOALS',
  GOALS_PREVIEW: 'STEP_ENUMS.GOALS_PREVIEW',
  WHY: 'STEP_ENUMS.WHY',
  WHY_PREVIEW: 'STEP_ENUMS.WHY_PREVIEW',
  FINALIZE: 'STEP_ENUMS.FINALIZE',
  FINALIZE_PREVIEW: 'STEP_ENUMS.FINALIZE_PREVIEW',
  EDITING: 'STEP_ENUMS.EDITING',
  DOWNLOAD: 'STEP_ENUMS.DOWNLOAD',

  PRIVACY_POLICY: 'STEP_ENUMS.PRIVACY_POLICY',
  TERMS_OF_USE: 'STEP_ENUMS.TERMS_OF_USE',
  FAQ: 'STEP_ENUMS.FAQ',
  ABOUT_US: 'STEP_ENUMS.ABOUT_US',
};

/**
 * map of a constant to the page url
 *
 * @type PageEnum
 */
export const PAGES = {
  [STEP_ENUMS.NONE]: '',
  [STEP_ENUMS.BEFORE_YOU_BEGIN]: 'start',
  [STEP_ENUMS.INTRODUCTION]: 'intro',
  [STEP_ENUMS.INTRODUCTION_PREVIEW]: 'intro/preview',
  [STEP_ENUMS.INVOLVEMENT.INITIAL]: 'involvement-initial',
  [STEP_ENUMS.INVOLVEMENT.JOB]: 'involvement-job',
  [STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW]: 'involvement-job/preview',
  [STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE]: 'involvement-service',
  [STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW]:
    'involvement-service/preview',
  [STEP_ENUMS.INVOLVEMENT.RECOVERY]: 'involvement-recovery',
  [STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW]: 'involvement-recovery/preview',
  [STEP_ENUMS.INVOLVEMENT.SCHOOL]: 'involvement-school',
  [STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW]: 'involvement-school/preview',
  [STEP_ENUMS.INVOLVEMENT.PARENTING]: 'involvement-parenting',
  [STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW]: 'involvement-parenting/preview',
  [STEP_ENUMS.INVOLVEMENT.UNEMPLOYED]: 'involvement-unemployed',
  [STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW]: 'involvement-unemployed/preview',
  [STEP_ENUMS.GOALS]: 'goals',
  [STEP_ENUMS.GOALS_PREVIEW]: 'goals/preview',
  [STEP_ENUMS.WHY]: 'why',
  [STEP_ENUMS.WHY_PREVIEW]: 'why/preview',
  [STEP_ENUMS.FINALIZE]: 'finalize',
  [STEP_ENUMS.FINALIZE_PREVIEW]: 'finalize/preview',
  [STEP_ENUMS.DOWNLOAD]: 'download',

  [STEP_ENUMS.PRIVACY_POLICY]: 'privacy-policy',
  [STEP_ENUMS.TERMS_OF_USE]: 'terms-of-use',
  [STEP_ENUMS.FAQ]: 'faq',
  [STEP_ENUMS.ABOUT_US]: 'about-us',
};

/**
 * maps PageEnum to StepEnum
 *  eg: 'intro': STEP_ENUMS.INTRODUCTION
 *
 * @type UrlEnum
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
export function getNextFormStep(currentStep: string) {
  switch (currentStep) {
    case STEP_ENUMS.NONE:
      return STEP_ENUMS.BEFORE_YOU_BEGIN;

    case STEP_ENUMS.BEFORE_YOU_BEGIN:
      return STEP_ENUMS.INTRODUCTION;

    case STEP_ENUMS.INTRODUCTION:
      return STEP_ENUMS.INTRODUCTION_PREVIEW;
    case STEP_ENUMS.INTRODUCTION_PREVIEW:
      return STEP_ENUMS.INVOLVEMENT.INITIAL;

    case STEP_ENUMS.INVOLVEMENT.INITIAL:
      return STEP_ENUMS.INVOLVEMENT.JOB;

    case STEP_ENUMS.INVOLVEMENT.JOB:
      return STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW;
    case STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW:
      return STEP_ENUMS.INVOLVEMENT.UNEMPLOYED;

    case STEP_ENUMS.INVOLVEMENT.UNEMPLOYED:
      return STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW;
    case STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW:
      return STEP_ENUMS.INVOLVEMENT.RECOVERY;

    case STEP_ENUMS.INVOLVEMENT.RECOVERY:
      return STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW;
    case STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW:
      return STEP_ENUMS.INVOLVEMENT.SCHOOL;

    case STEP_ENUMS.INVOLVEMENT.SCHOOL:
      return STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW;
    case STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW:
      return STEP_ENUMS.INVOLVEMENT.PARENTING;

    case STEP_ENUMS.INVOLVEMENT.PARENTING:
      return STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW;
    case STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW:
      return STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE;

    case STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE:
      return STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW;
    case STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW:
      return STEP_ENUMS.GOALS;

    case STEP_ENUMS.GOALS:
      return STEP_ENUMS.GOALS_PREVIEW;
    case STEP_ENUMS.GOALS_PREVIEW:
      return STEP_ENUMS.WHY;

    case STEP_ENUMS.WHY:
      return STEP_ENUMS.WHY_PREVIEW;
    case STEP_ENUMS.WHY_PREVIEW:
      return STEP_ENUMS.FINALIZE;

    case STEP_ENUMS.FINALIZE:
      return STEP_ENUMS.FINALIZE_PREVIEW;
    case STEP_ENUMS.FINALIZE_PREVIEW:
      return STEP_ENUMS.DOWNLOAD;

    case STEP_ENUMS.DOWNLOAD:
      return STEP_ENUMS.NONE;

    default:
      return STEP_ENUMS.NONE;
  }
}

/**
 * @param {AppUrl} url
 * @returns {AppUrl}
 */
export function getNextGeneratorUrl(url: AppUrl): AppUrl {
  switch (url) {
    case AppUrl.Landing:
      return AppUrl.BeforeYouBegin;

    case AppUrl.BeforeYouBegin:
      return AppUrl.Introduction;

    case AppUrl.Introduction:
      return AppUrl.IntroductionPreview;
    case AppUrl.IntroductionPreview:
      return AppUrl.Involvement;

    case AppUrl.Involvement:
      return AppUrl.Job;

    case AppUrl.Job:
      return AppUrl.JobPreview;
    case AppUrl.JobPreview:
      return AppUrl.Unemployed;

    case AppUrl.Unemployed:
      return AppUrl.UnemployedPreview;
    case AppUrl.UnemployedPreview:
      return AppUrl.Recovery;

    case AppUrl.Recovery:
      return AppUrl.RecoveryPreview;
    case AppUrl.RecoveryPreview:
      return AppUrl.School;

    case AppUrl.School:
      return AppUrl.SchoolPreview;
    case AppUrl.SchoolPreview:
      return AppUrl.Parenting;

    case AppUrl.Parenting:
      return AppUrl.ParentingPreview;
    case AppUrl.ParentingPreview:
      return AppUrl.CommunityService;

    case AppUrl.CommunityService:
      return AppUrl.CommunityServicePreview;
    case AppUrl.CommunityServicePreview:
      return AppUrl.Goals;

    case AppUrl.Goals:
      return AppUrl.GoalsPreview;
    case AppUrl.GoalsPreview:
      return AppUrl.Why;

    case AppUrl.Why:
      return AppUrl.WhyPreview;
    case AppUrl.WhyPreview:
      return AppUrl.Finalize;

    case AppUrl.Finalize:
      return AppUrl.FinalizePreview;
    case AppUrl.FinalizePreview:
      return AppUrl.Download;

    case AppUrl.Download:
      return AppUrl.Landing;

    default:
      return AppUrl.Landing;
  }
}

/**
 * @param {StepEnum} currentStep
 * @returns {Boolean}
 */
export function isFormPage(currentStep: string) {
  return (
    currentStep === STEP_ENUMS.INTRODUCTION ||
    currentStep === STEP_ENUMS.INTRODUCTION_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.INITIAL ||
    currentStep === STEP_ENUMS.INVOLVEMENT.JOB ||
    currentStep === STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE ||
    currentStep === STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.RECOVERY ||
    currentStep === STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.SCHOOL ||
    currentStep === STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.PARENTING ||
    currentStep === STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.UNEMPLOYED ||
    currentStep === STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW ||
    currentStep === STEP_ENUMS.GOALS ||
    currentStep === STEP_ENUMS.GOALS_PREVIEW ||
    currentStep === STEP_ENUMS.WHY ||
    currentStep === STEP_ENUMS.WHY_PREVIEW ||
    currentStep === STEP_ENUMS.FINALIZE ||
    currentStep === STEP_ENUMS.FINALIZE_PREVIEW
  );
}

/**
 * @param {StepEnum} currentStep
 * @returns {Boolean}
 */
export function isAnInvolvementPage(currentStep: string) {
  return (
    // currentStep === STEP_ENUMS.INVOLVEMENT.INITIAL ||
    currentStep === STEP_ENUMS.INVOLVEMENT.JOB ||
    currentStep === STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE ||
    currentStep === STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.RECOVERY ||
    currentStep === STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.SCHOOL ||
    currentStep === STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.PARENTING ||
    currentStep === STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW ||
    currentStep === STEP_ENUMS.INVOLVEMENT.UNEMPLOYED ||
    currentStep === STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW
  );
}
