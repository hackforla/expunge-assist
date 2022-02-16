import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    imageStyles: {
      width: '100px',
      height: '100px',
      margin: '20px',
    },
  })
);

interface ThumbnailProps {
  src: string;
  alt: string;
}

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  const classes = useStyles();
  return <img className={classes.imageStyles} src={src} alt={alt} />;
};
