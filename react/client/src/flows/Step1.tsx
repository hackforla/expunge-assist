import React from 'react';
import Textarea from 'components/Textarea';
import Input from 'components/Input';
import Button from 'components/Button';
import TextPreview from 'components/TextPreview';

const Step1 = ({ inputs, setInputs, goToPage }: StepProps) => {
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
    <div>
      <p>What is your name?</p>
      <Textarea
        inputName="name"
        placeholder="FirstName LastName"
        handleChange={handleChange}
        multi={false}
        isValid
        defaultValue={inputs.name}
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
        isValid
        defaultValue={inputs.introduction}
      />
      <Button onClick={() => goToPage(2)} buttonText="BACK" />
      <Button onClick={() => goToPage(3)} buttonText="LOOKS GOOD" />
    </div>
  );
};

export default Step1;
