import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import useUtilityStyles from 'styles/utilityStyles';
import Textarea from './Textarea';
import Button from './Button';

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    container: {
      justifyContent: 'flex-end',
    },
    cancelButton: {
      marginLeft: spacing(2),
    },
  })
);

interface EditContentProps {
  setIsEditing: (v: boolean) => void;
  onSaveClick: (content: string) => void;
  content: string;
}

export default function EditContent({
  setIsEditing,
  onSaveClick,
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
    onSaveClick(updatedContent);
  };

  return (
    <form className={classes.form}>
      <div className={utilityClasses.flexColumn}>
        <Textarea
          multi
          id="editedText"
          handleChange={(e) => setUpdatedContent(e.target.value)}
          value={updatedContent}
        />
      </div>
      <div className={`${utilityClasses.buttonContainer} ${classes.container}`}>
        <Button
          theme="cancel"
          buttonText="Cancel"
          onClick={handleCancelClick}
        />
        <Button
          className={classes.cancelButton}
          onClick={handleSubmit}
          buttonText="Submit"
        />
      </div>
    </form>
  );
}
