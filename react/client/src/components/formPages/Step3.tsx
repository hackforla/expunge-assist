import React from 'react';
import Textarea from 'components/Textarea';
import Button from 'components/Button';

const Step3 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (inputName === 'communityServiceOrgName') {
      setInputs({ ...inputs, communityServiceOrgName: inputValue });
    } else if (inputName === 'communityServiceDescription') {
      setInputs({ ...inputs, communityServiceDescription: inputValue });
    } else if (inputName === 'jobName') {
      setInputs({ ...inputs, jobName: inputValue });
    } else if (inputName === 'jobTitle') {
      setInputs({ ...inputs, jobTitle: inputValue });
    } else if (inputName === 'jobDescription') {
      setInputs({ ...inputs, jobDescription: inputValue });
    } else if (inputName === 'difficultyFindingWorkDescription') {
      setInputs({ ...inputs, difficultyFindingWorkDescription: inputValue });
    }
  };

  return (
    <div className="Step3">
      <p>Please check all that apply: I am involved with...</p>

      <p>
        What is the name of the community service organization that you are
        involved with?
      </p>
      <Textarea
        inputName="communityServiceOrgName"
        placeholder=""
        handleChange={handleChange}
        multi={false}
        isValid
      />
      <p>
        Please describe what you do at this community service organization (2
        sentences maximum)
      </p>
      <Textarea
        inputName="communityServiceDescription"
        handleChange={handleChange}
        placeholder="Currently, I..."
        multi
        isValid
      />
      <p>What is the name of the company you work for?</p>
      <Textarea
        inputName="jobName"
        placeholder=""
        handleChange={handleChange}
        multi={false}
        isValid
      />
      <p>What is your current job title?</p>
      <Textarea
        inputName="jobTitle"
        placeholder=""
        handleChange={handleChange}
        multi={false}
        isValid
      />
      <p>
        Please describe what you do at your current job. (2 sentences maximum)
      </p>
      <Textarea
        inputName="jobDescription"
        handleChange={handleChange}
        placeholder="At my current job, I ..."
        multi
        isValid
      />
      <p>
        Please describe why you are having trouble finding work. (2 sentences
        maximum)
      </p>
      <Textarea
        inputName="difficultyFindingWorkDescription"
        handleChange={handleChange}
        placeholder="I'm having difficulty finding work because..."
        multi
        isValid
      />
      <p>
        Do you believe that having your record cleared would help you find a job
        and be more involved in your community?
      </p>
      <Button onClick={() => goToPage(3)} buttonText="BACK" />
      <Button onClick={() => goToPage(5)} buttonText="LOOKS GOOD" />
    </div>
  );
};

export default Step3;
