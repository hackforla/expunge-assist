import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import ContentContainer from 'components-layout/ContentContainer';

const useStyles = makeStyles(({ spacing, breakpoints }) =>
  createStyles({
    pageContainer: {
      width: '100%',
      paddingBottom: spacing(12),
      margin: 'auto',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',

      [breakpoints.down('sm')]: {
        paddingBottom: spacing(7),
      },
    },
    heroBg: {
      width: '100%',
      backgroundColor: '#F7EBFF',
      paddingTop: spacing(9),
      paddingBottom: spacing(9),

      [breakpoints.down('md')]: {
        paddingTop: spacing(2),
        paddingBottom: spacing(3),
      },
    },
    headerSection: {
      maxWidth: 980,
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 16px',
    },
    sectionTitle: {
      fontWeight: 500,
      margin: '0 0 8px 0',
    },
    subtitle: {
      fontWeight: 200,
      lineHeight: 1.5,
      margin: 0,
    },
    placeholder: {
      maxWidth: 980,
      margin: '32px auto 0',
      padding: '16px',
      borderRadius: 8,
      border: '1px dashed #adadad',
      color: '#25003F',
    },
  })
);

export default function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <div className={classes.heroBg}>
        <div className={classes.headerSection}>
          <h2 className={classes.sectionTitle}>Contact Us</h2>
          <p className={classes.subtitle}>
            We’d love to hear from you. Please use the form below.
          </p>
        </div>
      </div>

      <ContentContainer>
        <div className={classes.placeholder}>
          Placeholder: form goes here (temporary dummy component)
        </div>
      </ContentContainer>
    </div>
  );
}

