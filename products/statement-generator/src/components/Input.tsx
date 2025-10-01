import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import useUtilityStyles from 'styles/utilityStyles';
import customMuiTheme from 'styles/customMuiTheme';

interface StyleProps {
  disabled?: boolean;
  useShort?: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(
  ({ breakpoints, palette, spacing }) =>
    createStyles({
      labelWrapper: {
        '& .MuiFormLabel-root': {
          color: 'var(--label-color)',
        },
      },
      inputComponent: {
        borderRadius: '16px',

        [breakpoints.up(breakpoints.values.md)]: {
          width: ({ useShort }) => (useShort ? 320 : undefined),
        },

        '&.Mui-focused': {
          boxShadow: '0 0 10px 2px #F7EBFF',
        },

        // -- disabled
        '&.Mui-disabled': {
          background: '#f1f1f1',
          color: palette.common.grey,
          opacity: 0.7,
        },

        // -- outline
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--outline-color)',
          borderWidth: '1px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--hover-color)',
          borderWidth: '1px',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#8b30c9', // primary.main/#9903FF is too harsh
          borderWidth: '1px',
        },
        '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
          borderColor: '#a1a1a1',
          borderWidth: '1px',
        },

        // -- input field
        '& .MuiOutlinedInput-input': {
          padding: spacing(1, 2),

          '&::placeholder': {
            opacity: 1,
            color: 'var(--placeholder-color)',
          },
        },

        '& .MuiInputAdornment-root': {
          pointerEvents: 'none',
          color: palette.common.black,
        },
        '&.Mui-disabled .MuiInputAdornment-root': {
          opacity: 0.3,
        },
      },

      icon: {
        color: palette.success.main,
        marginLeft: spacing(1),
      },
    })
);

export type CSSVars = {
  ['--outline-color']: string;
  ['--placeholder-color']: string;
  ['--label-color']: string;
  ['--hover-color']: string;
};

export type CSSVarsPartial = Partial<CSSVars>;

export const defaultStyles: CSSVars = {
  '--outline-color': '#adadad',
  '--placeholder-color': customMuiTheme.palette.common.grey,
  '--label-color': customMuiTheme.palette.common.black,
  '--hover-color': '#8f8f8f',
};

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
  shortWidth?: boolean; // if true, element will have a set width
  labelRef?: React.Ref<HTMLLabelElement>;
  customStyles?: CSSVarsPartial;
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
  shortWidth = false,
  labelRef,
  customStyles = defaultStyles,
}) => {
  const utilityClasses = useUtilityStyles();
  const classes = useStyles({
    disabled,
    useShort: shortWidth || type === 'number',
  });

  const mergedStyles: React.CSSProperties & CSSVars = {
    ...defaultStyles,
    ...customStyles,
  };

  const [valid, isValid] = useState(false);
  const checkValid = (e: string) => {
    isValid(e.length > 0);
  };

  return (
    <div
      className={`${utilityClasses.formInput} ${classes.labelWrapper} ${className}`}
      style={mergedStyles as React.CSSProperties}
    >
      <InputLabel
        tabIndex={0}
        disabled={disabled}
        ref={labelRef}
        aria-label={label}
        htmlFor={id}
      >
        {label}
      </InputLabel>

      <OutlinedInput
        label={label}
        id={id}
        className={classes.inputComponent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          checkValid(e.currentTarget.value);
          handleChange(e);
        }}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        inputProps={{ min: 0 }}
        notched={false}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {adornment !== undefined && <span>{adornment}</span>}

            {valid ? (
              <CheckCircleRoundedIcon
                className={classes.icon}
                data-testid="valid-icon"
              />
            ) : null}
          </InputAdornment>
        }
        autoComplete="off"
      />
    </div>
  );
};

export default InputArea;
