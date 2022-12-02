import { useTranslation } from 'react-i18next';

import { AppUrl } from 'contexts/RoutingProps';

export function getSectionTitle(url: AppUrl): string {
  const { t } = useTranslation();
  switch (url) {
    case AppUrl.Introduction:
    case AppUrl.IntroductionPreview:
      return t('sections.introduce_yourself');
    case AppUrl.Involvement:
      return t('sections.involvement');
    case AppUrl.Job:
    case AppUrl.JobPreview:
      return `${t('sections.involvement')}: ${t('sections.job')}`;
    case AppUrl.SomethingElse:
    case AppUrl.SomethingElsePreview:
      return `${t('sections.involvement')}: ${t('sections.something_else')}`;
    case AppUrl.CommunityService:
    case AppUrl.CommunityServicePreview:
      return `${t('sections.involvement')}: ${t('sections.community_service')}`;
    case AppUrl.Recovery:
    case AppUrl.RecoveryPreview:
      return `${t('sections.involvement')}: ${t('sections.recovery')}`;
    case AppUrl.School:
    case AppUrl.SchoolPreview:
      return `${t('sections.involvement')}: ${t('sections.education')}`;
    case AppUrl.Parenting:
    case AppUrl.ParentingPreview:
      return `${t('sections.involvement')}: ${t('sections.parenting')}`;
    case AppUrl.Unemployment:
    case AppUrl.UnemploymentPreview:
      return `${t('sections.involvement')}: ${t('sections.unemployment')}`;
    case AppUrl.Goals:
    case AppUrl.GoalsPreview:
      return t('sections.goals');
    case AppUrl.Why:
    case AppUrl.WhyPreview:
      return t('sections.why');
    case AppUrl.Finalize:
      return t('sections.finalize');
    case AppUrl.FinalizePreview:
      return t('sections.completed');
    default:
      return '';
  }
}
