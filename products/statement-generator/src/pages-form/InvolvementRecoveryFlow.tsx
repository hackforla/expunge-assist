import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';
import {
  capitalizeSentences,
  removePunctuationAndCapitalizeFirstWord,
} from 'helpers/statementGenerators';

function InvolvementRecoveryFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { recoveryName, recoveryDescription } = formState.recoveryState;

  const recoveryNameValid = recoveryName !== '';
  const recoveryDescriptionValid = recoveryDescription !== '';
  const isNextDisabled = !recoveryNameValid || !recoveryDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value.trim();

    if (id === 'recoveryName') {
      formattedValue = removePunctuationAndCapitalizeFirstWord(value);
    } else if (id === 'recoveryDescription') {
      formattedValue = capitalizeSentences(value);
    }

    const changes = { [id]: formattedValue };
    updateStepToForm({
      recoveryState: { ...formState.recoveryState, ...changes },
    });
  };

  const recoveryLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    recoveryLabelRef.current?.focus();
  }, []);

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="recoveryName"
          label={t('recovery_form.recoveryName_input_label')}
          placeholder={t('recovery_form.recoveryName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={recoveryName}
          shortWidth
          type="text"
          labelRef={recoveryLabelRef}
        />

        <Textarea
          id="recoveryDescription"
          label={t('recovery_form.recoveryDescription_input_label')}
          placeholder={t('recovery_form.recoveryDescription_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={recoveryDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementRecoveryFlow;
