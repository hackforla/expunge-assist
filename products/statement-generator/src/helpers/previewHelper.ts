import { IStepState } from 'contexts/FormStateProps';
import { AppUrl } from 'contexts/RoutingProps';

import * as statementGenerators from 'helpers/statementGenerators';

interface IPreviewMapItem {
  generator: (formState: IStepState) => string;
  stateKey: string;
}

export const PREVIEW_MAP = {
  [AppUrl.IntroductionPreview as string]: {
    generator: statementGenerators.generateIntroduction,
    stateKey: 'introduction',
  },
  [AppUrl.JobPreview as string]: {
    generator: statementGenerators.generateInvolvementJob,
    stateKey: 'job',
  },
  [AppUrl.UnemployedPreview as string]: {
    generator: statementGenerators.generateInvolvementUnemployed,
    stateKey: 'unemployed',
  },
  [AppUrl.CommunityServicePreview as string]: {
    generator: statementGenerators.generateInvolvementCommunity,
    stateKey: 'service',
  },
  [AppUrl.RecoveryPreview as string]: {
    generator: statementGenerators.generateInvolvementRecovery,
    stateKey: 'recovery',
  },
  [AppUrl.SchoolPreview as string]: {
    generator: statementGenerators.generateInvolvementSchool,
    stateKey: 'school',
  },
  [AppUrl.ParentingPreview as string]: {
    generator: statementGenerators.generateInvolvementParenting,
    stateKey: 'parenting',
  },
  [AppUrl.GoalsPreview as string]: {
    generator: statementGenerators.generateFutureGoals,
    stateKey: 'goals',
  },
  [AppUrl.WhyPreview as string]: {
    generator: statementGenerators.generateWhy,
    stateKey: 'why',
  },
};

export const PREVIEW_KEYS = Object.keys(PREVIEW_MAP);

export function getPreviewConfig(url: AppUrl): IPreviewMapItem {
  return PREVIEW_MAP[url as string];
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

export function generateFinal(formState: IStepState): string {
  const statementBody = PREVIEW_KEYS.reduce((accumulator, previewKey) => {
    const statement = getPreviewStatement(formState, previewKey as AppUrl);

    // blank statement
    if (statement === '') {
      return accumulator;
    }

    // first statement (should always be introduction)
    if (accumulator === '') {
      return statement;
    }

    // concat statement
    return `${accumulator}\n\n${statement}`;
  }, '');

  return `${formState.statements.heading}\n\n${statementBody}\n\n${formState.statements.closing}`;
}
