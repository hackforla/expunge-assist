import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        minWidth: '10rem',
        height: '2.5rem',
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
      '& .MuiOutlinedInput-root': {
        width: '70%',
        '& fieldset': {
          borderRadius: '15px',
        },
      },
      '& .MuiOutlinedInput-multiline': {
        width: '100%',
        height: '100%',
      },
      '& .MuiInputBase-root.Mui-disabled': {
        borderRadius: '15px',
        background: '#efefef',
        color: '#b5b5b5',
      },
    },
    input: {
      fontSize: '1rem',
    },
    icon: {
      color: teal.A400,
    },
  })
);

interface TextFieldProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  placeholder?: string;
  multi?: boolean;
  isValid?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
}

const MultilineTextFields: React.FC<TextFieldProps> = ({
  handleChange,
  id,
  placeholder,
  multi,
  isValid,
  defaultValue,
  disabled = false,
  value,
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      onChange={handleChange}
      id={id}
      placeholder={placeholder}
      multiline={multi}
      variant="outlined"
      defaultValue={defaultValue}
      disabled={disabled}
      value={value}
      InputProps={{
        classes: {
          input: classes.input,
        },
        endAdornment: isValid ? (
          <InputAdornment position="end">
            <CheckCircleIcon className={classes.icon} />
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default MultilineTextFields;
