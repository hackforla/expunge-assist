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
            theme="cancel"
            buttonText="Cancel"
            onClick={handleCancelClick}
          />
          <Button onClick={handleSubmit} buttonText="Submit" />
        </div>
      </form>
    </div>
  );
}
