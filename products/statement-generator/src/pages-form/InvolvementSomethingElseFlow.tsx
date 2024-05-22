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
    let formattedValue = value.trim(); // Trim all trailing and leading whitespace

    // For activityName, remove any punctuation at the end
    if (id === 'activityName') {
      formattedValue = formattedValue.replace(/[.,/#!$%^&*;:?{}=_`~()-]+$/, '');
    }
    // For activityDescription, capitalize the first word of each sentence and ensure it ends with a period if no other punctuation marks are present
    else if (id === 'activityDescription') {
      formattedValue = formattedValue.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
        c.toUpperCase()
      );
      // Check if it ends with punctuation, if not, add a period
      if (!/[.!?]$/.test(formattedValue)) {
        formattedValue += '.';
      }
    }

    const changes = { [id]: formattedValue };
    updateStepToForm({
      somethingElseState: { ...formState.somethingElseState, ...changes },
    });
  };

  const somethingElseLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    somethingElseLabelRef.current?.focus();
  }, []);

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="activityName"
          label={t('something_else_form.activityName_input_label')}
          placeholder={t('something_else_form.activityName_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={activityName}
          type="text"
          labelRef={somethingElseLabelRef}
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
