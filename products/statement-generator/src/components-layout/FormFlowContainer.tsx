import React, { forwardRef } from 'react';

import ContentContainer from './ContentContainer';
import FormContainer from './FormContainer';
import FlowNavigation from './FlowNavigation';

interface IFormFlowContainer {
    children: React.ReactNode;
    isNextDisabled: boolean;
    // containerRef?: React.Ref<HTMLDivElement> | null;
    tabIndex?: number;
}

const FormFlowContainer = forwardRef<HTMLDivElement, IFormFlowContainer>(
    ({ children, isNextDisabled, tabIndex }, ref) => {
        console.log('FormFlowContainer');
        return (
            <ContentContainer ref={ref} tabIndex={tabIndex}>
                <FormContainer>
                    {children}
                </FormContainer>
                <FlowNavigation isNextDisabled={isNextDisabled} />
            </ContentContainer>
        );
    }
);

export default FormFlowContainer;