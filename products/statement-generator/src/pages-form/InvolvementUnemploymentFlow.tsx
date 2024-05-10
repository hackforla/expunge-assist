import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'components-layout/ContentContainer';
import FlowNavigation from 'components-layout/FlowNavigation';
import FormContainer from 'components-layout/FormContainer';

function InvolvementUnemploymentFlow() {
  const { t } = useTranslation();
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { unemploymentDescription } = formState.unemploymentState;

  const unemploymentDescriptionValid = unemploymentDescription !== '';
  const isNextDisabled = !unemploymentDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
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
    <ContentContainer>
      <FormContainer>
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
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementUnemploymentFlow;
