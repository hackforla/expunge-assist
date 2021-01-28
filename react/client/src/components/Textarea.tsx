import React, { useState } from 'react';
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
}

const MultilineTextFields: React.FC<TextFieldProps> = ({
  handleChange,
  inputName,
  placeholder,
  multi,
}) => {
  const checkValid = (e: string) => {
    isValid(e.length > 0);
  };
  const [valid, isValid] = useState(false);
  const classes = useStyles();
  return (
    <TextField
      className={classes.root}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        checkValid(e.currentTarget.value);
        handleChange(e);
      }}
      name={inputName}
      placeholder={placeholder}
      id="outlined-textarea"
      multiline={multi}
      variant="outlined"
      InputProps={{
        classes: {
          input: classes.input,
        },
        endAdornment: valid ? (
          <InputAdornment position="end">
            <CheckCircleIcon className={classes.icon} />
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default MultilineTextFields;
