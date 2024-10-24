import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import customMuiTheme from '../styles/customMuiTheme';
import Button from '../components/Button';
import Input from '../components/Input';

// Fixing implicit any types
let button: HTMLButtonElement;
let input1: HTMLInputElement;
let input2: HTMLInputElement;

beforeEach(() => {
  const { getByRole } = render(
    <ThemeProvider theme={customMuiTheme}>
      <>
        <Input
          id="input1"
          label="Input 1"
          placeholder="Enter something"
          type="text"
          handleChange={() => {}}
        />
        <Input
          id="input2"
          label="Input 2"
          placeholder="Enter something"
          type="text"
          handleChange={() => {}}
        />
        <Button buttonText="Submit" disabled />
      </>
    </ThemeProvider>
  );
  button = getByRole('button', { name: /Submit/i }) as HTMLButtonElement;
  input1 = getByRole('textbox', { name: /Input 1/i }) as HTMLInputElement;
  input2 = getByRole('textbox', { name: /Input 2/i }) as HTMLInputElement;
});

describe('Input and Button interactions', () => {
  test('Filling some inputs keeps button disabled', () => {
    // Test logic here
  });

  // Test 1: Button starts disabled
  test('Button starts disabled', () => {
    expect(button).toBeDisabled();
  });

  // Test 2: Filling some inputs keeps the button disabled
  test('Filling some inputs keeps button disabled', () => {
    fireEvent.change(input1, { target: { value: 'Test input 1' } });
    expect(button).toBeDisabled();
  });

  // Test 3: Filling all inputs enables the button
  test('Filling all inputs enables the button', () => {
    fireEvent.change(input1, { target: { value: 'Test input 1' } });
    fireEvent.change(input2, { target: { value: 'Test input 2' } });
    expect(button).toBeEnabled();
  });

  // Test 4: Removing an answer after filling all inputs disables the button
  test('Removing an answer disables the button again', () => {
    fireEvent.change(input1, { target: { value: 'Test input 1' } });
    fireEvent.change(input2, { target: { value: 'Test input 2' } });
    expect(button).toBeEnabled();

    fireEvent.change(input2, { target: { value: '' } });
    expect(button).toBeDisabled();
  });
});
