import React, { useContext } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import TextPreview from 'components/TextPreview';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { getPreviewConfig, getPreviewStatement } from 'helpers/previewHelper';

import useUtilityStyles from 'styles/utilityStyles';

function PreviewPage() {
  const utilityClasses = useUtilityStyles({ pageTheme: 'light' });

  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { currentStep } = useContext(RoutingContext);
  const previewConfigItem = getPreviewConfig(currentStep);
  const hasPreviewConfig = previewConfigItem !== undefined;

  function updateStatement(newStatement: string) {
    if (hasPreviewConfig) {
      updateStepToForm({
        statements: {
          ...formState.statements,
          [previewConfigItem.stateKey]: newStatement,
        },
      });
    }
  }

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        {hasPreviewConfig && (
          <TextPreview
            onAdjustClick={() => {}}
            content={getPreviewStatement(formState, currentStep)}
            nameOfStep={previewConfigItem.title}
          />
        )}

        <FlowNavigation />
      </div>
    </div>
  );
}

export default PreviewPage;
