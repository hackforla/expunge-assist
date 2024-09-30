import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    linkAsText: {
      color: '#25003F',
      '&:visited': {
        color: '#25003F', // Same color for visited links
      },
      '&:hover': {
        color: '#25003F', // Same color on hover
      },
    },
  })
);

interface LinkAsTextProps {
  link: string;
  label?: string;
}

export default function LinkAsText({ link, label }: LinkAsTextProps) {
  const classes = useStyles();
  return (
    <>
      &nbsp;
      <Link
        underline="always"
        className={classes.linkAsText}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label || link}
      </Link>
      &nbsp;
    </>
  );
}
