import React from 'react';
import { Radio, makeStyles, createStyles } from '@material-ui/core';

import useUtilityStyles from 'styles/utilityStyles';

interface RadioButtonProps {
  label: string;
  inputName: string;
  activeRadio: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id: string;
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
  id,
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
        id={id}
      />

      <span className={disabled ? utilityClasses.disabledColor : ''}>
        {label}
      </span>
    </div>
  );
};

interface RadioGroupProps {
  labels: string[];
  inputName: string;
  activeRadio: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id: string;
}

const RadioGroup = ({
  labels,
  inputName,
  handleChange,
  activeRadio,
  disabled,
  id,
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
            id={id}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
