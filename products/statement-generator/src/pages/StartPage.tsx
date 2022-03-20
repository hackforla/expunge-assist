import React from 'react';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

export default function StartPage() {
  return (
    <ContentContainer>
      <h1>Start fresh with a record expungement</h1>

      <p>Generate a free personal statement in 4 steps</p>

      <FlowNavigation showBack={false} />
    </ContentContainer>
  );
}
