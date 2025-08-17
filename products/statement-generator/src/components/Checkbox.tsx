import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles<Theme>(({ palette }) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,

      '& .MuiFormControlLabel-root': {
        marginLeft: 0, // Undo default -11px styling
        color: palette.primary.darker,

        '& .MuiCheckbox-root': {
          padding: '0px 8px 0px 0px', // 8px right padding on checkbox

          // MUI v4 checkboxes default to secondary
          '&.MuiCheckbox-colorSecondary': {
            color: palette.primary.darker,
            opacity: 0.3,
            '&.Mui-checked': {
              color: palette.success.main,
              opacity: 1,
            },
          },
        },
      },

      '& .MuiFormHelperText-root': {
        marginTop: 0,
        marginLeft: 32, // Padding to align with checkbox label
        fontSize: '0.875rem',
        lineHeight: '1rem',
        color: palette.primary.darker,
        opacity: 0.75,
      },
    },
  })
);

interface IWrapperCheckboxProps extends CheckboxProps {
  label: string;
  helperText?: string;
}

const CheckboxLabels = React.forwardRef<
  HTMLInputElement,
  IWrapperCheckboxProps
>(({ label, helperText = '', checked, onChange, id }, ref) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            checked={checked}
            onChange={onChange}
            inputRef={ref}
          />
        }
        label={label}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Box>
  );
});
export default CheckboxLabels;
