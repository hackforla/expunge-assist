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
        <Button onClick={() => goToPage(1)} buttonText="BACK" theme="white" />
        <Button onClick={() => goToPage(4)} buttonText="NEXT" hasArrow />
        <TextPreview
          content="Thank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old. I am also a proud veteran of the United States Armed Forces."
          onAdjustClick={() => console.log('adjust clicked')}
          nameOfStep="Introduction"
        />
      </form>
    </div>
  );
};

export default Step1;
