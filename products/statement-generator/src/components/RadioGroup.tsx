import React from 'react';
import { Radio, makeStyles, createStyles } from '@material-ui/core';

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

      <span className={disabled ? 'greyedOut' : ''}>{label}</span>
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
