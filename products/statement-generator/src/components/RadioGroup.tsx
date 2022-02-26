import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import useUtilityStyles from 'styles/utilityStyles';

interface RadioGroupProps {
  label: string;
  value?: string;
  choices: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioGroupComponent = ({
  label,
  choices,
  value,
  handleChange,
  disabled,
}: RadioGroupProps) => {
  const utilityClasses = useUtilityStyles();

  return (
    <FormControl className={utilityClasses.formInput}>
      <FormLabel disabled={disabled}>{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
        value={value}
        onChange={handleChange}
      >
        {choices.map((choice) => {
          return (
            <FormControlLabel
              disabled={disabled}
              value={choice}
              control={<Radio />}
              label={choice}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
