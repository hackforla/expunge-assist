import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { teal } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
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
  inputName: string;
  placeholder: string;
  multi: boolean;
  isValid: boolean;
  defaultValue: string;
}

const MultilineTextFields: React.FC<TextFieldProps> = ({
  handleChange,
  inputName,
  placeholder,
  multi,
  isValid,
  defaultValue,
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      onChange={handleChange}
      name={inputName}
      placeholder={placeholder}
      id="outlined-textarea"
      multiline={multi}
      variant="outlined"
      defaultValue={defaultValue}
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
