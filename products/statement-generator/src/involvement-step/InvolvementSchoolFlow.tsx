import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Input from 'components/Input';
import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';
import FormContainer from 'page-layout/FormContainer';

function InvolvementSchoolFlow() {
  const { formState, updateStepToForm } = useContext(FormStateContext);
  const { schoolName, studyName, passionDescription } = formState.schoolState;

  const schoolNameValid = schoolName !== '';
  const studyNameValid = studyName !== '';
  const passionDescriptionValid = passionDescription !== '';
  const isNextDisabled =
    !schoolNameValid || !studyNameValid || !passionDescriptionValid;

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.currentTarget;
    const changes = { [id]: value };
    updateStepToForm({
      schoolState: { ...formState.schoolState, ...changes },
    });
  };

  return (
    <ContentContainer>
      <FormContainer>
        <Input
          id="schoolName"
          label="What is the name of the school you are attending?"
          handleChange={onInputChange}
          placeholder="Name of School"
          defaultValue={schoolName}
          type="text"
        />

        <Input
          id="studyName"
          label="What are you currently studying?"
          handleChange={onInputChange}
          placeholder="Name of Subject/Study Area"
          disabled={!schoolNameValid}
          defaultValue={studyName}
          type="text"
        />

        <Textarea
          id="passionDescription"
          label="Why are you passionate about studying this? (2-3 sentences suggested)"
          handleChange={onInputChange}
          placeholder="I am passionate about..."
          disabled={!studyNameValid}
          defaultValue={passionDescription}
          rows={3}
        />
      </FormContainer>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementSchoolFlow;
