import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import customMuiTheme from '../styles/customMuiTheme';
import Button from '../components/Button';
import Input from '../components/Input';

// Simple wrapper component that implements the required behavior
const TestComponent = () => {
  const [formValues, setFormValues] = useState({
    input1: '',
    input2: '',
  });

  const handleInputChange =
    (inputId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues((prev) => ({
        ...prev,
        [inputId]: e.target.value,
      }));
    };

  // Button is disabled unless both inputs have values
  const isButtonDisabled = !formValues.input1 || !formValues.input2;

  return (
    <ThemeProvider theme={customMuiTheme}>
      <Input
        id="input1"
        label="Input 1"
        placeholder="Enter something"
        type="text"
        handleChange={handleInputChange('input1')}
      />
      <Input
        id="input2"
        label="Input 2"
        placeholder="Enter something"
        type="text"
        handleChange={handleInputChange('input2')}
      />
      <Button buttonText="Submit" disabled={isButtonDisabled} />
    </ThemeProvider>
  );
};

describe('Input and Button interactions', () => {
  let button: HTMLButtonElement;
  let input1: HTMLInputElement;
  let input2: HTMLInputElement;

  beforeEach(() => {
    const { getByRole } = render(<TestComponent />);

    button = getByRole('button', { name: /Submit/i }) as HTMLButtonElement;
    input1 = getByRole('textbox', { name: /Input 1/i }) as HTMLInputElement;
    input2 = getByRole('textbox', { name: /Input 2/i }) as HTMLInputElement;
  });

  test('button starts disabled', () => {
    expect(button).toBeDisabled();
  });

  test('filling some inputs keeps button disabled', () => {
    // Fill only the first input
    fireEvent.change(input1, { target: { value: 'Test input 1' } });
    expect(button).toBeDisabled();

    // Clear first input and fill only second input
    fireEvent.change(input1, { target: { value: '' } });
    fireEvent.change(input2, { target: { value: 'Test input 2' } });
    expect(button).toBeDisabled();
  });

  test('filling all inputs enables the button', () => {
    // Fill both inputs
    fireEvent.change(input1, { target: { value: 'Test input 1' } });
    fireEvent.change(input2, { target: { value: 'Test input 2' } });
    expect(button).not.toBeDisabled();
  });

  test('removing an answer after filling all inputs disables the button', () => {
    // Fill both inputs
    fireEvent.change(input1, { target: { value: 'Test input 1' } });
    fireEvent.change(input2, { target: { value: 'Test input 2' } });
    expect(button).not.toBeDisabled();

    // Remove an answer
    fireEvent.change(input2, { target: { value: '' } });
    expect(button).toBeDisabled();

    // Fill it again to ensure it re-enables
    fireEvent.change(input2, { target: { value: 'Test input 2' } });
    expect(button).not.toBeDisabled();
  });
});
