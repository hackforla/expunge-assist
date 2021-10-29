import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      height: '100%',
      width: '70%',
    },
    form: {
      height: '120px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
    },
    textContainer: {
      width: '100%',
    },
    textArea: {
      minHeight: '80px',
      width: '100%',
      padding: '10px',
      fontSize: '.rem',
      borderRadius: ' 5px',
      border: '1px solid #ccc',
      boxShadow: '1px 1px 1px #999',
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
  setFormState: (value: any) => void;
}

export default function EditContent({
  setIsEditing,
  content,
  setFormState,
}: EditContentProps) {
  const [updatedContent, setUpdatedContent] = useState(content);
  // This value will be the name of the input  e.x. <input name='blah' />  which coincides with the targeted piece of state. {editdText: updatedContent}
  const [editedField, setEditedField] = useState(null);
  const classes = useStyles();
  const { updateStepToForm } = React.useContext(FormStateContext);

  const handleChange = (e: any) => {
    setEditedField(e.target.name);
    setUpdatedContent(e.target.value);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedContent(content);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateStepToForm({ editedText: updatedContent });
    setIsEditing(false);
  };
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <div className={classes.textContainer}>
          <textarea
            name="editedText"
            className={classes.textArea}
            onChange={handleChange}
            value={updatedContent}
          />
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.cancelButton} onClick={handleCancelClick}>
            Cancel
          </button>
          <button
            type="submit"
            className={classes.purpleButton}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
