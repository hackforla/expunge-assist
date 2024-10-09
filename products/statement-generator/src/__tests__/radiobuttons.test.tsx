import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@material-ui/core/styles';
import customMuiTheme from 'styles/customMuiTheme';

import RadioGroup from '../components/RadioGroup';

// create TestRadioGroup component in order to test state changes
type Choice = 'Yes' | 'No';

export interface TestRadioGroupProps {
  id: string;
  label: string;
}

const radioButtonMock = jest.fn();

const TestRadioGroup: React.FC<TestRadioGroupProps> = ({ id, label }) => {
  const [selected, setSelected] = React.useState<Choice | null>(null);
  const radioGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value as Choice;
    setSelected(newValue);
    radioButtonMock();
  };
  return (
    <ThemeProvider theme={customMuiTheme}>
      <RadioGroup
        id={id}
        label={label}
        value={selected ?? ''}
        choices={['Yes', 'No']}
        handleChange={radioGroupChange}
      />
    </ThemeProvider>
  );
};

describe('Radio group component', () => {
  test('Radio buttons render and display correct initial state', () => {
    const { getByLabelText } = render(
      <TestRadioGroup id="example" label="test" />
    );

    // radio buttons display correct labels
    const yesRadio = getByLabelText('Yes') as HTMLInputElement;
    const noRadio = getByLabelText('No') as HTMLInputElement;

    expect(yesRadio).toBeInTheDocument();
    expect(noRadio).toBeInTheDocument();

    expect(yesRadio).not.toBeChecked();
    expect(noRadio).not.toBeChecked();
  });

  test('Checkbox functions correctly', () => {
    const { getByLabelText } = render(
      <TestRadioGroup id="example" label="test" />
    );

    const yesRadio = getByLabelText('Yes') as HTMLInputElement;
    const noRadio = getByLabelText('No') as HTMLInputElement;

    // clicking radio button selects it
    userEvent.click(yesRadio);
    expect(yesRadio).toBeChecked();
    expect(noRadio).not.toBeChecked();

    // click second radio button selects it & deselects the first
    userEvent.click(noRadio);
    expect(noRadio).toBeChecked();
    expect(yesRadio).not.toBeChecked();
  });

  test('Radio group props are passed correctly', () => {
    const { getByRole } = render(<TestRadioGroup id="example" label="test" />);

    const radioGroup = getByRole('radiogroup');

    // id passed correctly
    // label and choices props are checked in above tests
    expect(radioGroup).toHaveAttribute('id', 'example');
  });

  test('Radio buttons are accessible and focusable', async () => {
    const { getByRole, getByLabelText } = render(
      <TestRadioGroup id="example" label="test" />
    );

    const radioGroup = getByRole('radiogroup');
    const yesRadio = getByLabelText('Yes') as HTMLInputElement;

    // radio buttons are focusable
    userEvent.tab();
    expect(yesRadio).toHaveFocus();

    // pressing spacebar changes state
    userEvent.type(yesRadio, ' ');
    expect(yesRadio).toBeChecked();

    // radio buttons do not trap focus
    userEvent.tab();
    expect(radioGroup).not.toHaveFocus();
  });
});
