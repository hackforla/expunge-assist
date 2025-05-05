import React, { forwardRef } from 'react';

import ContentContainer from './ContentContainer';
import FormContainer from './FormContainer';
import FlowNavigation from './FlowNavigation';

interface IFormFlowContainer {
    children: React.ReactNode;
    isNextDisabled: boolean;
    onNavClick?: () => void;
    nextButtonLabel?: string;
    tabIndex?: number;
}

const FormFlowContainer = forwardRef<HTMLDivElement, IFormFlowContainer>(
    ({ children, isNextDisabled, tabIndex, onNavClick, nextButtonLabel }, ref) => {
        console.log('FormFlowContainer');
        return (
            <ContentContainer ref={ref} tabIndex={tabIndex}>
                <FormContainer>
                    {children}
                </FormContainer>
                <FlowNavigation isNextDisabled={isNextDisabled} onNext={onNavClick} nextButtonLabel={nextButtonLabel}/>
            </ContentContainer>
        );
    }
);

export default FormFlowContainer;