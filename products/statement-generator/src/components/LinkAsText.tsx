import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    linkAsText: {
      color: 'white',
    },
  })
);

export default function LinkAsText({ link }: any) {
  const classes = useStyles();
  return (
    <>
      &nbsp;
      <Link
        underline="always"
        className={classes.linkAsText}
        href={link}
        target="_blank"
      >
        {link}
      </Link>
      &nbsp;
    </>
  );
}
