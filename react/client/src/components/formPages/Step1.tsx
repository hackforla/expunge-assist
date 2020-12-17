import React from 'react';

import Button from 'components/Button'

const Step1: React.FC<StepProps> = ({ inputs, setInputs, goToPage }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'name') {
       setInputs({ ...inputs, name: inputValue })
     }
    else if (inputName === 'age') {
      setInputs({ ...inputs, age: inputValue })
     }
    else if (inputName === 'introduction') {
      setInputs({ ...inputs, introduction: inputValue})
    }
  }

  return (
    <div className="Step1">
      <form>
        <p>What is your name?</p>
        <input type="text" placeholder="Firstname Lastname" name="name" onChange={handleChange} />
        <p>How old are you?</p>
        <input type="number" name="age" onChange={handleChange}/><span>years old</span>
        <p>Please describe what has been going on in your life recently. (2 sentences maximum)</p>
        <input type="textarea" name="introduction" onChange={handleChange}/>
        <Button onClick={() => goToPage(1)}>BACK</Button>
        <Button onClick={() => goToPage(4)}>LOOKS GOOD</Button>
      </form>
    </div>
  )
}

export default Step1;
