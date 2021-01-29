import React from 'react';
import Textarea from 'components/Textarea';
import Button from 'components/Button';

const Step2 = ({ inputs, setInputs, goToPage }: StepProps) => {
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
      <Button onClick={() => goToPage(2)}>BACK</Button>
      <Button onClick={() => goToPage(4)}>LOOKS GOOD</Button>
    </div>
  );
};

export default Step2;
