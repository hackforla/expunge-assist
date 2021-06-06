import React from 'react';

import FlowNavigation from 'components/FlowNavigation';
import TextPreview from 'components/TextPreview';

import useUtilityStyles from 'styles/utilityStyles';

interface IPreviewPage {
  content: string;
}

const PreviewPage = ({ content }: IPreviewPage) => {
  const utilityClasses = useUtilityStyles();

  return (
    <div className={utilityClasses.contentContainer}>
      <div className={utilityClasses.flexGrow}>
        <TextPreview
          content={content}
          onAdjustClick={() => {}}
          nameOfStep="Introduction"
        />

        <FlowNavigation />
      </div>
    </div>
  );
};

export default PreviewPage;
