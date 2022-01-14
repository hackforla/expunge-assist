import React, { useContext } from 'react';

import TextPreview from 'components/TextPreview';
import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { getPreviewConfig, getPreviewStatement } from 'helpers/previewHelper';

function PreviewPage() {
  const { formState } = useContext(FormStateContext);
  const { currentStep } = useContext(RoutingContext);
  const previewConfigItem = getPreviewConfig(currentStep);
  const hasPreviewConfig = previewConfigItem !== undefined;

  // function updateStatement(newStatement: string) {
  //   if (hasPreviewConfig) {
  //     updateStepToForm({
  //       statements: {
  //         ...formState.statements,
  //         [previewConfigItem.stateKey]: newStatement,
  //       },
  //     });
  //   }
  // }

  return (
    <ContentContainer>
      {hasPreviewConfig && (
        <TextPreview
          // onAdjustClick={() => updateStatement('just a test')}
          content={getPreviewStatement(formState, currentStep)}
          nameOfStep={previewConfigItem.title}
        />
      )}

      <FlowNavigation />
    </ContentContainer>
  );
}

export default PreviewPage;
