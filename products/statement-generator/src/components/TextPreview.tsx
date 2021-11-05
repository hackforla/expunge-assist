import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: '25px 15px',
      padding: '15px',
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      borderRadius: '20px',
      '& h2': {
        color: '#9903FF',
        marginTop: 15,
      },
      '& p': {
        marginBottom: 15,
      },
    },
    flex: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 5,
    },
  })
);

interface ComponentProps {
  onAdjustClick: () => void;
  content: string;
  nameOfStep: string;
}

const TextPreview = ({
  onAdjustClick,
  content,
  nameOfStep,
}: ComponentProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <h2>{nameOfStep}</h2>
        <CreateIcon style={{ color: '#9903FF' }} onClick={onAdjustClick} />
      </div>
      <p>{content}</p>
    </div>
  );
};

export default TextPreview;
