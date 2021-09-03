import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import '@fontsource/mulish';
import logo from '../assets/iconBlack.svg';
import stopwatch from '../assets/stopwatch.svg';

const useStyles = makeStyles(() =>
  createStyles({
    comingSoonContainer: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      width: '100%',
      height: '80%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headingContainer: {
      width: '60%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    },
    mainLogo: {
      width: '10%',
      height: '60px',
      marginTop: '40px',
    },
    mainTitle: {
      fontFamily: 'mulish',
      fontSize: '3.2em',
      marginLeft: '15px',
      color: '#9903ff',
      textTransform: 'uppercase',
    },
    imageContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    },
  })
);

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const StopwatchImage = styled.img`
  width: 50%;
  height: 300px;
  margin-bottom: 0;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`;

const SubHeading = styled.h2`
  font-family: 'mulish';
  font-size: 2em;
`;

const ContactText = styled.h3`
  font-family: 'mulish';
  margin-top: 0;
  font-size: 1.4em;
`;

const PurpleText = styled.span`
  color: #9903ff;
`;
const MailToLink = styled.a`
  color: #9903ff;
`;

export default function ComingSoon() {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'Coming Soon';
  });
  return (
    <div className={classes.comingSoonContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.headingContainer}>
          <img className={classes.mainLogo} src={logo} alt="" />
          <h1 className={classes.mainTitle}>Expunge Assist</h1>
        </div>
        <div className={classes.imageContainer}>
          <StopwatchImage src={stopwatch} />
        </div>
        <FooterContainer>
          <SubHeading>
            New things are <PurpleText>coming soon</PurpleText>
          </SubHeading>
          <ContactText>
            In the meantime, please email
            <PurpleText>
              <MailToLink
                target="_blank"
                rel="noopener noreferer"
                href="mailto:info@expungeassist.com"
              >
                info@expungeassist.org
              </MailToLink>
            </PurpleText>
            for more information
          </ContactText>
        </FooterContainer>
      </div>
    </div>
  );
}
