import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import HelpPopUp from 'components/HelpPopUp';
import Paragraph from 'components/Paragraph';
import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

function WhyStep() {
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { clearRecordWhy, clearRecordHow } = formState.whyState;

  const clearRecordWhyValid = clearRecordWhy !== '';
  const clearRecordHowValid = clearRecordHow !== '';
  const isNextDisabled = !clearRecordWhyValid || !clearRecordHowValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      whyState: { ...formState.whyState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <p>Please finish this sentence: I want to clear my record because...</p>
        <Textarea
          id="clearRecordWhy"
          handleChange={onInputChange}
          placeholder="I am..."
          multi
          isValid={clearRecordWhyValid}
          defaultValue={clearRecordWhy}
        />

        <Paragraph disabled={!clearRecordWhyValid}>
          How will clearing your record change your life or help you? (2
          sentences maximum)
        </Paragraph>
        <Textarea
          id="clearRecordHow"
          handleChange={onInputChange}
          placeholder="Clearing my record will..."
          multi
          isValid={clearRecordHowValid}
          disabled={!clearRecordWhyValid}
          defaultValue={clearRecordHow}
        />
      </FormContainer>

      <HelpPopUp />

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default WhyStep;
