import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import ProgressBar from 'components/ProgressBar';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#f7ebff',
      color: 'black',
      height: '120px',
      marginTop: '20px',
      paddingLeft: '12px',
      borderBottomRightRadius: '64px',
      '& h2': {
        margin: '33px 0 18px',
      },
      '& p': {
        color: '3d0066',
        opacity: '30%',
        marginTop: '16px',
      },
    },
  })
);

interface Props {
  pageNumber: number;
}

const FormHeader: React.FC<Props> = ({ pageNumber }) => {
  const classes = useStyles();
  let showFormHeader: boolean;
  let formStep: number;
  let percentageComplete: number;

  if (pageNumber === 2) {
    formStep = 1;
    showFormHeader = true;
    percentageComplete = 20;
  } else if (pageNumber === 3) {
    formStep = 2;
    showFormHeader = true;
    percentageComplete = 40;
  } else if (pageNumber === 5) {
    formStep = 3;
    showFormHeader = true;
    percentageComplete = 60;
  } else if (pageNumber === 6) {
    formStep = 5;
    showFormHeader = true;
    percentageComplete = 20;
  } else if (pageNumber === 7) {
    formStep = 6;
    showFormHeader = true;
    percentageComplete = 20;
  } else if (pageNumber === 13) {
    formStep = 6;
    showFormHeader = true;
    percentageComplete = 20;
  } else {
    formStep = 0;
    percentageComplete = 20;
    showFormHeader = false;
  }

  if (!showFormHeader) {
    return null;
  }

  return (
    <div className={classes.root}>
      {formStep === 1 && <h2>Introduce Yourself!</h2>}
      {formStep === 2 && <h2>Life Changes</h2>}
      {formStep === 3 && <h2>Involvement</h2>}
      {formStep === 4 && <h2>Goals</h2>}
      {formStep === 5 && <h2>Why</h2>}
      {formStep === 6 && <h2>My Personal Statement</h2>}
      <ProgressBar percentage={percentageComplete} />
      {formStep < 6 && <p>Step {formStep} of 5</p>}
      {formStep === 6 && <p>Completed</p>}
    </div>
  );
};

export default FormHeader;
