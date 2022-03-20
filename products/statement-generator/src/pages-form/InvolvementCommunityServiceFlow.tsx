import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

import Input from '../components/Input';

function InvolvementCommunityServiceFlow() {
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

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="organizationName"
          label="What is the name of the community service organization that you are
        involved with?"
          handleChange={onInputChange}
          placeholder="Name of Organization"
          defaultValue={organizationName}
          type="text"
        />

        <Textarea
          id="serviceDescription"
          label="What do you do at this community service organization? Why is this
        important to you? (2-3 sentences suggested)"
          handleChange={onInputChange}
          placeholder="I have taken on responsibilities including..."
          disabled={!organizationNameValid}
          defaultValue={serviceDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementCommunityServiceFlow;
