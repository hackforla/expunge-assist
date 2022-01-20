import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

const PrimaryLandingSection = () => {
    const utilityClasses = useUtilityStyles();
    const css = `
        #primary-landing-section {
            background-color: #FFFAF2
        }
    `

    return (
        <>
            <section id='primary-landing-section'>
                <div className={utilityClasses.contentContainer}>
                    <div><span>Expunge Assist</span> accelerates the <span className="recordClearancePurple">Record Clearance</span> process by helping user generate a declaration letter</div>
                    <div>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</div>
                </div>
            </section>
            <style>{css}</style>
        </>
    );
};

export default PrimaryLandingSection;