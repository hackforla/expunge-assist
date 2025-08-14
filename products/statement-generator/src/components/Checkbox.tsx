import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

interface ICheckboxStyle {
  theme?: string;
}

const useStyles = makeStyles<Theme, ICheckboxStyle>(({ palette }) =>
  createStyles({
    root: {
      display: 'grid',
      gridGap: 4,

      '& .MuiFormControlLabel-root': {
        marginLeft: 0, // Undo default -11px styling
      },

      '& .MuiCheckbox-root': {
        padding: '0px 8px 0px 0px', // 8px right padding on checkbox
        color: ({ theme }) => {
          switch (theme) {
            case 'teal':
              return teal.A400;
            case 'black':
            default:
              return palette.common.black;
          }
        },

        // hacky because the component is adding the colorSecondary for some reason
        '&.MuiCheckbox-colorSecondary.Mui-checked': {
          color: ({ theme }) => {
            switch (theme) {
              case 'teal':
                return teal.A400;
              case 'black':
              default:
                return palette.common.black;
            }
          },
        },
      },

      '& .MuiFormHelperText-root': {
        marginTop: 0,
        marginLeft: 32, // Padding to align with checkbox label
        fontSize: '0.875rem',
      },
    },
  })
);

interface IInnerCheckboxProps extends CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

const InnerCheckbox = React.forwardRef<HTMLInputElement, IInnerCheckboxProps>(
  ({ checked, onChange, id }, ref) => (
    <Checkbox checked={checked} onChange={onChange} id={id} inputRef={ref} />
  )
);

interface IWrapperCheckboxProps extends IInnerCheckboxProps {
  label: string;
  useTeal?: boolean;
  helperText?: string;
}

const CheckboxLabels = React.forwardRef<
  HTMLInputElement,
  IWrapperCheckboxProps
>(({ label, helperText = '', checked, onChange, id, useTeal = false }, ref) => {
  const classes = useStyles({ theme: useTeal ? 'teal' : 'black' });
  return (
    <Box className={classes.root}>
      <FormControlLabel
        control={
          <InnerCheckbox
            id={id}
            checked={checked}
            onChange={onChange}
            ref={ref}
          />
        }
        label={label}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </Box>
  );
});
export default CheckboxLabels;
