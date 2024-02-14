import React, { forwardRef, useState } from 'react';

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
  })
);

interface ComponentProps {
  onSaveClick: (content: string) => void;
  content: string;
  nameOfStep: string;
  className?: string;
  style?: object;
}

const TextPreview = forwardRef<HTMLDivElement, ComponentProps>(
  ({ onSaveClick, content, nameOfStep, className = '', style }, ref) => {
    const classes = useStyles();
    const utilityClasses = useUtilityStyles();
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleClick = () => {
      setIsEditing(true);
    };

    return (
      <div
        ref={ref}
        className={`${classes.root} ${className}`}
        style={style}
        tabIndex={-1} // Make this div focusable
      >
        <div className={classes.previewHeader}>
          <h3>{nameOfStep}</h3>

          <div className={classes.actionHeader}>
            {!isEditing && (
              <CreateIcon
                className={`${utilityClasses.iconButton} create-icon-focusable`}
                onClick={handleClick}
                tabIndex={0}
                role="button"
                aria-label="Edit content"
                onKeyDown={(e) => {
                  // Check if the key pressed is Enter or Spacebar
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleClick();
                    e.preventDefault(); // Prevent the default action to avoid scrolling on Spacebar press
                  }
                }}
              />
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
  }
);

export default TextPreview;
