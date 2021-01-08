/* eslint-disable react/prop-types */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: '15px',
          width: '20rem',
        },
      },
      '& .MuiOutlinedInput-multiline': {
        padding: '10px',
      },
    },
    input: {
      fontSize: '1rem',
      width: '18rem',
    },
  })
);

interface TextFieldProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  placeholder: string;
}

const MultilineTextFields: React.FC<TextFieldProps> = ({
  handleChange,
  inputName,
  placeholder,
}) => {
  const classes = useStyles();
  return (
    <div>
      <TextField
        className={classes.root}
        onChange={handleChange}
        name={inputName}
        placeholder={placeholder}
        id="outlined-textarea"
        multiline
        variant="outlined"
        InputProps={{
          classes: {
            input: classes.input,
          },
        }}
      />
    </div>
  );
};

export default MultilineTextFields;
