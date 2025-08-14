import React, { useContext, useEffect, useRef } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Checkbox from 'components/Checkbox';
import FormFlowContainer from 'components-layout/FormFlowContainer';

const useStyles = makeStyles<Theme>(({ palette }) =>
  createStyles({
    checkboxGroup: {
      gap: 24,
      '& .MuiFormLabel-root': {
        color: palette.common.black,
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: palette.common.black,
      },
      '& .MuiFormGroup-root': {
        gap: 16,
      },
    },
  })
);

function InvolvementInitialFlow() {
  const { t } = useTranslation();
  const classes = useStyles();
  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    isJobChecked,
    isRecoveryChecked,
    isSchoolChecked,
    isParentingChecked,
    isCommunityChecked,
    isSomethingElseChecked,
    isUnemploymentChecked,
  } = formState.involvement;

  const isNextEnabled =
    isJobChecked ||
    isRecoveryChecked ||
    isSchoolChecked ||
    isParentingChecked ||
    isCommunityChecked ||
    isSomethingElseChecked ||
    isUnemploymentChecked;

  const onCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = evt.currentTarget;
    const changes = {
      [id]: Boolean(checked),
    };
    updateStepToForm({
      involvement: { ...formState.involvement, ...changes },
    });
  };

  return (
    <FormFlowContainer
      ref={contentContainerRef}
      tabIndex={-1}
      isNextDisabled={!isNextEnabled}
    >
      <FormControl className={classes.checkboxGroup}>
        <FormLabel htmlFor="involvement-checkboxes">
          {t('involvement_form.checkboxgroup_label')}
        </FormLabel>
        <FormGroup id="involvement-checkboxes">
          <Checkbox
            useTeal
            id="isJobChecked"
            checked={isJobChecked}
            onChange={onCheckboxChange}
            label={t('sections.job')}
            helperText={t('sections_helper_text.job')}
          />
          <Checkbox
            useTeal
            id="isUnemploymentChecked"
            checked={isUnemploymentChecked}
            onChange={onCheckboxChange}
            label={t('sections.unemployment')}
            helperText={t('sections_helper_text.unemployment')}
          />
          <Checkbox
            useTeal
            id="isRecoveryChecked"
            checked={isRecoveryChecked}
            onChange={onCheckboxChange}
            label={t('sections.self_improvement')}
            helperText={t('sections_helper_text.self_improvement')}
          />

          <Checkbox
            useTeal
            id="isSchoolChecked"
            checked={isSchoolChecked}
            onChange={onCheckboxChange}
            label={t('sections.education')}
            helperText={t('sections_helper_text.education')}
          />

          <Checkbox
            useTeal
            id="isParentingChecked"
            checked={isParentingChecked}
            onChange={onCheckboxChange}
            label={t('sections.parenting')}
            helperText={t('sections_helper_text.parenting')}
          />

          <Checkbox
            useTeal
            id="isCommunityChecked"
            checked={isCommunityChecked}
            onChange={onCheckboxChange}
            label={t('sections.community_service')}
            helperText={t('sections_helper_text.community_service')}
          />

          <Checkbox
            useTeal
            id="isSomethingElseChecked"
            checked={isSomethingElseChecked}
            onChange={onCheckboxChange}
            label={t('sections.something_else')}
            helperText={t('sections_helper_text.something_else')}
          />
        </FormGroup>
      </FormControl>
    </FormFlowContainer>
  );
}

export default InvolvementInitialFlow;
