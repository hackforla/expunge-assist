import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';
import Button from 'components/Button';
import ContentContainer from 'page-layout/ContentContainer';

interface ComponentProps {
    goNextPage: () => void;
}

interface StyleProps {
    theme?: string;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette, typography, spacing, breakpoints }) =>
    createStyles({
        outerWrapper: {
            background: palette.secondary.main,
            color: palette.primary.darker,
            minHeight: '686px',
        },
        title: {
            fontFamily: typography.fontFamily,
            fontSize: '40px',
            
            [breakpoints.down('sm')]: {
                fontSize: '24px',
                lineHeight: '117%'
            }
        },
        span: {
            color: palette.primary.main,
        },
        subtitle: {
            fontFamily: typography.fontFamily,
            fontSize: '25px',
            lineHeight: '160%',
            
            [breakpoints.down('sm')]: {
                fontSize: '20px',
                width: '100%'
            }
        },
        image: {
            flex: '1 0 auto',
            maxWidth: '590px',
            [breakpoints.down('sm')]: {
                order: 2
            }
        },
    })
)

const PrimaryLandingSection = ({ goNextPage }: ComponentProps) => {
    const utilityClasses = useUtilityStyles();
    const classes = useStyles({ theme: 'light' });
    const landingImage = "https://via.placeholder.com/590x350";
    const landingImageAlt = 'A placeholder waiting for the correct image'

    return (
        <section className ={classes.outerWrapper}>
            <ContentContainer>
                <h1 className={classes.title}><span className={classes.span}>Expunge Assist</span> accelerates the <span className={classes.span}>Record Clearance</span> process by helping user generate a declaration letter</h1>
                <p className = {classes.subtitle}>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</p>
                <div className={utilityClasses.buttonContainer}>
                    <Button
                        theme='landing'
                        buttonText='View Demo'
                        onClick={() => goNextPage()}
                    />
                </div>
                <img src={landingImage} alt={landingImageAlt} className={classes.image}/>
            </ContentContainer>
        </section>
    );
};

export default PrimaryLandingSection;