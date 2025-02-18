import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    radioStyles: {
      '&.MuiIconButton-root.Mui-checked': {
        color: palette.success.main,
      },
    },
  })
);

interface RadioGroupProps {
  id: string;
  label: string;
  value?: string;
  choices: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioGroupComponent = ({
  id,
  label,
  value,
  choices,
  handleChange,
  disabled,
}: RadioGroupProps) => {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles();

  return (
    <FormControl className={utilityClasses.formInput}>
      <FormLabel disabled={disabled}>{label}</FormLabel>
      <RadioGroup
        id={id}
        aria-label={label}
        name={label}
        value={value}
        onChange={handleChange}
      >
        {choices.map((choice) => (
          <FormControlLabel
            disabled={disabled}
            value={choice}
            label={choice}
            control={<Radio className={classes.radioStyles} />}
            key={`radio-group-control-${choice}-key`}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
