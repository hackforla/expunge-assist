import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles<Theme>(({ palette, spacing }) =>
  createStyles({
    textfieldComponent: {
      // -- outline
      '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {
        borderRadius: '15px',
        borderColor: '#adadad',
        borderWidth: '1px',
      },
      '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline:hover': {
        borderColor: '#8f8f8f',
        borderWidth: '1px',
      },
      '& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#8b30c9', // primary.main/#9903FF is too harsh
        borderWidth: '1px',
        boxShadow: '0 0 10px 2px #F7EBFF',
      },
      '& .MuiInputBase-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: '#a1a1a1',
        borderWidth: '1px',
      },

      // -- text field
      '& .MuiOutlinedInput-multiline': {
        padding: spacing(2),

        '&::placeholder': {
          opacity: 1,
          color: palette.common.grey,
        },
      },
      '& .MuiInputAdornment-root': {
        pointerEvents: 'none',
        color: palette.common.black,
      },

      // -- disabled
      '& .Mui-disabled': {
        background: '#f1f1f1',
        color: palette.common.grey,
        opacity: 0.7,
      },
      '& .MuiInputBase-root.Mui-disabled': {
        borderRadius: '15px',
        background: '#efefef',
        color: '#b5b5b5',
      },
      '& .Mui-disabled .MuiInputAdornment-root': {
        opacity: 0.3,
      },
    },
    adornment: {
      alignSelf: 'flex-start',
    },
    icon: {
      color: palette.success.main,
      marginLeft: spacing(1),
    },
  })
);

interface TextFieldProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
  rows?: number;
}

const MultilineTextFields: React.FC<TextFieldProps> = ({
  handleChange,
  id,
  label,
  placeholder,
  defaultValue,
  disabled = false,
  value,
  rows,
}) => {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles();

  return (
    <div className={utilityClasses.formInput}>
      {label && (
        <InputLabel htmlFor={id} disabled={disabled}>
          {label}
        </InputLabel>
      )}

      <TextField
        id={id}
        className={classes.textfieldComponent}
        onChange={handleChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        value={value}
        rows={rows}
        multiline
        fullWidth
        variant="outlined"
        InputProps={{
          notched: false,
        }}
      />
    </div>
  );
};

export default MultilineTextFields;
