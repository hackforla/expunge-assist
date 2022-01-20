import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

const PrimaryLandingSection = () => {
    const utilityClasses = useUtilityStyles({
        pageTheme: 'tangerine'
    });

    return (
        <section className ={utilityClasses.primaryContainer}>
            <div className={utilityClasses.contentContainer}>
                <div><span>Expunge Assist</span> accelerates the <span>Record Clearance</span> process by helping user generate a declaration letter</div>
                <div>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</div>
            </div>
        </section>
    );
};

export default PrimaryLandingSection;