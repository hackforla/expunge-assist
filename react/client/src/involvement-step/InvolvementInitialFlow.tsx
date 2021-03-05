import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Checkbox from 'components/Checkbox';

import { ICheckboxFlowProps } from 'involvement-step/InvolvementCommon';

const InvolvementInitialFlow = ({ state, onChangeState }: ICheckboxFlowProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="adjacent-mar-top">
        What things have you been involved with since your conviction?
      </div>
      <div className="adjacent-mar-top">Please check all that apply:</div>
      <div className={classes.flexColumn}>
        <Checkbox
          checked={state.isJobChecked}
          onChange={() => onChangeState({ isJobChecked: !state.isJobChecked })}
          label="Jobs"
        />

        <Checkbox
          checked={state.isRecoveryChecked}
          onChange={() =>
            onChangeState({
              isRecoveryChecked: !state.isRecoveryChecked,
            })
          }
          label="Recovery"
        />

        <Checkbox
          checked={state.isSchoolChecked}
          onChange={() =>
            onChangeState({ isSchoolChecked: !state.isSchoolChecked })
          }
          label="School"
        />

        <Checkbox
          checked={state.isParentingChecked}
          onChange={() =>
            onChangeState({
              isParentingChecked: !state.isParentingChecked,
            })
          }
          label="Parenting"
        />

        <Checkbox
          checked={state.isCommunityChecked}
          onChange={() =>
            onChangeState({
              isCommunityChecked: !state.isCommunityChecked,
            })
          }
          label="Community Service"
        />

        <Checkbox
          checked={state.isNoneChecked}
          onChange={() =>
            onChangeState({ isNoneChecked: !state.isNoneChecked })
          }
          label="None of the above"
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

export default InvolvementInitialFlow;
