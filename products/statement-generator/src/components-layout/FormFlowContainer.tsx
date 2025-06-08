import React, { forwardRef, useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import ContentContainer from './ContentContainer';
import FormContainer from './FormContainer';
import FlowNavigation from './FlowNavigation';
import OopsReminder from './OopsReminder';

interface IFormFlowContainer {
  children: React.ReactNode;
  isNextDisabled: boolean;
  onNavClick?: () => void;
  nextButtonLabel?: string;
  tabIndex?: number;
}

const FormFlowContainer = forwardRef<HTMLDivElement, IFormFlowContainer>(
  (
    { children, isNextDisabled, tabIndex, onNavClick, nextButtonLabel },
    ref
  ) => {
    const { showOopsReminder } = useContext(FormStateContext);

    if (showOopsReminder) return <OopsReminder />;

    return (
      <ContentContainer ref={ref} tabIndex={tabIndex}>
        <FormContainer>{children}</FormContainer>
        <FlowNavigation
          isNextDisabled={isNextDisabled}
          onNext={onNavClick}
          nextButtonLabel={nextButtonLabel}
        />
      </ContentContainer>
    );
  }
);

export default FormFlowContainer;
