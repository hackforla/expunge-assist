import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import FormStateContext from 'contexts/FormStateContext';

import Checkbox from 'components/Checkbox';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

const useStyles = makeStyles<Theme>(({ palette, spacing }) =>
  createStyles({
    checkboxGroup: {
      '& .MuiFormLabel-root': {
        color: palette.common.black,
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: palette.common.black,
      },

      '& .MuiFormLabel-root + .MuiFormGroup-root': {
        marginTop: spacing(1),
      },
    },
  })
);

function InvolvementInitialFlow() {
  const classes = useStyles();

  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    isJobChecked,
    isRecoveryChecked,
    isSchoolChecked,
    isParentingChecked,
    isCommunityChecked,
    isNoneChecked,
  } = formState.involvement;

  const isNextEnabled =
    isJobChecked ||
    isRecoveryChecked ||
    isSchoolChecked ||
    isParentingChecked ||
    isCommunityChecked ||
    isNoneChecked;

  const onCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = evt.currentTarget;
    if (id === 'isNoneChecked' && checked) {
      updateStepToForm({
        involvement: {
          isJobChecked: false,
          isRecoveryChecked: false,
          isSchoolChecked: false,
          isParentingChecked: false,
          isCommunityChecked: false,
          isNoneChecked: true,
        },
      });
      return;
    }

    const changes = {
      [id]: Boolean(checked),
      isNoneChecked: false,
    };
    updateStepToForm({
      involvement: { ...formState.involvement, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <FormControl className={classes.checkboxGroup}>
          <FormLabel htmlFor="involvement-checkboxes">
            What things have you been involved with since your conviction?
            <br />
            Please check all that apply:
          </FormLabel>
          <FormGroup id="involvement-checkboxes">
            <Checkbox
              id="isJobChecked"
              checked={isJobChecked}
              onChange={onCheckboxChange}
              label="Jobs"
            />

            <Checkbox
              id="isRecoveryChecked"
              checked={isRecoveryChecked}
              onChange={onCheckboxChange}
              label="Recovery"
            />

            <Checkbox
              id="isSchoolChecked"
              checked={isSchoolChecked}
              onChange={onCheckboxChange}
              label="School"
            />

            <Checkbox
              id="isParentingChecked"
              checked={isParentingChecked}
              onChange={onCheckboxChange}
              label="Parenting"
            />

            <Checkbox
              id="isCommunityChecked"
              checked={isCommunityChecked}
              onChange={onCheckboxChange}
              label="Community Service"
            />

            <Checkbox
              id="isNoneChecked"
              checked={isNoneChecked}
              onChange={onCheckboxChange}
              label="None of the above"
            />
          </FormGroup>
        </FormControl>
      </FormContainer>

      <FlowNavigation isNextDisabled={!isNextEnabled} />
    </ContentContainer>
  );
}

export default InvolvementInitialFlow;
