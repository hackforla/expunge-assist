import React, { useContext } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import TextPreview from 'components/TextPreview';

import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { getPreviewTitle, getPreviewStatement } from 'helpers/previewHelper';

import useUtilityStyles from 'styles/utilityStyles';

function PreviewPage() {
  const utilityClasses = useUtilityStyles({ pageTheme: 'light' });

  const { formState } = useContext(FormStateContext);
  const { currentStep } = useContext(RoutingContext);

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        <TextPreview
          onAdjustClick={() => {}}
          content={getPreviewStatement(formState, currentStep)}
          nameOfStep={getPreviewTitle(currentStep)}
        />

        <FlowNavigation />
      </div>
    </div>
  );
}

export default PreviewPage;
