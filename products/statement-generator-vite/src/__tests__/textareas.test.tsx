import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@material-ui/core/styles';
import customMuiTheme from 'styles/customMuiTheme';

import Textarea from '../components/Textarea';

describe('Textarea component', () => {
  test('Textarea renders and displays correct default value', () => {
    const { getByText } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Textarea id="test" handleChange={() => {}} defaultValue="Type here" />
      </ThemeProvider>
    );

    const textarea = getByText(/Type here/i);

    expect(textarea).toBeInTheDocument();
  });

  test('Textarea props are passed correctly', () => {
    interface ExpectedProps {
      placeholder: string;
      id: string;
      rows: string;
    }

    const checkTextareaProps = (
      input: HTMLElement,
      expectedProps: ExpectedProps
    ) => {
      const attributes: (keyof typeof expectedProps)[] = [
        'placeholder',
        'rows',
        'id',
      ];
      attributes.forEach((attr) => {
        expect(input).toHaveAttribute(attr, expectedProps[attr]);
      });
    };

    const { getByText, rerender } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Textarea
          id="test"
          label="label"
          placeholder="Type here"
          handleChange={() => {}}
          defaultValue="Type here"
          rows={3}
        />
      </ThemeProvider>
    );

    const textarea = getByText(/Type here/i);

    // passed correct placeholder, # of rows, and id
    checkTextareaProps(textarea, {
      placeholder: 'Type here',
      rows: '3',
      id: 'test',
    });

    // passed correct label
    const label = getByText('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'test');

    // passed disabled state correctly
    rerender(
      <ThemeProvider theme={customMuiTheme}>
        <Textarea
          id="test"
          label="label"
          handleChange={() => {}}
          defaultValue="Type here"
          rows={3}
          disabled
        />
      </ThemeProvider>
    );

    expect(textarea).toBeDisabled();
  });

  test('Textarea is accessible and focusable', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Textarea
          id="accessible-textarea"
          label="accessibleTextarea"
          placeholder="Type here"
          handleChange={() => {}}
        />
      </ThemeProvider>
    );

    // label is associated with the textarea
    const label = getByText('accessibleTextarea');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'accessible-textarea');

    // textarea and label focus on tab
    const input = getByPlaceholderText('Type here');
    userEvent.tab();
    expect(label).toHaveFocus();
    userEvent.tab();
    expect(input).toHaveFocus();

    // textarea does not trap focus
    userEvent.tab();
    expect(input).not.toHaveFocus();

    // textarea focuses on click
    userEvent.click(input);
    expect(input).toHaveFocus();
  });
});
