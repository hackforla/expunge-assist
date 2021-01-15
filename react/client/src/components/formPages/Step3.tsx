import React from 'react';

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
      <input
        type="text"
        name="communityServiceOrgName"
        onChange={handleChange}
      />
      <p>
        Please describe what you do at this community service organization (2
        sentences maximum)
      </p>
      <input
        type="text"
        name="communityServiceDescription"
        onChange={handleChange}
      />

      <p>What is the name of the company you work for?</p>
      <input type="text" name="jobName" onChange={handleChange} />
      <p>What is your current job title?</p>
      <input type="text" name="jobTitle" onChange={handleChange} />
      <p>
        Please describe what you do at your current job. (2 sentences maximum)
      </p>
      <input type="text" name="jobDescription" onChange={handleChange} />

      <p>
        Please describe why you are having trouble finding work. (2 sentences
        maximum)
      </p>
      <input
        type="text"
        name="difficultyFindingWorkDescription"
        onChange={handleChange}
      />
      <p>
        Do you believe that having your record cleared would help you find a job
        and be more involved in your community?
      </p>
      <Button onClick={() => goToPage(3)}>BACK</Button>
      <Button onClick={() => goToPage(5)}>LOOKS GOOD</Button>
    </div>
  );
};

export default Step3;
