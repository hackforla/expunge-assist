import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const TealCheckbox = withStyles({
  root: {
    color: teal.A400,
    '&$checked': {
      color: teal.A400,
    },
  },
  checked: {},
})((props: CheckboxProps) => (
  <Checkbox
    classes={props.classes}
    checked={props.checked}
    onChange={props.onChange}
    id={props.id}
  />
));

interface CheckProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

const CheckboxLabels: React.FC<CheckProps> = ({
  label,
  checked,
  onChange,
  id,
}) => {
  return (
    <FormControlLabel
      control={<TealCheckbox id={id} checked={checked} onChange={onChange} />}
      label={label}
    />
  );
};

export default CheckboxLabels;
