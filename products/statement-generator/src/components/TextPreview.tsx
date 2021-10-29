import React, { useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import EditContent from './EditContent';

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
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: 5,
    },
    textContainer: {
      display: 'flex',
    },
  })
);

interface ComponentProps {
  onAdjustClick: () => void;
  content: string;
  nameOfStep: string;
  setFormState: (value: any) => void;
}

const TextPreview = ({
  onAdjustClick,
  content,
  nameOfStep,
  setFormState,
}: ComponentProps) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <h2>{nameOfStep}</h2>
        {isEditing ? (
          <EditContent
            setFormState={setFormState}
            content={content}
            setIsEditing={setIsEditing}
          />
        ) : (
          <div className={classes.textContainer}>
            <p>{content}</p>
            <CreateIcon style={{ color: '#9903FF' }} onClick={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TextPreview;
