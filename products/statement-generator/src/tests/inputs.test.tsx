import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@material-ui/core/styles';
import customMuiTheme from 'styles/customMuiTheme';

import Input from '../components/Input';

describe('Input component', () => {
  test('Input renders and displays correct default value', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Input
          id="test"
          handleChange={() => {}}
          defaultValue="Type here"
          placeholder="Type here"
          type="text"
        />
      </ThemeProvider>
    );

    const input = getByPlaceholderText(/Type here/i);

    expect(input).toBeInTheDocument();
  });

  test('Inputs validate number responses', async () => {
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Input
          id="test"
          handleChange={() => {}}
          placeholder="0"
          defaultValue="0"
          type="number"
        />
      </ThemeProvider>
    );

    const input = getByRole(/spinbutton/i) as HTMLInputElement;

    // number inputs don't allow numbers < 0
    fireEvent.keyDown(input, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(input).toHaveValue(0);

    // valid responses show valid icon
    userEvent.type(input, '35');

    const icon = getByTestId('valid-icon');
    expect(icon).toBeInTheDocument();

    // removing a response will remove valid icon
    userEvent.clear(input);
    expect(icon).not.toBeInTheDocument();
  });

  test('Inputs validate text responses', () => {
    const { getByTestId, getByRole } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Input id="test" handleChange={() => {}} placeholder="" type="text" />
      </ThemeProvider>
    );

    const input = getByRole(/textbox/i) as HTMLInputElement;

    // valid responses show valid icon
    userEvent.type(input, 'Firstname Lastname');

    const icon = getByTestId('valid-icon');
    expect(icon).toBeInTheDocument();

    // removing a response will remove valid icon
    userEvent.clear(input);
    expect(icon).not.toBeInTheDocument();
  });

  test('Input props are passed correctly', () => {
    interface ExpectedProps {
      placeholder: string;
      id: string;
      type: string;
    }

    const checkInputProps = (
      input: HTMLElement,
      expectedProps: ExpectedProps
    ) => {
      const attributes: (keyof typeof expectedProps)[] = [
        'placeholder',
        'id',
        'type',
      ];
      attributes.forEach((attr) => {
        expect(input).toHaveAttribute(attr, expectedProps[attr]);
      });
    };

    const { getByPlaceholderText } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Input
          id="text"
          handleChange={() => {}}
          placeholder="Text"
          type="text"
        />
        <Input
          id="number"
          handleChange={() => {}}
          placeholder="Number"
          type="number"
        />
      </ThemeProvider>
    );

    const textInput = getByPlaceholderText(/Text/i);
    const numInput = getByPlaceholderText(/Number/i);

    // passed correct placeholder, id, and type
    checkInputProps(textInput, {
      placeholder: 'Text',
      id: 'text',
      type: 'text',
    });
    checkInputProps(numInput, {
      placeholder: 'Number',
      id: 'number',
      type: 'number',
    });
  });

  test('Input is accessible and focusable', () => {
    const { getAllByText, getByPlaceholderText } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Input
          id="accessible-input"
          label="accessibleInput"
          placeholder="Type here"
          handleChange={() => {}}
          type="text"
        />
      </ThemeProvider>
    );

    // label is associated with the input
    const label = getAllByText(/accessibleInput/i)[0];
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'accessible-input');

    // input is focusable
    const input = getByPlaceholderText('Type here');
    userEvent.click(input);
    expect(input).toHaveFocus();

    // input does not trap focus
    userEvent.tab();
    expect(input).not.toHaveFocus();
  });
});
