import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormLabel from '@material-ui/core/FormLabel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import useUtilityStyles from 'styles/utilityStyles';

interface StyleProps {
  disabled?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(({ palette, spacing }) =>
  createStyles({
    icon: {
      color: palette.success.main,
      marginLeft: spacing(1),
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
  const classes = useStyles({ disabled });

  const checkValid = (e: string) => {
    isValid(e.length > 0);
  };
  const [valid, isValid] = useState(false);

  return (
    <div className={`${utilityClasses.formInput} ${className}`}>
      <FormLabel disabled={disabled}>{label}</FormLabel>

      <OutlinedInput
        type={type}
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
            {adornment !== undefined && <span>{adornment}</span>}
            {valid ? <CheckCircleIcon className={classes.icon} /> : null}
          </InputAdornment>
        }
      />
    </div>
  );
};

export default InputArea;
