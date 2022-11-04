import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function InvolvementRecoveryFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { recoveryName, recoveryDescription } = formState.recoveryState;

  const recoveryNameValid = recoveryName !== '';
  const recoveryDescriptionValid = recoveryDescription !== '';
  const isNextDisabled = !recoveryNameValid || !recoveryDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      recoveryState: { ...formState.recoveryState, ...changes },
    });
  };

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
