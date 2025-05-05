import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import FormFlowContainer from 'components-layout/FormFlowContainer';

import {
  capitalizeSentences,
  capitalizeStandaloneI,
} from 'helpers/statementGenerators';

function InvolvementUnemploymentFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { unemploymentDescription } = formState.unemploymentState;

  const unemploymentDescriptionValid = unemploymentDescription !== '';
  const isNextDisabled = !unemploymentDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    let formattedValue = value.trim();

    formattedValue = capitalizeSentences(value);

    formattedValue = capitalizeStandaloneI(formattedValue);

    const changes = { [id]: formattedValue };
    updateStepToForm({
      unemploymentState: { ...formState.unemploymentState, ...changes },
    });
  };

  const unemploymentLabelRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    // Automatically focus the container when the component mounts
    unemploymentLabelRef.current?.focus();
  }, []);

  return (
    <FormFlowContainer isNextDisabled={isNextDisabled}>
        <Textarea
          id="unemploymentDescription"
          label={t('unemployment_form.unemploymentDescription_input_label')}
          placeholder={t(
            'unemployment_form.unemploymentDescription_input_placeholder'
          )}
          defaultValue={unemploymentDescription}
          handleChange={onInputChange}
          rows={3}
          labelRef={unemploymentLabelRef}
        />
    </FormFlowContainer>
  );
}

export default InvolvementUnemploymentFlow;
