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
    name={props.name}
  />
));

interface CheckProps {
  label: string;
}

const CheckboxLabels: React.FC<CheckProps> = ({ label }) => {
  const [state, setState] = React.useState({
    checked: false,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <TealCheckbox
          checked={state.checked}
          onChange={handleChange}
          name="checked"
        />
      }
      label={label}
    />
  );
};

export default CheckboxLabels;
