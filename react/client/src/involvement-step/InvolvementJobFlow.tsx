import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Input from 'components/Input';

import { IJobFlowProps } from 'involvement-step/InvolvementCommon';

const InvolvementJobFlow = ({ state, onChangeState }: IJobFlowProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="adjacent-mar-top">
        What is the name of the company you work for?
      </div>

      <div className={classes.flexColumn}>
        <Input
          placeholder='Name of company'
          handleChange={() => onChangeState({ companyName: !state.companyName })}
          type='text'
          inputName='companyName'
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: 24,
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

export default InvolvementJobFlow;
