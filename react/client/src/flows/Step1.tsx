import React from 'react';
import Textarea from 'components/Textarea';
import Input from 'components/Input';
import Button from 'components/Button';
<<<<<<< HEAD:react/client/src/flows/Step1.tsx
import TextPreview from 'components/TextPreview';
=======
>>>>>>> c64fe68... Future Goals Flow:react/client/src/components/formPages/Step1.tsx

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
          isValid
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
        />
<<<<<<< HEAD:react/client/src/flows/Step1.tsx
        <Button onClick={() => goToPage(1)} buttonText="BACK" />
        <Button onClick={() => goToPage(4)} buttonText="LOOKS GOOD" />
        <TextPreview
          content="Thank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old. I am also a proud veteran of the United States Armed Forces."
          onAdjustClick={() => console.log('adjust clicked')}
          nameOfStep="Introduction"
        />
=======
        <Button onClick={() => goToPage(2)} buttonText="BACK" />
        <Button onClick={() => goToPage(4)} buttonText="LOOKS GOOD" />
>>>>>>> c64fe68... Future Goals Flow:react/client/src/components/formPages/Step1.tsx
      </form>
    </div>
  );
};

export default Step1;
