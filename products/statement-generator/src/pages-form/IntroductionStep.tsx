import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import RadioGroup from 'components/RadioGroup';
import FormFlowContainer from 'components-layout/FormFlowContainer';
import { removePunctuation } from 'helpers/statementGenerators';

export function IntroductionStep() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { fullName, age, isVeteran } = formState.introduction;

  const fullNameValid = fullName !== '';
  const ageValid = Number(age) > 0;
  const isNextDisabled = !fullNameValid || !ageValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let finalValue = value.trim();

    if (id === 'fullName') {
      finalValue = removePunctuation(value)
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
    <FormFlowContainer isNextDisabled={isNextDisabled}>
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
    </FormFlowContainer>
  );
}

export default IntroductionStep;
