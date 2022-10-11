import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';

import ContentContainer from 'components-layout/ContentContainer';

const useStyles = makeStyles(() =>
  createStyles({
    linkStyle: {
      color: 'white',
    },
  })
);

export default function AboutUs() {
  const classes = useStyles();

  return (
    <ContentContainer>
      <h2>About Us</h2>
      <h3>The Personal Statement Generator</h3>

      <p>
        We’re a group of volunteer designers, programmers and researchers
        working on behalf of Hack for LA to build technology tools and solutions
        that help the residents of California.
      </p>
      <p>
        If you have any questions, concerns or if you would like to inquire
        about other things we can build for your community in anything related
        to criminal justice reform or equity e-mail us at:&nbsp;
        <Link
          underline="always"
          className={classes.linkStyle}
          href="mailto: recordclearance@hackforla.org"
        >
          recordclearance@hackforla.org
        </Link>
      </p>
    </ContentContainer>
  );
}
