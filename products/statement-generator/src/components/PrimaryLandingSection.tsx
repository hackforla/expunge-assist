import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

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
        root: {
            background: palette.secondary.main,
            color: palette.primary.darker,
            display: 'flex',
            flexDirection: 'row',
            padding: spacing(12, 3)
        },
        content: {
            padding: spacing(2,3),
            maxWidth: '1300px',
            display: 'flex',
            flex: 1,
            flexFlow: 'row',
            margin: '0 auto',
            alignItems: 'center',
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
        text: {
            paddingRight: spacing(3),
            [breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column'
            }
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
        button: {
            paddingTop: spacing(3),
            [breakpoints.down('sm')]: {
                margin: '0 auto'
            }
        },
        mobileImg: {
            display: 'none',
            [breakpoints.down('sm')]: {
                display: 'flex',
                margin: '0 auto',
                width: '100%'
            }
        },
        desktopImg :{
            width: '50%',
            [breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    })
)

const PrimaryLandingSection = ({ goNextPage }: ComponentProps) => {
    const classes = useStyles({ theme: 'light' });
    const landingImage = "https://via.placeholder.com/590x350";
    const landingImageAlt = 'A placeholder waiting for the correct image';

    return (
        <section className ={classes.root}>
            <ContentContainer className =  {classes.content}>
                <div className = {classes.text}>
                    <h1 className={classes.title}><span className={classes.span}>Expunge Assist</span> accelerates the <span className={classes.span}>Record Clearance</span> process by helping user generate a declaration letter</h1>
                    <img src={landingImage} alt={landingImageAlt} className={classes.mobileImg}/>
                    <p className = {classes.subtitle}>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</p>
                    <div className={classes.button}>
                        <Button
                            theme='landing'
                            buttonText='View Demo'
                            onClick={() => goNextPage()}
                        />
                    </div>
                </div>
                <img src={landingImage} alt={landingImageAlt} className={classes.desktopImg}/>
            </ContentContainer>
        </section>
    );
};

export default PrimaryLandingSection;