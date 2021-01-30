import React from 'react';
import Textarea from 'components/Textarea';
import useUtilityStyles from 'styles/utilityStyles';

const Step2 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const utilityClasses = useUtilityStyles({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'lifeChanges') {
      setInputs({ ...inputs, lifeChanges: inputValue });
    }
  };

  return (
    <div className="Step2">
      <p>
        Finish the sentence: Since my last conviction my life has changed for
        the...
      </p>
      <Textarea
        inputName="lifeChanges"
        placeholder="I have experienced..."
        handleChange={handleChange}
        multi={false}
      />
      <button
        type="button"
        onClick={() => goToPage(2)}
        className={utilityClasses.button}
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => goToPage(4)}
        className={utilityClasses.button}
      >
        LOOKS GOOD
      </button>
    </div>
  );
};

export default Step2;
