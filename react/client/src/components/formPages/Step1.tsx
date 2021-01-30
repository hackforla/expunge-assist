import React from 'react';
import Textarea from 'components/Textarea';
import Input from 'components/Input';

import useUtilityStyles from 'styles/utilityStyles';

const Step1 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const utilityClasses = useUtilityStyles({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'name') {
      setInputs({ ...inputs, name: inputValue });
    } else if (inputName === 'age') {
      setInputs({ ...inputs, age: inputValue });
    } else if (inputName === 'introduction') {
      setInputs({ ...inputs, introduction: inputValue });
    }
  };

  return (
    <div className="Step1">
      <form>
        <p>What is your name?</p>
        <Textarea
          inputName="name"
          placeholder="FirstName LastName"
          handleChange={handleChange}
          multi={false}
        />
        <p>How old are you?</p>
        <Input
          type="number"
          inputName="age"
          placeholder="25"
          handleChange={handleChange}
        />
        <p>
          Please describe what has been going on in your life recently. (2
          sentences maximum)
        </p>
        <Textarea
          inputName="introduction"
          handleChange={handleChange}
          placeholder="I've been..."
          multi
        />
        <button
          type="button"
          onClick={() => goToPage(1)}
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
      </form>
    </div>
  );
};

export default Step1;
