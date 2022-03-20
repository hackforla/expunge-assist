import React from 'react';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

export default function Welcome() {
  return (
    <ContentContainer>
      <h1>Welcome</h1>

      <p>
        This tool will guide you through writing your declaration letter. You
        can preview your letter and make changes at the end of each section.
      </p>

      <FlowNavigation showBack={false} />
    </ContentContainer>
  );
}
