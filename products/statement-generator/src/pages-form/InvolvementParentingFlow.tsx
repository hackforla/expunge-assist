import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function InvolvementParentingFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    childName,
    parentYears,
    parentDescription,
  } = formState.parentingState;

  const childNameValid = childName !== '';
  const parentYearsValid = parentYears !== '';
  const parentDescriptionValid = parentDescription !== '';
  const isNextDisabled =
    !childNameValid || !parentYearsValid || !parentDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      parentingState: { ...formState.parentingState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="childName"
          label={t('parenting_form.childName_input_label')}
          placeholder={t('parenting_form.childName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={childName}
          type="text"
        />

        <Input
          id="parentYears"
          label={t('parenting_form.parentYears_number_label')}
          adornment={t('parenting_form.parentYears_number_append')}
          type="number"
          placeholder="1"
          handleChange={onInputChange}
          defaultValue={parentYears}
        />

        <Textarea
          id="parentDescription"
          label={t('parenting_form.parentDescription_input_label')}
          placeholder={t('parenting_form.parentDescription_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={parentDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementParentingFlow;
