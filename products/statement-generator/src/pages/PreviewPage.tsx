import React, { useCallback, useContext, useEffect } from 'react';

import TextPreview from 'components/TextPreview';
import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

import FormStateContext from 'contexts/FormStateContext';
import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';
import { getPreviewConfig, getPreviewStatement } from 'helpers/previewHelper';
import { getSectionTitle } from 'helpers/i18nHelper';

function PreviewPage() {
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { currentStep } = useContext(RoutingContext);
  const previewConfigItem = getPreviewConfig(currentStep);
  const hasPreviewConfig = previewConfigItem !== undefined;

  const updateStatement = useCallback((newStatement: string) => {
    if (hasPreviewConfig) {
      updateStepToForm({
        statements: {
          ...formState.statements,
          [previewConfigItem.stateKey]: newStatement,
        },
      });
    }
  }, []);

  // hacky implementation to generate the heading & closing statement here
  //  because it does not have a unique page to be generated via a preview
  useEffect(() => {
    if (currentStep === AppUrl.IntroductionPreview) {
      const displayDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      updateStepToForm({
        statements: {
          ...formState.statements,
          heading: `${displayDate},\n\nTo whom it may concern,`,
          closing: `Sincerely,\n${formState.introduction.fullName}`,
        },
      });
    }
  }, [currentStep]);

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
