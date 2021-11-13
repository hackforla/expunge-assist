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

/**
 * @param {StepEnum} step
 * @returns {String}
 */
export function getPreviewTitle(step: string): string {
  return PREVIEW_GENERATOR_MAP[step]?.title;
}
