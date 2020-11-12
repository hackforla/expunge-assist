import React from 'react';

interface Step1Props {
  setName: (value: string) => void ;
  setAge: (value: number) => void ;
  setIntroduction: (value: string) => void ;
}

const Step1: React.FC<Step1Props> = ({ setName, setAge, setIntroduction }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    if (inputName === 'name') { setName(inputValue) }
    else if (inputName === 'age') { setAge(Number(inputValue)) }
    else if (inputName === 'introduction') {setIntroduction(inputValue)}
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
        <button>BACK</button>
        <button>NEXT</button>
      </form>
    </div>
  )
}

export default Step1;