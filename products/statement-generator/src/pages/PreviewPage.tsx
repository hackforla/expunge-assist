import React, { useContext } from 'react';

import TextPreview from 'components/TextPreview';
import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { getPreviewConfig, getPreviewStatement } from 'helpers/previewHelper';

import useUtilityStyles from 'styles/utilityStyles';

function PreviewPage() {
  const utilityClasses = useUtilityStyles({ pageTheme: 'transparent' });

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
    <ContentContainer>
      {hasPreviewConfig && (
        <TextPreview
          onAdjustClick={() => {}}
          content={getPreviewStatement(formState, currentStep)}
          nameOfStep={previewConfigItem.title}
        />
      )}

      <FlowNavigation />
    </ContentContainer>
  );
}

export default PreviewPage;
