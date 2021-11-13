import { IStepState } from 'contexts/FormStateProps';
import { STEP_ENUMS } from 'contexts/RoutingProps';

import * as statementGenerators from 'helpers/statementGenerators';

const PREVIEW_GENERATOR_MAP = {
  [STEP_ENUMS.INTRODUCTION_PREVIEW]: {
    title: 'Previewing Introduction',
    generator: statementGenerators.generateIntroduction,
  },
  [STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW]: {
    title: 'Previewing Involvement: Job',
    generator: statementGenerators.generateInvolvementJob,
  },
  [STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW]: {
    title: 'Previewing Involvement: Community Service',
    generator: statementGenerators.generateInvolvementCommunity,
  },
  [STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW]: {
    title: 'Previewing Involvement: Recovery',
    generator: statementGenerators.generateInvolvementRecovery,
  },
  [STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW]: {
    title: 'Previewing Involvement: School',
    generator: statementGenerators.generateInvolvementSchool,
  },
  [STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW]: {
    title: 'Previewing Involvement: Parenting',
    generator: statementGenerators.generateInvolvementParenting,
  },
  [STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW]: {
    title: 'Previewing Involvement: Unemployment',
    generator: statementGenerators.generateInvolvementUnemployed,
  },
  [STEP_ENUMS.GOALS_PREVIEW]: {
    title: 'Previewing Goals',
    generator: statementGenerators.generateFutureGoals,
  },
  [STEP_ENUMS.WHY_PREVIEW]: {
    title: 'Previewing Why',
    generator: statementGenerators.generateWhy,
  },
};

export function getPreviewTitle(step: string): string {
  return PREVIEW_GENERATOR_MAP[step]?.title;
}

export function getPreviewStatementState(
  formState: IStepState,
  step: string
): string | undefined {
  switch (step) {
    case STEP_ENUMS.INTRODUCTION_PREVIEW:
      return formState.statements.introduction;
    case STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW:
      return formState.statements.job;
    case STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW:
      return formState.statements.service;
    case STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW:
      return formState.statements.recovery;
    case STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW:
      return formState.statements.school;
    case STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW:
      return formState.statements.parenting;
    case STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW:
      return formState.statements.unemployed;
    case STEP_ENUMS.GOALS_PREVIEW:
      return formState.statements.goals;
    case STEP_ENUMS.WHY_PREVIEW:
      return formState.statements.why;
    default:
      return undefined;
  }
}

export function getPreviewStatement(
  formState: IStepState,
  step: string
): string {
  const statementInState = getPreviewStatementState(formState, step);
  if (statementInState !== undefined && statementInState !== '') {
    return statementInState;
  }

  return PREVIEW_GENERATOR_MAP[step]?.generator(formState);
}
