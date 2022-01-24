import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';
import Button from 'components/Button';

interface ComponentProps {
    goNextPage: () => void;
    theme: string;
}

interface StyleProps {
    theme?: string;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette, typography }) =>
    createStyles({
        root: {
            background: palette.secondary.main,
            color: palette.primary.darker
        },
        span: {
            color: palette.primary.main
        }
    })
)

const PrimaryLandingSection = ({ goNextPage, theme }: ComponentProps) => {
    const utilityClasses = useUtilityStyles();
    const styleProps = { theme }
    const classes = useStyles(styleProps)

    return (
        <section className ={classes.root}>
            <div className={utilityClasses.contentContainer}>
                <div>
                    <h1><span className={classes.span}>Expunge Assist</span> accelerates the <span className={classes.span}>Record Clearance</span> process by helping user generate a declaration letter</h1>
                    <p className = {classes.p}>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</p>
                </div>
                <img src="https://via.placeholder.com/590x350" alt="" />
                <div className={utilityClasses.buttonContainer}>
                    <Button
                        theme='landing'
                        buttonText='View Demo'
                        onClick={() => goNextPage()}
                    />
                </div>
            </div>
        </section>
    );
};

export default PrimaryLandingSection;