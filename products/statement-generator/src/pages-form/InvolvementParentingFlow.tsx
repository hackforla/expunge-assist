import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import FormFlowContainer from 'components-layout/FormFlowContainer';

import {
  capitalizeSentences,
  capitalizeStandaloneI,
} from 'helpers/statementGenerators';

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
      formattedValue = capitalizeSentences(value);
    }

    formattedValue = capitalizeStandaloneI(formattedValue);

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
    <FormFlowContainer isNextDisabled={isNextDisabled}>
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
    </FormFlowContainer>
  );
}

export default InvolvementParentingFlow;
