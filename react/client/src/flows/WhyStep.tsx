import React, { useState } from 'react';

import Textarea from 'components/Textarea';
import TextPreview from 'components/TextPreview';
import FormFooter from 'components/FormFooter';

const WhyStep = ({ inputs, setInputs, goBackPage, goNextPage }: StepProps) => {
  const [step5Inputs, setStep5Inputs] = useState({
    clearRecordWhy: '',
    clearRecordHow: '',
  });

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

  return (
    <div>
      {!showPreview ? (
        <div className="Step5">
          <p>
            Please finish this sentence: I want to clear my record because...
          </p>
          <Textarea
            inputName="clearRecordWhy"
            placeholder="I am..."
            handleChange={handleChange}
            multi={false}
            isValid={clearRecordWhyFilled}
            defaultValue={step5Inputs.clearRecordWhy}
          />
          <p className="greyedOut">
            How will clearing your record change your life or help you? (2
            sentences maximum)
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
        </div>
      ) : (
        <div className="Step5-Preview">
          <div>
            <TextPreview
              content={textPreviewContent}
              onAdjustClick={() => setShowPreview(false)}
              nameOfStep="Why"
            />
          </div>
        </div>
      )}

      <FormFooter
        isFormComplete={clearRecordWhyFilled && clearRecordHowFilled}
        isPreviewing={showPreview}
        goBackPage={goBackPage}
        goNextPage={goNextPage}
        togglePreview={() => setShowPreview(!showPreview)}
      />
    </div>
  );
};

export default WhyStep;
