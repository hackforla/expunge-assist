import React, { useContext } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import TextPreview from 'components/TextPreview';

import { IStepState } from 'contexts/FormStateProps';
import { STEP_ENUMS } from 'contexts/RoutingProps';
import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import * as statementHelpers from 'helpers/StatementHelpers';

import useUtilityStyles from 'styles/utilityStyles';

function generatePreviewFromStep(step: string, formState: IStepState): string {
  switch (step) {
    case STEP_ENUMS.INTRODUCTION_PREVIEW:
      return statementHelpers.generateIntroduction(formState);
    default:
      return '';
  }
}

function PreviewPage() {
  const utilityClasses = useUtilityStyles({ pageTheme: 'light' });

  const { formState } = useContext(FormStateContext);
  const { currentStep } = useContext(RoutingContext);
  const previewText = generatePreviewFromStep(currentStep, formState);

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        <TextPreview
          content={previewText}
          onAdjustClick={() => {}}
          nameOfStep="Introduction"
        />

        <FlowNavigation />
      </div>
    </div>
  );
}

export default PreviewPage;
