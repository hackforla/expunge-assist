import React from 'react';
import { Radio, makeStyles, createStyles } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';

import useUtilityStyles from 'styles/utilityStyles';

interface RadioButtonProps {
  label: string;
  inputName: string;
  activeRadio: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const useStyles = makeStyles(({ palette }) =>
  createStyles({
    radioStyles: {
      '&.MuiIconButton-root.Mui-checked': {
        color: palette.success.main,
      },
    },
  })
);

const RadioButton = ({
  label,
  activeRadio,
  handleChange,
  inputName,
  disabled = false,
}: RadioButtonProps) => {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles();
  return (
    <div>
      <Radio
        classes={{
          colorSecondary: classes.radioStyles,
        }}
        value={label}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(e);
        }}
        checked={activeRadio === label}
        name={inputName}
        disabled={disabled}
      />

      <span className={disabled ? utilityClasses.disabledColor : ''}>
        {label}
      </span>
    </div>
  );
};

interface RadioGroupProps {
  label?: string;
  labels: string[];
  inputName: string;
  activeRadio: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioGroup = ({
  label,
  labels,
  inputName,
  handleChange,
  activeRadio,
  disabled,
}: RadioGroupProps) => {
  const utilityClasses = useUtilityStyles();
  return (
    <div className={utilityClasses.adjacentInput}>
      <FormLabel className={utilityClasses.formLabel} disabled={disabled}>
        {label}
      </FormLabel>

      {labels.map((radioLabel) => {
        return (
          <RadioButton
            label={radioLabel}
            activeRadio={activeRadio}
            handleChange={handleChange}
            inputName={inputName}
            disabled={disabled}
            key={radioLabel}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
