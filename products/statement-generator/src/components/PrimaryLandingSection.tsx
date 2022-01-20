import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

const PrimaryLandingSection = () => {
    const utilityClasses = useUtilityStyles();
    return (
        <>
            <section>
                <div className={utilityClasses.contentContainer}>
                    <div>Expunge Assist accelerates the Record Clearance process by helping user generate a declaration letter</div>
                    <div>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</div>
                </div>
            </section>
        </>
    );
};

export default PrimaryLandingSection;