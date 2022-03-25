import React, { useContext } from 'react';

import TextPreview from 'components/TextPreview';
import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { getPreviewConfig, getPreviewStatement } from 'helpers/previewHelper';
import { getSectionTitle } from 'helpers/i18nHelper';

function PreviewPage() {
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
          onSaveClick={updateStatement}
          content={getPreviewStatement(formState, currentStep)}
          nameOfStep={getSectionTitle(currentStep)}
        />
      )}

      <FlowNavigation />
    </ContentContainer>
  );
}

export default PreviewPage;
