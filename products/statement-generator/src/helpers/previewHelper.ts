import { IStepState } from 'contexts/FormStateProps';
import { AppUrl } from 'contexts/RoutingProps';

import * as statementGenerators from 'helpers/statementGenerators';

interface IPreviewMapItem {
  title: string;
  generator: (formState: IStepState) => string;
  stateKey: string;
}

const PREVIEW_MAP = {
  [AppUrl.IntroductionPreview as string]: {
    title: 'Previewing Introduction',
    generator: statementGenerators.generateIntroduction,
    stateKey: 'introduction',
  },
  [AppUrl.JobPreview as string]: {
    title: 'Previewing Involvement: Job',
    generator: statementGenerators.generateInvolvementJob,
    stateKey: 'job',
  },
  [AppUrl.CommunityServicePreview as string]: {
    title: 'Previewing Involvement: Community Service',
    generator: statementGenerators.generateInvolvementCommunity,
    stateKey: 'service',
  },
  [AppUrl.RecoveryPreview as string]: {
    title: 'Previewing Involvement: Recovery',
    generator: statementGenerators.generateInvolvementRecovery,
    stateKey: 'recovery',
  },
  [AppUrl.SchoolPreview as string]: {
    title: 'Previewing Involvement: School',
    generator: statementGenerators.generateInvolvementSchool,
    stateKey: 'school',
  },
  [AppUrl.ParentingPreview as string]: {
    title: 'Previewing Involvement: Parenting',
    generator: statementGenerators.generateInvolvementParenting,
    stateKey: 'parenting',
  },
  [AppUrl.UnemployedPreview as string]: {
    title: 'Previewing Involvement: Unemployment',
    generator: statementGenerators.generateInvolvementUnemployed,
    stateKey: 'unemployed',
  },
  [AppUrl.GoalsPreview as string]: {
    title: 'Previewing Goals',
    generator: statementGenerators.generateFutureGoals,
    stateKey: 'goals',
  },
  [AppUrl.WhyPreview as string]: {
    title: 'Previewing Why',
    generator: statementGenerators.generateWhy,
    stateKey: 'why',
  },
};

export function getPreviewConfig(url: AppUrl): IPreviewMapItem {
  return PREVIEW_MAP[url as string];
}

export function getPreviewTitle(url: AppUrl): string {
  return PREVIEW_MAP[url as string]?.title;
}

export function getPreviewStatementState(
  formState: IStepState,
  url: AppUrl
): string | undefined {
  const previewConfig = getPreviewConfig(url);
  if (previewConfig) {
    const { stateKey } = previewConfig;
    return formState.statements[stateKey];
  }

  return undefined;
}

export function getPreviewStatement(
  formState: IStepState,
  url: AppUrl
): string {
  const statementInState = getPreviewStatementState(formState, url);
  if (statementInState !== undefined && statementInState !== '') {
    return statementInState;
  }

  return PREVIEW_MAP[url as string]?.generator(formState);
}
