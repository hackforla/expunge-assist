import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import { PAGE_ENUMS } from 'contexts/RoutingProps';

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
  pageEnum: string;
}

const FormHeader: React.FC<Props> = ({ pageEnum }) => {
  const classes = useStyles();
  let showFormHeader: boolean;
  let percentageComplete: number;
  let formStep = 0;

  if (pageEnum === PAGE_ENUMS.INTRODUCTION) {
    formStep = 1;
    showFormHeader = true;
    percentageComplete = 20;
  } else if (pageEnum === PAGE_ENUMS.INVOLVEMENT.INITIAL) {
    formStep = 2;
    showFormHeader = true;
    percentageComplete = 40;
  } else if (pageEnum === PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED) {
    formStep = 3;
    showFormHeader = true;
    percentageComplete = 40;
  } else if (pageEnum === PAGE_ENUMS.GOALS) {
    formStep = 5;
    showFormHeader = true;
    percentageComplete = 60;
  } else if (pageEnum === PAGE_ENUMS.WHY) {
    formStep = 6;
    showFormHeader = true;
    percentageComplete = 80;
  } else if (pageEnum === PAGE_ENUMS.FINALIZE) {
    formStep = 6;
    showFormHeader = true;
    percentageComplete = 100;
  } else {
    formStep = 0;
    percentageComplete = 0;
    showFormHeader = false;
  }

  if (!showFormHeader) {
    return null;
  }

  return (
    <div className={classes.root}>
      {pageEnum === PAGE_ENUMS.INTRODUCTION && <h2>Introduce Yourself!</h2>}
      {pageEnum === PAGE_ENUMS.INVOLVEMENT.INITIAL && <h2>Involvement</h2>}
      {pageEnum === PAGE_ENUMS.INVOLVEMENT.JOB && <h2>Involvement: Job</h2>}
      {pageEnum === PAGE_ENUMS.INVOLVEMENT.COMMUNITY_SERVICE && (
        <h2>Involvement: Community Service</h2>
      )}
      {pageEnum === PAGE_ENUMS.INVOLVEMENT.RECOVERY && (
        <h2>Involvement: Recovery</h2>
      )}
      {pageEnum === PAGE_ENUMS.INVOLVEMENT.SCHOOL && (
        <h2>Involvement: School</h2>
      )}
      {pageEnum === PAGE_ENUMS.INVOLVEMENT.PARENTING && (
        <h2>Involvement: Parenting</h2>
      )}
      {pageEnum === PAGE_ENUMS.INVOLVEMENT.UNEMPLOYED && (
        <h2>Involvement: Unemployment</h2>
      )}
      {pageEnum === PAGE_ENUMS.GOALS && <h2>Goals</h2>}
      {pageEnum === PAGE_ENUMS.WHY && <h2>Why</h2>}
      {pageEnum === PAGE_ENUMS.FINALIZE && <h2>My Personal Statement</h2>}
      <ProgressBar percentage={percentageComplete} />
      {formStep < 6 && <p>Step {formStep} of 5</p>}
      {formStep === 6 && <p>Completed</p>}
    </div>
  );
};

export default FormHeader;
