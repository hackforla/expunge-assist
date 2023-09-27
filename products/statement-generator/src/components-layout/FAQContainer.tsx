import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

interface IContentContainer {
  children?: any;
  className?: string;
}

const useStyles = makeStyles(({ breakpoints, spacing }) =>
  createStyles({
    FAQContainer: {
      maxWidth: '996px',
      minWidth: '300px',
      width: '69.2%',
      padding: spacing(3),
      paddingTop: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flex: '1 0 auto',
      flexDirection: 'column',

      [breakpoints.down('sm')]: {
        padding: spacing(2),
      },

      [breakpoints.down('xs')]: {
        marginLeft: 'initial',
        marginRight: 'initial',
        width: '100%',
      },
    },
  })
);

const FAQContainer = ({ children, className = '' }: IContentContainer) => {
  const classes = useStyles();

  return (
    <div className={`${classes.FAQContainer} ${className}`}>{children}</div>
  );
};

export default FAQContainer;
