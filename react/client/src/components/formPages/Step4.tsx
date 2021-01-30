import React from 'react';
import Textarea from 'components/Textarea';
import useUtilityStyles from 'styles/utilityStyles';

const Step4 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const utilityClasses = useUtilityStyles({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'goals') {
      setInputs({ ...inputs, goals: inputValue });
    } else if (inputName === 'goalsHow') {
      setInputs({ ...inputs, goalsHow: inputValue });
    }
  };

  return (
    <div className="Step4">
      <p>
        Please describe what goals you are working towards acheiving right now.
        (2 sentences maximum)
      </p>
      <Textarea
        inputName="goals"
        handleChange={handleChange}
        placeholder="I am working towards..."
        multi
      />
      <p>
        How are you working towards acheiving these goals? (2 sentences maximum)
      </p>
      <Textarea
        inputName="goalsHow"
        handleChange={handleChange}
        placeholder="I have been..."
        multi
      />
      <button
        type="button"
        onClick={() => goToPage(7)}
        className={utilityClasses.button}
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => goToPage(10)}
        className={utilityClasses.button}
      >
        LOOKS GOOD
      </button>
    </div>
  );
};

export default Step4;
