import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { teal } from '@material-ui/core/colors';

import useUtilityStyles from 'styles/utilityStyles';

interface StyleProps {
  disabled?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette, spacing }) =>
  createStyles({
    inputContainer: {
      width: '100%',
      borderRadius: '16px',
      '& input': {
        padding: spacing(1, 2),
      },

      '&.MuiInputBase-root.Mui-disabled': {
        borderRadius: '16px',
        background: '#efefef',
        color: '#b5b5b5',
      },
    },
    labelContainer: {
      color: ({ disabled }) => {
        return disabled ? palette.common.grey : palette.common.black;
      },
      marginBottom: spacing(1),
    },
    icon: {
      color: teal.A400,
    },
  })
);

interface InputFieldProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string; // todo: make required
  placeholder: string;
  type: string;
  defaultValue?: string;
  disabled?: boolean;
  adornment?: string;
  className?: string;
}

const InputArea: React.FC<InputFieldProps> = ({
  handleChange,
  label,
  id,
  placeholder,
  type,
  defaultValue,
  disabled,
  adornment,
  className = '',
}) => {
  const utilityClasses = useUtilityStyles();

  const checkValid = (e: string) => {
    isValid(e.length > 0);
  };
  const [valid, isValid] = useState(false);
  const classes = useStyles({ disabled });

  return (
    <div className={`${utilityClasses.adjacentInput} ${className}`}>
      <InputLabel className={utilityClasses.labelContainer} disabled={disabled} >{label}</InputLabel>
      <OutlinedInput
        type={type}
        className={classes.inputContainer}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          checkValid(e.currentTarget.value);
          handleChange(e);
        }}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        endAdornment={
          <InputAdornment position="end">
            {adornment}
            {valid ? <CheckCircleIcon className={classes.icon} /> : null}
          </InputAdornment>
        }
      />
    </div>
  );
};

export default InputArea;
