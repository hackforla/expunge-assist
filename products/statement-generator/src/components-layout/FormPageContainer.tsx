import React from 'react';

import ContentContainer from './ContentContainer';
import FormContainer from './FormContainer';
import FlowNavigation from './FlowNavigation';

interface FormFlowContainerProps {
    children: React.ReactNode;
    isNextDisabled: boolean;
}

const FormFlowContainer = ({ children, isNextDisabled }: FormFlowContainerProps) => {
    console.log('FormFlowContainer');
    return (
        <ContentContainer>
            <FormContainer>
                {children}
            </FormContainer>
            <FlowNavigation isNextDisabled={isNextDisabled}/>
        </ContentContainer>
    );
};

export default FormFlowContainer;