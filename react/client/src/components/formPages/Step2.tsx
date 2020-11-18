import React from 'react';

const Step2: React.FC<StepProps> = ({ inputs, setInputs}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'lifeChanges') {
      setInputs({ ...inputs, lifeChanges: inputValue })
    }
  }

  return (
    <div className="Step2">
      <p>Finish the sentence: Since my last conviction my life has changed for the...</p>
      <input type="text" placeholder="I have experienced..." name="lifeChanges" onChange={handleChange} />
    </div>
  )
}

export default Step2;