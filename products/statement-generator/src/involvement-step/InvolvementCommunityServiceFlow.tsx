import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';
import Input from '../components/Input';

function InvolvementCommunityServiceFlow() {
  const utilityClasses = useUtilityStyles();
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
      <div className={utilityClasses.flexColumn}>
        What is the name of the community service organization that you are
        involved with?
        <Input
          id="organizationName"
          handleChange={onInputChange}
          placeholder="Name of Organization"
          defaultValue={organizationName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What do you do at this community service organization? Why is this
        important to you? (2-3 sentences suggested)
        <Textarea
          id="serviceDescription"
          handleChange={onInputChange}
          placeholder="I have taken on responsibilities including..."
          multi
          isValid={serviceDescriptionValid}
          disabled={!organizationNameValid}
          defaultValue={serviceDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementCommunityServiceFlow;
