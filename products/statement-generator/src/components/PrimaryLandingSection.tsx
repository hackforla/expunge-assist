import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';
import Button from 'components/Button';

interface ComponentProps {
    goNextPage: () => void;
}

const PrimaryLandingSection = ({ goNextPage }: ComponentProps) => {
    const utilityClasses = useUtilityStyles({
        pageTheme: 'tangerine'
    });

    return (
        <section className ={utilityClasses.primaryContainer}>
            <div className={utilityClasses.contentContainer}>
                <h2><span>Expunge Assist</span> accelerates the <span>Record Clearance</span> process by helping user generate a declaration letter</h2>
                <img src="https://via.placeholder.com/590x350" alt="" />
                <div>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</div>
                <div className={utilityClasses.buttonContainer}>
                    <Button
                        buttonText='View Demo'
                        onClick={() => goNextPage()}
                    />
                </div>
            </div>
        </section>
    );
};

export default PrimaryLandingSection;