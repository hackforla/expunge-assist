import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';

import FormStateContext from 'contexts/FormStateContext';

import Button from 'components/Button';
import PopUp from 'components/PopUp';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    flexEnd: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
);

interface FormFooterProps {
  isFormComplete: boolean;
  isPreviewing: boolean;
  togglePreview?: () => void;
}

const FormFooter = ({
  isFormComplete,
  isPreviewing,
  togglePreview,
}: FormFooterProps) => {
  const classes = useStyles();
  const { goNextStep, goBackStep } = React.useContext(FormStateContext);

  return isPreviewing ? (
    <div className={classes.flexEnd}>
      <Button onClick={goNextStep} buttonText="LOOKS GOOD" hasArrow />
    </div>
  ) : (
    <div className={classes.root}>
      <Button onClick={goBackStep} buttonText="BACK" />
      {!isFormComplete && (
        <PopUp
          title="Some advice for your personal statement"
          info={
            '1. Remember that you are writing for a judge, so refrain from using informal language such as abbreviations or slang' +
            '\n' +
            '2. Write in complete sentences when given the option' +
            '\n' +
            '3. Use the first person when answering questions. This means telling the story from your point of view.' +
            '\n' +
            '4. Please try to limit your responses. We recommend each paragraph being 3-5 sentences.'
          }
        />
      )}
      {isFormComplete && togglePreview && (
        <Button onClick={() => togglePreview()} buttonText="NEXT" hasArrow />
      )}
    </div>
  );
};

export default FormFooter;
