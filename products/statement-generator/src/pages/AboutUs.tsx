import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, createStyles, Link } from '@material-ui/core';

import Button from 'components/Button';

import ContentContainer from 'page-layout/ContentContainer';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(() =>
  createStyles({
    linkStyle: {
      color: 'white',
    },
  })
);

export default function AboutUs() {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });
  const history = useHistory();

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

      <div className={utilityClasses.buttonContainer}>
        <Button
          onClick={() => history.goBack()}
          buttonText="Back"
          theme="transparent-on-dark"
        />
      </div>
    </ContentContainer>
  );
}
