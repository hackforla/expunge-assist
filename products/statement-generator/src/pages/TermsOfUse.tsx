import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      color: 'white',
      padding: '18px',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',
    },
    content: {
      marginTop: '50px',
      padding: '0 5px',
      lineHeight: '1.17rem',
    },
  })
);

const TermsOfUse = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h2>Terms of Use</h2>
        <br />
        <p>
          The Personal Statement Generator
          <br />
          <br />
          The Personal Statement Generator is a piece of software created to
          helping people expunge their records through a personal statement that
          can be submitted. The main use is to help applications generate a
          personal statement to submit for expungement. The Application is not
          tailored to comply with industry-specific regulations (Health
          Insurance Portability and Accountability Act (HIPAA), Federal
          Information Security Management Act (FISMA), etc.), so if your
          interactions would be subjected to such laws, you may not use this
          application. You may not use the Application in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA)
          <br />
          <br />
          Scope Of License
          <br />
          <br />
          You are given a non-transferable, non-exclusive, non-sub licensable
          license to use the application on your browser of choice.
          <br />
          <br />
          User Generated Contributions
          <br />
          <br />
          We may provide you with the opportunity to create, submit, post,
          display, transmit, perform, publish, distribute, or broadcast content
          and materials to us or in the Application, including but not limited
          to text, writings, video, audio, photographs, graphics, comments,
          suggestions, or personal information or other material (collectively,
          “Contributions”). Contributions may be viewable by the recipients of
          the personal statement and through third-party websites or
          applications. As such, any Contributions you transmit may be treated
          in accordance with the Application Privacy Policy. Hack for LA’s
          responsibility in the case of violation of obligations and tort shall
          be limited to intent and gross negligence. Only I incase of a breach
          of essential contractual duties (cardinal obligations), shall Hack for
          LA be liable for anything. Hack for LA takes no accountability or
          responsibility for any damages caused due to the generation and
          submission of this application and not limited to just these cases.
          The laws of the State of California excluding its conflicts of law
          rules govern this license agreement.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
