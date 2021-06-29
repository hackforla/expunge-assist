import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '30%',
      minWidth: '10rem',
      height: '2.5rem',
      borderRadius: '15px',
      marginBottom: '1rem',

      '&.MuiInputBase-root.Mui-disabled': {
        borderRadius: '15px',
        background: '#efefef',
        color: '#b5b5b5',
      },
    },
    icon: {
      color: teal.A400,
    },
  })
);

interface InputFieldProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  placeholder: string;
  type: string;
  defaultValue?: string;
  disabled?: boolean;
  adornment: string;
}

const InputArea: React.FC<InputFieldProps> = ({
  handleChange,
  inputName,
  placeholder,
  type,
  defaultValue,
  disabled,
  adornment,
}) => {
  const checkValid = (e: string) => {
    isValid(e.length > 0);
  };
  const [valid, isValid] = useState(false);
  const classes = useStyles();
  return (
    <OutlinedInput
      type={type}
      className={classes.root}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        checkValid(e.currentTarget.value);
        handleChange(e);
      }}
      name={inputName}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      endAdornment={
        <InputAdornment position="end">
          {/* years old */}
          {adornment}
          {valid ? <CheckCircleIcon className={classes.icon} /> : null}
        </InputAdornment>
      }
    />
  );
};

export default InputArea;
