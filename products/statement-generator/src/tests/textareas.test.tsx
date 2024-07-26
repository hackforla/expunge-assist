import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
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

    // passed correct placeholder
    expect(textarea).toHaveAttribute('placeholder', 'Type here');

    // passed correct # of rows
    expect(textarea).toHaveAttribute('rows', '3');

    // passed correct id
    expect(textarea).toHaveAttribute('id', 'test');

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
          defaultValue=""
          rows={3}
        />
      </ThemeProvider>
    );

    // label is associated with the textarea
    const label = getByText('accessibleTextarea');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'accessible-textarea');

    // textarea is focusable
    const textarea = getByPlaceholderText('Type here');
    textarea.focus();
    expect(textarea).toHaveFocus();
  });
});
