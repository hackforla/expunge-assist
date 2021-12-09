import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import useUtilityStyles from 'styles/utilityStyles';
import Textarea from './Textarea';
import Button from './Button';

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '70px',
      margin: '0 auto',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: '2px',
    },
    purpleButton: {
      height: '35px',
      backgroundColor: '#9903ff',
      color: '#fff',
      borderRadius: '4px',
      width: '70px',
      letterSpacing: '1px',
      border: '1px solid #777',
    },
    cancelButton: {
      height: '35px',
      backgroundColor: '#ff3403',
      letterSpacing: '1px',
      borderRadius: '4px',
      width: '70px',
      color: '#fff',
      border: '1px solid #777',
    },
  })
);

interface EditContentProps {
  setIsEditing: (v: boolean) => void;
  content: string;
}

export default function EditContent({
  setIsEditing,
  content,
}: EditContentProps) {
  const [updatedContent, setUpdatedContent] = useState(content);
  const classes = useStyles();
  const utilityClasses = useUtilityStyles({});

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedContent(content);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };
  return (
    <div className={utilityClasses.contentContainer}>
      <form className={classes.form}>
        <div className={utilityClasses.flexColumn}>
          <Textarea
            multi
            inputName="editedText"
            handleChange={(e) => setUpdatedContent(e.target.value)}
            value={updatedContent}
          />
        </div>
        <div className={utilityClasses.buttonContainer}>
          <Button
            className={classes.cancelButton}
            buttonText="Cancel"
            onClick={handleCancelClick}
          />
          <Button
            className={classes.purpleButton}
            onClick={handleSubmit}
            buttonText="Submit"
          />
        </div>
      </form>
    </div>
  );
}
