import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import FormFlowContainer from 'components-layout/FormFlowContainer';

import {
  capitalizeEachWord,
  capitalizeSentences,
  capitalizeStandaloneI,
} from 'helpers/statementGenerators';

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
      formattedValue = capitalizeEachWord(value);
    } else if (id === 'passionDescription') {
      formattedValue = capitalizeSentences(value);
    }

    formattedValue = capitalizeStandaloneI(formattedValue);

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
    <FormFlowContainer isNextDisabled={isNextDisabled}>
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
    </FormFlowContainer>
  );
}

export default InvolvementSchoolFlow;
