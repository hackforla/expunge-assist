import React, { useState } from 'react';

import { IStepProps } from 'contexts/FormStateProps';

import FlowNavigation from 'components/FlowNavigation';
import FormFooter from 'components/FormFooter';
import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';

import useUtilityStyles from 'styles/utilityStyles';

const WhyStep = ({ goBackPage, goNextPage }: IStepProps) => {
  const [step5Inputs, setStep5Inputs] = useState({
    clearRecordWhy: '',
    clearRecordHow: '',
  });
  const utilityClasses = useUtilityStyles({});

  const [clearRecordWhyFilled, setClearRecordWhyFilled] = useState(
    step5Inputs.clearRecordWhy.split('.').length > 1
  );
  const [clearRecordHowFilled, setClearRecordHowFilled] = useState(
    step5Inputs.clearRecordHow.split('.').length === 2
  );

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'clearRecordWhy') {
      setStep5Inputs({ ...step5Inputs, clearRecordWhy: inputValue });
      inputValue === ''
        ? setClearRecordWhyFilled(false)
        : setClearRecordWhyFilled(true);
    } else if (inputName === 'clearRecordHow') {
      setStep5Inputs({ ...step5Inputs, clearRecordHow: inputValue });
      inputValue === ''
        ? setClearRecordHowFilled(false)
        : setClearRecordHowFilled(true);
    }
  };

  const textPreviewContent = `${step5Inputs.clearRecordWhy} ${step5Inputs.clearRecordHow}`;

  if (showPreview) {
    return (
      <div className={utilityClasses.contentContainer}>
        <TextPreview
          content={textPreviewContent}
          onAdjustClick={() => setShowPreview(false)}
          nameOfStep="Why"
        />

        <FlowNavigation
          goBackPage={() => setShowPreview(false)}
          goNextPage={goNextPage}
        />
      </div>
    );
  }

  return (
    <div className={utilityClasses.contentContainer}>
      <p>Please finish this sentence: I want to clear my record because...</p>

      <Textarea
        inputName="clearRecordWhy"
        placeholder="I am..."
        handleChange={handleChange}
        multi={false}
        isValid={clearRecordWhyFilled}
        defaultValue={step5Inputs.clearRecordWhy}
      />

      <p className="greyedOut">
        How will clearing your record change your life or help you? (2 sentences
        maximum)
      </p>

      {clearRecordWhyFilled && (
        <Textarea
          inputName="clearRecordHow"
          handleChange={handleChange}
          placeholder="Clearing my record will..."
          multi
          isValid={clearRecordHowFilled}
          defaultValue={step5Inputs.clearRecordHow}
        />
      )}

      <FormFooter
        isFormComplete={clearRecordWhyFilled && clearRecordHowFilled}
        isPreviewing={showPreview}
        goBackPage={goBackPage}
        goNextPage={goNextPage}
        togglePreview={() => setShowPreview(!showPreview)}
      />

      <FlowNavigation
        goBackPage={goBackPage}
        goNextPage={() => setShowPreview(true)}
      />
    </div>
  );
};

export default WhyStep;
