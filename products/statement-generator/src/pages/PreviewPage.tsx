import React, { useContext } from 'react';

import FlowNavigation from 'components/FlowNavigation';
import TextPreview from 'components/TextPreview';

import { IStepState } from 'contexts/FormStateProps';
import FormStateContext from 'contexts/FormStateContext';
import RoutingContext from 'contexts/RoutingContext';
import { getPreviewTitle } from 'helpers/previewHelper';

import useUtilityStyles from 'styles/utilityStyles';

interface GeneratorConfig {
  title: string;
  generator: (formState: IStepState) => string;
  content: string;
}

function PreviewPage() {
  const utilityClasses = useUtilityStyles({ pageTheme: 'light' });

  const { formState } = useContext(FormStateContext);
  const { currentStep } = useContext(RoutingContext);

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        <TextPreview
          content='test'
          onAdjustClick={() => {}}
          nameOfStep={getPreviewTitle(currentStep)}
        />

        <FlowNavigation />
      </div>
    </div>
  );
}

export default PreviewPage;
