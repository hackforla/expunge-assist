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
    const changes = { [id]: value };
    updateStepToForm({
      communityServiceState: { ...formState.communityServiceState, ...changes },
    });
  };

  const contentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    contentContainerRef.current?.focus();
  }, []);

  return (
    <ContentContainer ref={contentContainerRef} tabIndex={-1}>
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
