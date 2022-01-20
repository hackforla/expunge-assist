import React from 'react';
import useUtilityStyles from 'styles/utilityStyles';

import ContentContainer from 'page-layout/ContentContainer';

const PrimaryLandingSection = () => {
    const utilityClasses = useUtilityStyles();

    return (
        <ContentContainer>
            hello world
        </ContentContainer>
    );
};

export default PrimaryLandingSection;