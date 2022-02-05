import React, { useState } from 'react';

import { makeStyles, createStyles } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import EditContent from './EditContent';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: {
      padding: spacing(3),
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      borderRadius: '20px',
    },
    previewHeader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: spacing(2),
      color: palette.primary.main,

      '& h2': {
        flexGrow: 1,
      },
    },
    iconStyle: {
      color: palette.primary.main,
    },
  })
);

interface ComponentProps {
  onSaveClick: (content: string) => void;
  content: string;
  nameOfStep: string;
}

const TextPreview = ({ onSaveClick, content, nameOfStep }: ComponentProps) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className={classes.root}>
      <div className={classes.previewHeader}>
        <h2>{nameOfStep}</h2>

        {!isEditing && (
          <CreateIcon className={classes.iconStyle} onClick={handleClick} />
        )}
      </div>

      {isEditing ? (
        <EditContent
          content={content}
          setIsEditing={setIsEditing}
          onSaveClick={onSaveClick}
        />
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};

export default TextPreview;
