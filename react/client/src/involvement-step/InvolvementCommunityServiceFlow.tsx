import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import FlowNavigation from 'components/FlowNavigation';
import Textarea from 'components/Textarea';

import { IInvolvementServiceState } from 'involvement-step/InvolvementCommon';

import useUtilityStyles from 'styles/utilityStyles';

const InvolvementCommunityServiceFlow = ({
  inputs,
  setInputs,
  goNextPage,
  goBackPage,
}: StepProps) => {
  const utilityClasses = useUtilityStyles({});
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
    <div className={utilityClasses.contentContainer}>
      <div className={classes.flexColumn}>
        What is the name of the community service organization that you are
        involved with?
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
        What do you do at this community service organization? Why is this
        important to you? (2-3 sentences suggested)
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

      <FlowNavigation goBackPage={goBackPage} goNextPage={goNextPage} />
    </div>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

export default InvolvementCommunityServiceFlow;
