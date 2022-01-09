import React, { useState } from 'react';

import { IWhyStepState } from 'contexts/FormStateProps';

import HelpPopUp from 'components/HelpPopUp';
import Paragraph from 'components/Paragraph';
import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';

import ContentContainer from 'page-layout/ContentContainer';
import FlowNavigation from 'page-layout/FlowNavigation';

import useUtilityStyles from 'styles/utilityStyles';

interface IWhyStepProps {
  stepState: IWhyStepState;
  setFormState: (value: any) => void;
}

const WhyStep = ({ stepState, setFormState }: IWhyStepProps) => {
  const utilityClasses = useUtilityStyles();

  const updateStepState = (changes: object) => {
    setFormState({
      ...stepState,
      ...changes,
    });
  };

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'clearRecordWhy') {
      updateStepState({ ...stepState, clearRecordWhy: inputValue });
    } else if (inputName === 'clearRecordHow') {
      updateStepState({ ...stepState, clearRecordHow: inputValue });
    }
  };

  const clearRecordWhyValid = stepState.clearRecordWhy !== '';
  const clearRecordHowValid = stepState.clearRecordHow !== '';
  const isNextDisabled = !clearRecordWhyValid || !clearRecordHowValid;

  const textPreviewContent = `${stepState.clearRecordWhy} ${stepState.clearRecordHow}`;
  if (showPreview) {
    return (
      <ContentContainer>
        <TextPreview
          content={textPreviewContent}
          onAdjustClick={() => setShowPreview(false)}
          nameOfStep="Why"
        />

        <FlowNavigation onBack={() => setShowPreview(false)} />
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <form className={utilityClasses.flexGrow}>
        <p>Please finish this sentence: I want to clear my record because...</p>
        <Textarea
          inputName="clearRecordWhy"
          placeholder="I am..."
          handleChange={handleChange}
          multi
          isValid={clearRecordWhyValid}
          defaultValue={stepState.clearRecordWhy}
        />

        <Paragraph disabled={clearRecordWhyValid}>
          How will clearing your record change your life or help you? (2
          sentences maximum)
        </Paragraph>
        <Textarea
          inputName="clearRecordHow"
          handleChange={handleChange}
          placeholder="Clearing my record will..."
          multi
          isValid={clearRecordHowValid}
          disabled={!clearRecordWhyValid}
          defaultValue={stepState.clearRecordHow}
        />
      </form>

      <HelpPopUp />

      <FlowNavigation
        // onNext={() => setShowPreview(true)}
        isNextDisabled={isNextDisabled}
      />
    </ContentContainer>
  );
};

export default WhyStep;
