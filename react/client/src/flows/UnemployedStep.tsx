import React from 'react';

import { IStepProps } from 'contexts/FormStateProps';

import Textarea from 'components/Textarea';
import Button from 'components/Button';

const UnemployedStep = ({
  formState,
  setFormState,
  goBackPage,
  goNextPage,
}: IStepProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (inputName === 'communityServiceOrgName') {
      setFormState({ ...formState, communityServiceOrgName: inputValue });
    } else if (inputName === 'communityServiceDescription') {
      setFormState({ ...formState, communityServiceDescription: inputValue });
    } else if (inputName === 'jobName') {
      setFormState({ ...formState, jobName: inputValue });
    } else if (inputName === 'jobTitle') {
      setFormState({ ...formState, jobTitle: inputValue });
    } else if (inputName === 'jobDescription') {
      setFormState({ ...formState, jobDescription: inputValue });
    } else if (inputName === 'difficultyFindingWorkDescription') {
      setFormState({ ...formState, difficultyFindingWorkDescription: inputValue });
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
        placeholder="Hack For LA"
        handleChange={handleChange}
        multi={false}
        isValid
        defaultValue={formState.communityServiceOrgName}
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
        defaultValue={formState.communityServiceDescription}
      />
      <p>What is the name of the company you work for?</p>
      <Textarea
        inputName="jobName"
        placeholder="X Company"
        handleChange={handleChange}
        multi={false}
        isValid
        defaultValue={formState.jobName}
      />
      <p>What is your current job title?</p>
      <Textarea
        inputName="jobTitle"
        placeholder="Barista"
        handleChange={handleChange}
        multi={false}
        isValid
        defaultValue={formState.jobTitle}
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
        defaultValue={formState.jobDescription}
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
        defaultValue={formState.difficultyFindingWorkDescription}
      />
      <p>
        Do you believe that having your record cleared would help you find a job
        and be more involved in your community?
      </p>
      <Button onClick={() => goBackPage()} buttonText="BACK" />
      <Button onClick={() => goNextPage()} buttonText="NEXT" />
    </div>
  );
};

export default UnemployedStep;
