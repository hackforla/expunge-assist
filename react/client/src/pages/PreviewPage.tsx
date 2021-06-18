import React, { useContext } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import TextPreview from 'components/TextPreview';

import { IStepState } from 'contexts/FormStateProps';
import { STEP_ENUMS } from 'contexts/RoutingProps';
import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import * as statementHelpers from 'helpers/StatementHelpers';

import useUtilityStyles from 'styles/utilityStyles';

const PREVIEW_GENERATOR_MAP = {
  [STEP_ENUMS.INTRODUCTION_PREVIEW]: {
    title: 'Previewing Introduction',
    generator: statementHelpers.generateIntroduction,
  },
  [STEP_ENUMS.INVOLVEMENT.JOB_PREVIEW]: {
    title: 'Previewing Involvment',
    generator: statementHelpers.generateInvolvementJob,
  },
  [STEP_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE_PREVIEW]: {
    title: 'Previewing Involvment',
    generator: statementHelpers.generateInvolvementCommunity,
  },
  [STEP_ENUMS.INVOLVEMENT.RECOVERY_PREVIEW]: {
    title: 'Previewing Involvment',
    generator: statementHelpers.generateInvolvementRecovery,
  },
  [STEP_ENUMS.INVOLVEMENT.SCHOOL_PREVIEW]: {
    title: 'Previewing Involvment',
    generator: statementHelpers.generateInvolvementSchool,
  },
  [STEP_ENUMS.INVOLVEMENT.PARENTING_PREVIEW]: {
    title: 'Previewing Involvment',
    generator: statementHelpers.generateInvolvementParenting,
  },
  [STEP_ENUMS.INVOLVEMENT.UNEMPLOYED_PREVIEW]: {
    title: 'Previewing Involvment',
    generator: statementHelpers.generateInvolvementUnemployed,
  },
  [STEP_ENUMS.GOALS_PREVIEW]: {
    title: 'Previewing Goals',
    generator: statementHelpers.generateFutureGoals,
  },
  [STEP_ENUMS.WHY_PREVIEW]: {
    title: 'Previewing Why',
    generator: statementHelpers.generateWhy,
  },
};

interface GeneratorConfig {
  title: string;
  generator: (formState: IStepState) => string;
  content: string;
}

function generatePreviewFromStep(
  step: string,
  formState: IStepState
): GeneratorConfig {
  const config = PREVIEW_GENERATOR_MAP[step];
  if (config === undefined) {
    return {
      title: 'Unknown',
      generator: () => '',
      content: '?',
    };
  }

  return {
    ...config,
    content: config.generator(formState),
  };
}

function PreviewPage() {
  const utilityClasses = useUtilityStyles({ pageTheme: 'light' });

  const { formState } = useContext(FormStateContext);
  const { currentStep } = useContext(RoutingContext);
  const previewConfig = generatePreviewFromStep(currentStep, formState);

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        <TextPreview
          content={previewConfig.content}
          onAdjustClick={() => {}}
          nameOfStep={previewConfig.title}
        />

        <FlowNavigation />
      </div>
    </div>
  );
}

export default PreviewPage;
