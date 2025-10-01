import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import useUtilityStyles from 'styles/utilityStyles';
import type { CSSVarsPartial, CSSVars } from './Input';
import { defaultStyles } from './Input';

const useStyles = makeStyles<Theme>(({ palette, spacing }) =>
  createStyles({
    labelWrapper: {
      '& .MuiFormLabel-root': {
        color: 'var(--label-color)',
      },
    },
    textfieldComponent: {
      // -- outline
      '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {
        borderRadius: '15px',
        borderColor: 'var(--outline-color)',
        borderWidth: '1px',
      },
      // Change outline color when the input root is hovered (target the root, not the fieldset)
      '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--hover-color)',
        borderWidth: '1px',
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--hover-color)',
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
      },
      '& .MuiOutlinedInput-input::placeholder': {
        opacity: 1,
        color: 'var(--placeholder-color)',
      },
      // fallback for input base placeholder class
      '& .MuiInputBase-input::placeholder': {
        opacity: 1,
        color: 'var(--placeholder-color)',
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
  labelRef?: React.Ref<HTMLLabelElement>;
  customStyles?: CSSVarsPartial;
}

const MultilineTextFields = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      handleChange,
      id,
      label,
      placeholder,
      defaultValue,
      disabled = false,
      value,
      rows,
      labelRef,
      customStyles = defaultStyles,
    },
    ref
  ) => {
    const utilityClasses = useUtilityStyles();
    const classes = useStyles();

    const mergedStyles: React.CSSProperties & CSSVars = {
      ...defaultStyles,
      ...customStyles,
    };

    return (
      <div
        className={`${utilityClasses.formInput} ${classes.labelWrapper}`}
        style={mergedStyles as React.CSSProperties}
      >
        {label && (
          <InputLabel
            ref={labelRef}
            aria-label={label}
            htmlFor={id}
            disabled={disabled}
            tabIndex={0}
          >
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
          inputRef={ref}
          autoComplete="off"
        />
      </div>
    );
  }
);

export default MultilineTextFields;
