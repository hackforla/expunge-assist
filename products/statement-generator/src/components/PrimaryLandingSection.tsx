import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';
import Button from 'components/Button';

interface ComponentProps {
    goNextPage: () => void;
}

interface StyleProps {
    theme?: string;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette, typography, spacing }) =>
    createStyles({
        outer: {
            background: palette.secondary.main,
        },
        content: {
            color: palette.primary.darker,
            fontFamily: typography.fontFamily,
            padding: spacing(3),
        },
        span: {
            color: palette.primary.main
        },
    })
)

const PrimaryLandingSection = ({ goNextPage }: ComponentProps) => {
    const utilityClasses = useUtilityStyles();
    const classes = useStyles({ theme: 'light' });

    return (
        <section className ={classes.outer}>
            <div className={utilityClasses.contentContainer}>
                <div className={classes.content}>
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