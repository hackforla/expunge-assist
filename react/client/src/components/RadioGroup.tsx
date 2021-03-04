import React from 'react';
import { Radio } from '@material-ui/core';

interface RadioButtonProps {
  label: string;
  inputName: string;
  activeRadio: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({
  label,
  activeRadio,
  handleChange,
  inputName,
}: RadioButtonProps) => {
  return (
    <div>
      <Radio
        value={label}
        color="secondary"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e);
        }}
        checked={activeRadio === label}
        name={inputName}
      />
      <span>{label}</span>
    </div>
  );
};

interface RadioGroupProps {
  labels: string[];
  inputName: string;
  activeRadio: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
  labels,
  inputName,
  handleChange,
  activeRadio,
}: RadioGroupProps) => {
  return (
    <div className="radio">
      {labels.map((label) => {
        return (
          <RadioButton
            label={label}
            activeRadio={activeRadio}
            handleChange={handleChange}
            inputName={inputName}
            key={label}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
