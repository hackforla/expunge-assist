import React, { useContext } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Checkbox from 'components/Checkbox';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

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
  const { t } = useTranslation();
  const classes = useStyles();

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
    <ContentContainer>
      <FormContainer>
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
            />
            <Checkbox
              useTeal
              id="isUnemploymentChecked"
              checked={isUnemploymentChecked}
              onChange={onCheckboxChange}
              label={t('sections.unemployment')}
            />
            <Checkbox
              useTeal
              id="isRecoveryChecked"
              checked={isRecoveryChecked}
              onChange={onCheckboxChange}
              label={t('sections.recovery')}
            />

            <Checkbox
              useTeal
              id="isSchoolChecked"
              checked={isSchoolChecked}
              onChange={onCheckboxChange}
              label={t('sections.education')}
            />

            <Checkbox
              useTeal
              id="isParentingChecked"
              checked={isParentingChecked}
              onChange={onCheckboxChange}
              label={t('sections.parenting')}
            />

            <Checkbox
              useTeal
              id="isCommunityChecked"
              checked={isCommunityChecked}
              onChange={onCheckboxChange}
              label={t('sections.community_service')}
            />

            <Checkbox
              useTeal
              id="isSomethingElseChecked"
              checked={isSomethingElseChecked}
              onChange={onCheckboxChange}
              label={t('sections.something_else')}
            />
          </FormGroup>
        </FormControl>
      </FormContainer>

      <FlowNavigation isNextDisabled={!isNextEnabled} />
    </ContentContainer>
  );
}

export default InvolvementInitialFlow;
