import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Checkbox from '../components/Checkbox';

// create TestCheckbox component in order to test state changes
interface CheckboxProps {
  id: string;
  label: string;
}

const checkboxMock = jest.fn();

const TestCheckbox: React.FC<CheckboxProps> = ({ id, label }) => {
  const [checked, setChecked] = React.useState(false);
  const checkboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    checkboxMock();
  };
  return (
    <Checkbox
      id={id}
      label={label}
      checked={checked}
      onChange={checkboxChange}
    />
  );
};

describe('Checkbox component', () => {
  test('Checkbox renders and displays correct initial state', () => {
    const { getByRole } = render(<TestCheckbox id="example" label="test" />);

    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('Checkbox functions correctly', () => {
    const { getByLabelText } = render(
      <>
        <TestCheckbox id="one" label="first" />
        <TestCheckbox id="two" label="second" />
        <TestCheckbox id="three" label="third" />
      </>
    );

    const first = getByLabelText(/first/i);
    const second = getByLabelText(/second/i);
    const third = getByLabelText(/third/i);

    // clicking checkbox changes state
    userEvent.click(first);
    expect(first).toBeChecked();

    // clicking checkbox does NOT change state of other checkboxes
    expect(second).not.toBeChecked();
    expect(third).not.toBeChecked();

    // multi-select is possible
    userEvent.click(second);
    expect(first).toBeChecked();
    expect(second).toBeChecked();
    expect(third).not.toBeChecked();
  });

  test('Checkbox props are passed correctly', () => {
    const { getByRole } = render(<TestCheckbox id="example" label="test" />);

    // label passed correctly
    const checkbox = getByRole('checkbox');

    // id passed correctly
    expect(checkbox).toHaveAttribute('id', 'example');
  });

  test('Checkbox is accessible and focusable', async () => {
    const { getByLabelText } = render(
      <>
        <TestCheckbox id="one" label="first" />
        <TestCheckbox id="two" label="second" />
      </>
    );

    const first = getByLabelText('first');

    // checkbox is focusable
    userEvent.tab();
    expect(first).toHaveFocus();

    // pressing spacebar changes state
    // using fireEvent - wasn't able to get test working with userEvent keyboard API
    userEvent.type(first, ' ');
    expect(first).toBeChecked();

    // checkbox does not trap focus
    userEvent.tab();
    expect(first).not.toHaveFocus();
  });
});
