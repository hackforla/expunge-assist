import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
    },
  })
);

export default function FormContainer(props: any) {
  const classes = useStyles();

  return <form className={classes.formContainer} {...props} />;
}
