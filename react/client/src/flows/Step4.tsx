import React, { useState } from 'react';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import TextPreview from 'components/TextPreview';

const Step4 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const [goalsFilled, setGoalsFilled] = useState(
    inputs.goals.split('.').length >= 3
  );
  const [goalsHowFilled, setGoalsHowFilled] = useState(
    inputs.goalsHow.split('.').length >= 3
  );
  const [previewPage, setPreview] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    const sentences = inputValue.split('.');
    if (inputName === 'goals') {
      setInputs({ ...inputs, goals: inputValue });
      if (sentences.length >= 3) setGoalsFilled(true);
      else setGoalsFilled(false);
    } else if (inputName === 'goalsHow') {
      setInputs({ ...inputs, goalsHow: inputValue });
      if (sentences.length >= 3) setGoalsHowFilled(true);
      else setGoalsHowFilled(false);
    }
  };
  return previewPage ? (
    <div>
      <TextPreview
        content={`${inputs.goals}. To work towards my goals; ${inputs.goalsHow}. Having my record cleared would help me achieve these goals for my future.`}
        onAdjustClick={() => console.log('adjust clicked')}
        nameOfStep="Future Goals"
      />
      <Button onClick={() => setPreview(false)} buttonText="BACK" />
      <Button onClick={() => goToPage(6)} buttonText="LOOKS GOOD" />
    </div>
  ) : (
    <div>
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
        defaultValue={inputs.goals}
      />
      {goalsFilled ? (
        <>
          <p>
            How are you working towards acheiving these goals? What are the
            concrete steps you are taking? (2-3 sentences suggested)
          </p>
          <Textarea
            inputName="goalsHow"
            handleChange={handleChange}
            placeholder="I have been..."
            multi
            isValid={goalsHowFilled}
            defaultValue={inputs.goalsHow}
          />
        </>
      ) : (
        <p className="greyedOut">
          How are you working towards acheiving these goals? What are the
          concrete steps you are taking? (2-3 sentences suggested)
        </p>
      )}
      <Button onClick={() => goToPage(4)} buttonText="BACK" />
      {goalsHowFilled ? (
        <Button onClick={() => setPreview(true)} buttonText="NEXT" />
      ) : null}
    </div>
  );
};

export default Step4;
