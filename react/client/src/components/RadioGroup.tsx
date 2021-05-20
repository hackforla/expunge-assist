import React from 'react';
import { Radio } from '@material-ui/core';

interface RadioButtonProps {
  label: string;
  inputName: string;
  activeRadio: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioButton = ({
  label,
  activeRadio,
  handleChange,
  inputName,
  disabled = false,
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
        disabled={disabled}
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
  disabled?: boolean;
}

const RadioGroup = ({
  labels,
  inputName,
  handleChange,
  activeRadio,
  disabled,
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
            disabled={disabled}
            key={label}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
