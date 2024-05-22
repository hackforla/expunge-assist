import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function InvolvementParentingFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { numberChildren, parentDescription } = formState.parentingState;

  const numberChildrenValid = numberChildren !== '';
  const parentDescriptionValid = parentDescription !== '';
  const isNextDisabled = !numberChildrenValid || !parentDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value.trim();

    if (id === 'parentDescription') {
      // Capitalize the first letter of each sentence and add period if missing
      formattedValue = value.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
        c.toUpperCase()
      );
      if (!/[.!?]$/.test(formattedValue.trim())) {
        formattedValue = `${formattedValue.trim()}.`;
      }
    }

    const changes = { [id]: formattedValue };
    updateStepToForm({
      parentingState: { ...formState.parentingState, ...changes },
    });
  };

  const parentLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    parentLabelRef.current?.focus();
  }, []);

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="numberChildren"
          label={t('parenting_form.parentChildren_number_label')}
          type="number"
          placeholder="0"
          handleChange={onInputChange}
          defaultValue={numberChildren}
          labelRef={parentLabelRef}
        />

        <Textarea
          id="parentDescription"
          label={t('parenting_form.parentDescription_input_label')}
          placeholder={t('parenting_form.parentDescription_input_placeholder')}
          handleChange={onInputChange}
          defaultValue={parentDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementParentingFlow;
