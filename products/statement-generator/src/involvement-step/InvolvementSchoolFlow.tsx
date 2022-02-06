import React, { useContext } from 'react';

import FormStateContext from 'contexts/FormStateContext';

import Textarea from 'components/Textarea';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';
import Input from '../components/Input';

function InvolvementSchoolFlow() {
  const utilityClasses = useUtilityStyles();
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
      <div className={utilityClasses.flexColumn}>
        What is the name of the school you are attending?
        <Input
          id="schoolName"
          handleChange={onInputChange}
          placeholder="Name of School"
          defaultValue={schoolName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        What are you currently studying?
        <Input
          id="studyName"
          handleChange={onInputChange}
          placeholder="Name of Subject/Study Area"
          disabled={!schoolNameValid}
          defaultValue={studyName}
          type="text"
        />
      </div>

      <div className={utilityClasses.flexColumn}>
        Why are you passionate about studying this? (2-3 sentences suggested)
        <Textarea
          id="passionDescription"
          handleChange={onInputChange}
          placeholder="I am passionate about..."
          multi
          isValid={passionDescriptionValid}
          disabled={!studyNameValid}
          defaultValue={passionDescription}
        />
      </div>

      <FlowNavigation isNextDisabled={isNextDisabled} />
    </ContentContainer>
  );
}

export default InvolvementSchoolFlow;
