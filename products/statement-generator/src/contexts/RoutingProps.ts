export interface RoutingContextProps {
  goNextPage: () => void;
  goBackPage: () => void;
  currentStep: AppUrl;
  canShowAffirmation: boolean;
  topLevelPageTheme: string;
}

/**
 * the reason we have set up this url tracking at all is because of the Involvement page,
 *   where each selection affects what the next page will be and thus what pages are previous
 */
export enum AppUrl {
  Landing = '',
  NotFound = '404',
  BeforeYouBegin = '/form/start',
  Introduction = '/form/intro',
  IntroductionPreview = '/form/introduction/preview',
  Involvement = '/form/involvement',
  InvolvementPreview = '/form/involvement',
  Job = '/form/job',
  JobPreview = '/form/job/preview',
  CommunityService = '/form/community-service',
  CommunityServicePreview = '/form/community-service/preview',
  Recovery = '/form/recovery',
  RecoveryPreview = '/form/recovery/preview',
  School = '/form/school',
  SchoolPreview = '/form/school/preview',
  Parenting = '/form/parenting',
  ParentingPreview = '/form/parenting/preview',
  Unemployed = '/form/unemployed',
  UnemployedPreview = '/form/unemployed/preview',
  Goals = '/form/goals',
  GoalsPreview = '/form/goals/preview',
  Why = '/form/why',
  WhyPreview = '/form/why/preview',
  Finalize = '/form/finalize',
  FinalizePreview = '/form/finalize/preview',
  Editing = '/form/editing',
  Download = '/form/download',
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
 * @param {AppUrl} url
 * @returns {AppUrl}
 */
export function getNextFormUrl(url: AppUrl): AppUrl {
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
 * @param {AppUrl} appUrl
 * @returns {Boolean}
 */
export function isFormPage(appUrl: AppUrl): Boolean {
  return (
    appUrl === AppUrl.Introduction ||
    appUrl === AppUrl.IntroductionPreview ||
    appUrl === AppUrl.Involvement ||
    appUrl === AppUrl.Job ||
    appUrl === AppUrl.JobPreview ||
    appUrl === AppUrl.CommunityService ||
    appUrl === AppUrl.CommunityServicePreview ||
    appUrl === AppUrl.Recovery ||
    appUrl === AppUrl.RecoveryPreview ||
    appUrl === AppUrl.School ||
    appUrl === AppUrl.SchoolPreview ||
    appUrl === AppUrl.Parenting ||
    appUrl === AppUrl.ParentingPreview ||
    appUrl === AppUrl.Unemployed ||
    appUrl === AppUrl.UnemployedPreview ||
    appUrl === AppUrl.Goals ||
    appUrl === AppUrl.GoalsPreview ||
    appUrl === AppUrl.Why ||
    appUrl === AppUrl.WhyPreview ||
    appUrl === AppUrl.Finalize ||
    appUrl === AppUrl.FinalizePreview
  );
}
