import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

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
      // Capitalize each word and remove punctuation at the end
      formattedValue = value
        .split(' ')
        .map(
          (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
        )
        .join(' ')
        .replace(/[.,/#!$%^&*;:?{}=_`~()-]+$/, '')
        .trim();
    } else if (id === 'serviceDescription') {
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
      communityServiceState: { ...formState.communityServiceState, ...changes },
    });
  };

  const serviceLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    serviceLabelRef.current?.focus();
  }, []);

  return (
    <ContentContainer>
      <FormContainer>
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
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementCommunityServiceFlow;
