import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

interface ICheckboxStyle {
  theme?: string;
}

const useStyles = makeStyles<Theme, ICheckboxStyle>(({ palette }) =>
  createStyles({
    root: {
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
  })
);

interface IInnerCheckboxProps extends CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  useTeal?: boolean;
}

const InnerCheckbox = React.forwardRef<HTMLInputElement, IInnerCheckboxProps>(
  ({ checked, onChange, id, useTeal }, ref) => {
    const classes = useStyles({ theme: useTeal ? 'teal' : 'black' });
    return (
      <Checkbox
        classes={classes}
        checked={checked}
        onChange={onChange}
        id={id}
        inputRef={ref}
      />
    );
  }
);

interface IWrapperCheckboxProps extends IInnerCheckboxProps {
  label: string;
}

const CheckboxLabels = React.forwardRef<
  HTMLInputElement,
  IWrapperCheckboxProps
>(({ label, checked, onChange, id, useTeal = false }, ref) => (
  <FormControlLabel
    control={
      <InnerCheckbox
        useTeal={useTeal}
        id={id}
        checked={checked}
        onChange={onChange}
        ref={ref}
      />
    }
    label={label}
  />
));

export default CheckboxLabels;
