import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
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
  return inputName === 'age' ? (
    <TextField
      type="number"
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
        style: { textAlign: 'right', width: '10%' },
        classes: {
          input: classes.input,
        },
        endAdornment: (
          <InputAdornment position="end">
            years old
            {valid ? (
              <Icon style={{ color: teal.A400 }}>check_circle</Icon>
            ) : (
              <Icon />
            )}
          </InputAdornment>
        ),
      }}
    />
  ) : (
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
        endAdornment: (
          <InputAdornment position="end">
            {valid ? (
              <Icon style={{ color: teal.A400 }}>check_circle</Icon>
            ) : (
              <Icon />
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default MultilineTextFields;
