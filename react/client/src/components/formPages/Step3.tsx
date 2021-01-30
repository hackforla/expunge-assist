import React from 'react';
import Textarea from 'components/Textarea';
import useUtilityStyles from 'styles/utilityStyles';

const Step3 = ({ inputs, setInputs, goToPage }: StepProps) => {
  const utilityClasses = useUtilityStyles({});

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
      />
      <p>What is the name of the company you work for?</p>
      <Textarea
        inputName="jobName"
        placeholder=""
        handleChange={handleChange}
        multi={false}
      />
      <p>What is your current job title?</p>
      <Textarea
        inputName="jobTitle"
        placeholder=""
        handleChange={handleChange}
        multi={false}
      />
      <p>
        Please describe what you do at your current job. (2 sentences maximum)
      </p>
      <Textarea
        inputName="jobDescription"
        handleChange={handleChange}
        placeholder="At my current job, I ..."
        multi
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
      />
      <p>
        Do you believe that having your record cleared would help you find a job
        and be more involved in your community?
      </p>
      <button
        type="button"
        onClick={() => goToPage(3)}
        className={utilityClasses.button}
      >
        BACK
      </button>
      <button
        type="button"
        onClick={() => goToPage(5)}
        className={utilityClasses.button}
      >
        LOOKS GOOD
      </button>
    </div>
  );
};

export default Step3;
