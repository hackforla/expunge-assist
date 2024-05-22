import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import RadioGroup from 'components/RadioGroup';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

export function IntroductionStep() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { fullName, age, isVeteran } = formState.introduction;

  const fullNameValid = fullName !== '';
  const ageValid = Number(age) > 0;
  const isNextDisabled = !fullNameValid || !ageValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;

    let finalValue = value;
    // Check if the input is for the fullName field
    if (id === 'fullName') {
      // Remove any unwanted punctuation at the end of the string
      finalValue = finalValue.replace(/[.,/#!$%^&*;?:{}=\-_`~()]+$/, '');
      // Split the full name into parts, capitalize each part, and join back
      finalValue = finalValue
        .split(' ')
        .map(
          (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        )
        .join(' ');
    }

    const changes = { [id]: finalValue };
    updateStepToForm({
      introduction: { ...formState.introduction, ...changes },
    });
  };

  const fullNameLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    fullNameLabelRef.current?.focus();
  }, []);

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="fullName"
          label={t('introduction_form.fullName_input_label')}
          placeholder={t('introduction_form.fullName_input_placeholder')}
          defaultValue={fullName}
          shortWidth
          handleChange={onInputChange}
          type="text"
          labelRef={fullNameLabelRef}
        />

        <Input
          id="age"
          label={t('introduction_form.age_input_label')}
          adornment={t('introduction_form.age_input_append')}
          type="number"
          defaultValue={age}
          placeholder="0"
          handleChange={onInputChange}
        />

        <RadioGroup
          id="isVeteran"
          label={t('introduction_form.isVeteran_label')}
          choices={[t('button.yes'), t('button.no')]}
          value={isVeteran}
          handleChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            updateStepToForm({
              introduction: {
                ...formState.introduction,
                isVeteran: evt.currentTarget.value,
              },
            });
          }}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default IntroductionStep;
