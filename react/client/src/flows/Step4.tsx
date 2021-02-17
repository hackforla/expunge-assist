import React, { useState } from 'react';
import Textarea from 'components/Textarea';
import Button from 'components/Button';

const Step4 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const [goalsFilled, setGoals] = useState(false);
  const [goalsHowFilled, setGoalsHow] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    const sentences = inputValue.split('.');
    if (inputName === 'goals') {
      setInputs({ ...inputs, goals: inputValue });
      if (sentences.length >= 3) setGoals(true);
      else setGoals(false);
    } else if (inputName === 'goalsHow') {
      setInputs({ ...inputs, goalsHow: inputValue });
      if (sentences.length >= 3) setGoalsHow(true);
      else setGoalsHow(false);
    }
  };

  return (
    <div className="Step4">
      <p>
        Please describe what goals you have to improve your life even further,
        like attending school, getting specialized training, etc. (2-3 sentences
        suggested)
      </p>
      <Textarea
        inputName="goals"
        handleChange={handleChange}
        placeholder="I have plans of..."
        multi
        isValid={goalsFilled}
      />
      <p>
        How are you working towards acheiving these goals? What are the concrete
        steps you are taking? (2-3 sentences suggested)
      </p>
      {goalsFilled ? (
        <Textarea
          inputName="goalsHow"
          handleChange={handleChange}
          placeholder="I have been..."
          multi
          isValid={goalsHowFilled}
        />
      ) : null}
      <Button onClick={() => goToPage(7)} buttonText="BACK" />
      {goalsHowFilled ? (
        <Button onClick={() => goToPage(11)} buttonText="NEXT" />
      ) : null}
    </div>
  );
};

export default Step4;
