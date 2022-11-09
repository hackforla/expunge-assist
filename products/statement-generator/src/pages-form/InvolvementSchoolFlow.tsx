import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function InvolvementSchoolFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { schoolName, studyName, passionDescription } = formState.schoolState;

  const schoolNameValid = schoolName !== '';
  const studyNameValid = studyName !== '';
  const passionDescriptionValid = passionDescription !== '';
  const isNextDisabled =
    !schoolNameValid || !studyNameValid || !passionDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      schoolState: { ...formState.schoolState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="schoolName"
          label={t('education_form.schoolName_input_label')}
          placeholder={t('education_form.schoolName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={schoolName}
          shortWidth
          type="text"
        />

        <Input
          id="studyName"
          label={t('education_form.studyName_input_label')}
          placeholder={t('education_form.studyName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={studyName}
          shortWidth
          type="text"
        />

        <Textarea
          id="passionDescription"
          label={t('education_form.passionDescription_input_label')}
          placeholder={t('education_form.passionDescription_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={passionDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementSchoolFlow;
