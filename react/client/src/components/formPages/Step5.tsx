import React from 'react';

import useUtilityStyles from 'styles/utilityStyles';

import Textarea from 'components/Textarea';

const Step5 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const utilityClasses = useUtilityStyles({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'clearRecordWhy') {
      setInputs({ ...inputs, clearRecordWhy: inputValue });
    } else if (inputName === 'clearRecordHow') {
      setInputs({ ...inputs, clearRecordHow: inputValue });
    }
  };
  return (
    <div className="Step5">
      <p>Please finish this sentence: I want to clear my record because...</p>
      <Textarea
        inputName="clearRecordWhy"
        placeholder="I am..."
        handleChange={handleChange}
        multi={false}
      />
      <p>
        How will clearing your record change your life or help you? (2 sentences
        maximum)
      </p>
      <Textarea
        inputName="clearRecordHow"
        handleChange={handleChange}
        placeholder="Clearing my record will..."
        multi
      />
      <button
        type="button"
        onClick={() => goToPage(9)}
        className={utilityClasses.button}
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => goToPage(12)}
        className={utilityClasses.button}
      >
        LOOKS GOOD
      </button>
    </div>
  );
};

export default Step5;
