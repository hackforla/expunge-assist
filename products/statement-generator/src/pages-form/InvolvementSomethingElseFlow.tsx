import React, { useRef, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';
import FormFlowContainer from 'components-layout/FormFlowContainer';

import {
  capitalizeSentences,
  removePunctuation,
  capitalizeStandaloneI,
} from 'helpers/statementGenerators';
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
    let formattedValue = value.trim();

    if (id === 'activityName') {
      formattedValue = removePunctuation(value);
    } else if (id === 'activityDescription') {
      formattedValue = capitalizeSentences(value);
    }

    formattedValue = capitalizeStandaloneI(formattedValue);

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
    <FormFlowContainer isNextDisabled={isNextDisabled}>
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
    </FormFlowContainer>
  );
}

export default InvolvementSomethingElseFlow;
