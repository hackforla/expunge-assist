import React from 'react';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';

export default function Advice() {
  return (
    <ContentContainer>
      <h2>Some advice for your personal statement</h2>

      <p>
        1. Remember that you are writing for a judge, so refrain from using
        informal language such as abbreviations or slang.
      </p>

      <p>2. Write in complete sentences when given the option.</p>

      <p>
        3. Use the first person when answering questions. This means telling the
        story from your point of view.
      </p>

      <p>
        4. Please try to limit your responses. We recommend each paragraph being
        3-5 sentences.
      </p>

      <FlowNavigation />
    </ContentContainer>
  );
}
