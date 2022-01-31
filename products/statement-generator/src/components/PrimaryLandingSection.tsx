import React, { useState, useEffect } from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
import ContentContainer from 'page-layout/ContentContainer';

interface ComponentProps {
  goNextPage: () => void;
}

interface StyleProps {
    theme?: string;
}

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if(media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
};

const useStyles = makeStyles<Theme, StyleProps>(({ palette, typography, spacing, breakpoints }) =>
    createStyles({
        root: {
            background: palette.secondary.main,
            color: palette.primary.darker,
            minHeight: '686px',
            display: 'flex',
            flexDirection: 'row',
            padding: spacing(3),
        },
        content: {
            // height: '100%',
            paddingLeft: spacing(3),
            paddingRight: spacing(3),
            paddingTop: spacing(2),
            paddingBottom: spacing(2),
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
            alignItems: 'flex-end'
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
            alignSelf: 'flex-start',
            paddingTop: spacing(3),
            [breakpoints.down('sm')]: {
                margin: '0 auto'
            }
        }
    })
)

const PrimaryLandingSection = ({ goNextPage }: ComponentProps) => {
    const classes = useStyles({ theme: 'light' });
    const landingImage = "https://via.placeholder.com/590x350";
    const landingImageAlt = 'A placeholder waiting for the correct image';
    const isMobile = useMediaQuery('(max-width:1236px)');

    return (
        <section className ={classes.root}>
            <div className =  {classes.content}>
                <ContentContainer className={classes.text}>
                    <h1 className={classes.title}><span className={classes.span}>Expunge Assist</span> accelerates the <span className={classes.span}>Record Clearance</span> process by helping user generate a declaration letter</h1>
                    {isMobile ? (<ContentContainer><img src={landingImage} alt={landingImageAlt}/></ContentContainer>) : <></>}
                    <p className = {classes.subtitle}>While still under development, Expunge Assist will aim to help people in California with criminal records accomplish record clearance, expungement or reduction.</p>
                    <div className={classes.button}>
                        <Button
                            theme='landing'
                            buttonText='View Demo'
                            onClick={() => goNextPage()}
                        />
                    </div>
                </ContentContainer>
                {!isMobile ? (<ContentContainer><img src={landingImage} alt={landingImageAlt}/></ContentContainer>) : <></>}
        
            </div>
        </section>
    );
};

export default PrimaryLandingSection;