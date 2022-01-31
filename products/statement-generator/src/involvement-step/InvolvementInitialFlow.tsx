import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Checkbox from 'components/Checkbox';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

function InvolvementInitialFlow() {
  const utilityClasses = useUtilityStyles();
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
      <div className={utilityClasses.flexColumn}>
        What things have you been involved with since your conviction?
      </div>
      <div className={utilityClasses.flexColumn}>
        Please check all that apply:
      </div>
      <div className={utilityClasses.flexColumn}>
        <Checkbox
          id="isJobChecked"
          checked={isJobChecked || false}
          onChange={onCheckboxChange}
          label="Jobs"
        />

        <Checkbox
          id="isRecoveryChecked"
          checked={isRecoveryChecked || false}
          onChange={onCheckboxChange}
          label="Recovery"
        />

        <Checkbox
          id="isSchoolChecked"
          checked={isSchoolChecked || false}
          onChange={onCheckboxChange}
          label="School"
        />

        <Checkbox
          id="isParentingChecked"
          checked={isParentingChecked || false}
          onChange={onCheckboxChange}
          label="Parenting"
        />

        <Checkbox
          id="isCommunityChecked"
          checked={isCommunityChecked || false}
          onChange={onCheckboxChange}
          label="Community Service"
        />

        <Checkbox
          id="isNoneChecked"
          checked={isNoneChecked || false}
          onChange={onCheckboxChange}
          label="None of the above"
        />
      </div>

      <FlowNavigation isNextDisabled={!isNextEnabled} />
    </ContentContainer>
  );
}

export default InvolvementInitialFlow;
