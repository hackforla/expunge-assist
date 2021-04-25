import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
import Textarea from 'components/Textarea';
import RadioGroup from 'components/RadioGroup';

import {
  IInvolvementUnemployedState,
} from 'involvement-step/InvolvementCommon';

const InvolvementUnemployedFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: StepProps) => {
  const classes = useStyles();
  const [state, setState] = useState<IInvolvementUnemployedState>({
    unemploymentDescription: '',
    wouldClearanceHelp: '',
  });

  const updateFlowState = (changes: object) => {
    const newState = {
      ...state,
      ...changes,
    };
    setState(newState);
    setInputs(inputs); // todo
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexColumn}>
        Please describe why you are having trouble finding work. (2-3 sentences
        suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ unemploymentDescription: evt.target.value })
          }
          inputName="unemploymentDescription"
          placeholder="I have been having trouble finding work because..."
          multi={false}
          isValid
          defaultValue={state.unemploymentDescription}
        />
      </div>

      <div className={classes.flexColumn}>
        Do you believe that having your record cleared would help you find a job
        and be more involved in your community?
        <RadioGroup
          labels={['Yes', 'No']}
          inputName="wouldClearanceHelp"
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ wouldClearanceHelp: evt.target.value })
          }
          activeRadio={state.wouldClearanceHelp}
        />
      </div>

      <div>
        <Button onClick={() => goBackPage()} buttonText="BACK" />
        <Button onClick={() => goNextPage()} buttonText="NEXT" />
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

export default InvolvementUnemployedFlow;
