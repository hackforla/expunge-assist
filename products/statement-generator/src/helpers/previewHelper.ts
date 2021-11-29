import { IStepState } from 'contexts/FormStateProps';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import * as statementGenerators from 'helpers/statementGenerators';

interface IPreviewMapItem {
  title: string;
  generator: (formState: IStepState) => string;
  stateKey: string;
}

const PREVIEW_MAP = {
  [STEP_ENUMS.INTRODUCTION_PREVIEW]: {
    title: 'Previewing Introduction',
    generator: statementGenerators.generateIntroduction,
    stateKey: 'introduction',
  },
  [STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW]: {
    title: 'Previewing Involvement: Job',
    generator: statementGenerators.generateInvolvementJob,
    stateKey: 'job',
  },
  [STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW]: {
    title: 'Previewing Involvement: Community Service',
    generator: statementGenerators.generateInvolvementCommunity,
    stateKey: 'service',
  },
  [STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW]: {
    title: 'Previewing Involvement: Recovery',
    generator: statementGenerators.generateInvolvementRecovery,
    stateKey: 'recovery',
  },
  [STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW]: {
    title: 'Previewing Involvement: School',
    generator: statementGenerators.generateInvolvementSchool,
    stateKey: 'school',
  },
  [STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW]: {
    title: 'Previewing Involvement: Parenting',
    generator: statementGenerators.generateInvolvementParenting,
    stateKey: 'parenting',
  },
  [STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW]: {
    title: 'Previewing Involvement: Unemployment',
    generator: statementGenerators.generateInvolvementUnemployed,
    stateKey: 'unemployed',
  },
  [STEP_ENUMS.GOALS_PREVIEW]: {
    title: 'Previewing Goals',
    generator: statementGenerators.generateFutureGoals,
    stateKey: 'goals',
  },
  [STEP_ENUMS.WHY_PREVIEW]: {
    title: 'Previewing Why',
    generator: statementGenerators.generateWhy,
    stateKey: 'why',
  },
};

export function getPreviewConfig(step: string): IPreviewMapItem {
  return PREVIEW_MAP[step];
}

export function getPreviewTitle(step: string): string {
  return PREVIEW_MAP[step]?.title;
}

export function getPreviewStatementState(
  formState: IStepState,
  step: string
): string | undefined {
  const previewConfig = getPreviewConfig(step);
  if (previewConfig) {
    const { stateKey } = previewConfig;
    return formState.statements[stateKey];
  }

  return undefined;
}

export function getPreviewStatement(
  formState: IStepState,
  step: string
): string {
  const statementInState = getPreviewStatementState(formState, step);
  if (statementInState !== undefined && statementInState !== '') {
    return statementInState;
  }

  return PREVIEW_MAP[step]?.generator(formState);
}
