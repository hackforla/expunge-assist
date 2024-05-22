import React, { useRef, useEffect, useContext } from 'react';
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
    let formattedValue = value.trim();

    if (id === 'schoolName' || id === 'studyName') {
      // Remove any unwanted punctuation at the end and capitalize each word
      formattedValue = value.replace(/[.,/#!$%^&*;:?{}=_`~()-]+$/, ''); // Fixed regex to not include unnecessary escapes
      formattedValue = formattedValue
        .split(' ')
        .map(
          (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        )
        .join(' ')
        .trim();
    } else if (id === 'passionDescription') {
      // Capitalize the first word of each sentence and ensure it ends with a period
      formattedValue = value.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
        c.toUpperCase()
      );
      if (!/[.!?]$/.test(formattedValue.trim())) {
        formattedValue = `${formattedValue.trim()}.`;
      }
    }

    const changes = { [id]: formattedValue };
    updateStepToForm({
      schoolState: { ...formState.schoolState, ...changes },
    });
  };

  const schoolLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    schoolLabelRef.current?.focus();
  }, []);

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
          labelRef={schoolLabelRef}
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
