import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    secondBtn: {
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
  const { t } = useTranslation();
  const classes = useStyles();
  const utilityClasses = useUtilityStyles();
  const [updatedContent, setUpdatedContent] = useState(content);

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
      <Textarea
        id="editedText"
        handleChange={(e) => setUpdatedContent(e.target.value)}
        value={updatedContent}
      />

      <div className={`${utilityClasses.buttonContainer} ${classes.container}`}>
        <Button
          theme="white"
          onClick={handleCancelClick}
          buttonText={t('button.cancel')}
        />
        <Button
          className={classes.secondBtn}
          onClick={handleSubmit}
          buttonText={t('button.save')}
        />
      </div>
    </form>
  );
}
