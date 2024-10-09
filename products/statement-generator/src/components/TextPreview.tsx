import React, { useState, useRef, useEffect } from 'react';

import { makeStyles, createStyles } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

import useUtilityStyles from 'styles/utilityStyles';

import EditContent from './EditContent';

const useStyles = makeStyles(({ palette, spacing }) =>
  createStyles({
    root: {
      padding: spacing(2),
      boxShadow: '4px 4px 16px rgba(61, 0, 102, 0.25)',
      borderRadius: '20px',
    },
    previewHeader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: spacing(2),
      color: palette.primary.main,

      '& h3': {
        flexGrow: 1,
      },
    },
    actionHeader: {
      display: 'flex',
      flexDirection: 'row',

      '& svg + svg': {
        marginLeft: spacing(1),
      },
    },
    editButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: palette.primary.main,
      '&:focus': {
        outline: 'none',
        boxShadow: `0 0 0 2px ${palette.primary.main}`,
      },
    },
  })
);

interface ComponentProps {
  onSaveClick: (content: string) => void;
  content: string;
  nameOfStep: string;
  className?: string;
  style?: object;
  isFirstPreview?: boolean;
}

const TextPreview = ({
  onSaveClick,
  content,
  nameOfStep,
  className = '',
  style,
  isFirstPreview,
}: ComponentProps) => {
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const editButtonRef = useRef<HTMLButtonElement | null>(null);
  const previewContainerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isFirstPreview && previewContainerRef.current) {
      previewContainerRef.current.focus();
    }
  }, [isFirstPreview]);

  return (
    <div
      ref={previewContainerRef}
      className={`${classes.root} ${className}`}
      style={style}
    >
      <div className={classes.previewHeader}>
        <h3>{nameOfStep}</h3>

        <div className={classes.actionHeader}>
          {!isEditing && (
            <button
              className={`${utilityClasses.iconButton} ${classes.editButton}`}
              onClick={handleClick}
              aria-label="Edit content"
              ref={editButtonRef}
              tabIndex={0}
            >
              <CreateIcon />
            </button>
          )}
        </div>
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
