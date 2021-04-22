import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import Button from 'components/Button';
import Textarea from 'components/Textarea';

import {
  IInvolvementCommunityServiceFlowProps,
  IInvolvementServiceState,
} from 'involvement-step/InvolvementCommon';

const InvolvementCommunityServiceFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: IInvolvementCommunityServiceFlowProps) => {
  const classes = useStyles();
  const [state, setState] = useState<IInvolvementServiceState>({
    organizationName: '',
    serviceDescription: '',
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
        What is the name of the community service organization that you are involved with?
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ organizationName: evt.target.value })
          }
          inputName="organizationName"
          placeholder="Name of Organization"
          multi={false}
          isValid
          defaultValue={state.organizationName}
        />
      </div>

      <div className={classes.flexColumn}>
        What do you do at this community service organization? Why is this important to you?
(2-3 sentences suggested)
        <Textarea
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            updateFlowState({ serviceDescription: evt.target.value })
          }
          inputName="serviceDescription"
          placeholder="I have taken on responsibilities including..."
          multi={false}
          isValid
          defaultValue={state.serviceDescription}
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

export default InvolvementCommunityServiceFlow;
