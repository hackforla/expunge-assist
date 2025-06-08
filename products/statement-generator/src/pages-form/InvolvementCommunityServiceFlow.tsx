import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';
import FormFlowContainer from 'components-layout/FormFlowContainer';

import {
  capitalizeEachWord,
  capitalizeSentences,
  capitalizeStandaloneI,
} from 'helpers/statementGenerators';
import Input from '../components/Input';

function InvolvementCommunityServiceFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const {
    organizationName,
    serviceDescription,
  } = formState.communityServiceState;

  const organizationNameValid = organizationName !== '';
  const serviceDescriptionValid = serviceDescription !== '';
  const isNextDisabled = !organizationNameValid || !serviceDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value.trim();

    if (id === 'organizationName') {
      formattedValue = capitalizeEachWord(value);
    } else if (id === 'serviceDescription') {
      formattedValue = capitalizeSentences(value);
    }

    formattedValue = capitalizeStandaloneI(formattedValue);

    const changes = { [id]: formattedValue };
    updateStepToForm({
      communityServiceState: { ...formState.communityServiceState, ...changes },
    });
  };

  const serviceLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    serviceLabelRef.current?.focus();
  }, []);

  return (
    <FormFlowContainer isNextDisabled={isNextDisabled}>
      <Input
        id="organizationName"
        label={t('community_service_form.organizationName_input_label')}
        placeholder={t(
          'community_service_form.organizationName_input_placeholder'
        )}
        handleChange={onInputChange}
        defaultValue={organizationName}
        shortWidth
        type="text"
        labelRef={serviceLabelRef}
      />

      <Textarea
        id="serviceDescription"
        label={t('community_service_form.serviceDescription_input_label')}
        placeholder={t(
          'community_service_form.serviceDescription_input_placeholder'
        )}
        handleChange={onInputChange}
        defaultValue={serviceDescription}
        rows={3}
      />
    </FormFlowContainer>
  );
}

export default InvolvementCommunityServiceFlow;
