import React from 'react';
import Textarea from 'components/Textarea';
import Button from 'components/Button';

const Step2 = ({ inputs, setInputs, goBackPage, goNextPage }: StepProps) => {
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
        isValid
        defaultValue={inputs.lifeChanges}
      />
      <Button onClick={() => goBackPage()} buttonText="BACK" />
      <Button onClick={() => goNextPage()} buttonText="LOOKS GOOD" />
    </div>
  );
};

export default Step2;
