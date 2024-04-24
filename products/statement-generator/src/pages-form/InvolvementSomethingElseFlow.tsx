import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

import Input from '../components/Input';

function InvolvementSomethingElseFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { activityName, activityDescription } = formState.somethingElseState;

  const activityNameValid = activityName !== '';
  const activityDescriptionValid = activityDescription !== '';
  const isNextDisabled = !activityNameValid || !activityDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      somethingElseState: { ...formState.somethingElseState, ...changes },
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
          id="activityName"
          label={t('something_else_form.activityName_input_label')}
          placeholder={t('something_else_form.activityName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={activityName}
          type="text"
        />

        <Textarea
          id="activityDescription"
          label={t('something_else_form.activityDescription_input_label')}
          placeholder={t(
            'something_else_form.activityDescription_input_placeholder'
          )}
          handleChange={onInputChange}
          defaultValue={activityDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementSomethingElseFlow;
