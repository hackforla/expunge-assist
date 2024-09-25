import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@material-ui/core/styles';
import customMuiTheme from 'styles/customMuiTheme';

import Checkbox from '../components/Checkbox';

describe('Checkbox component', () => {
  test('Checkbox renders and displays correct initial state', () => {
    const { getByRole } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Checkbox
          id="example"
          label="test"
          checked={false}
          onChange={() => jest.fn()}
        />
      </ThemeProvider>
    );

    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('Checkbox functions correctly', () => {
    const onChange = jest.fn();

    const { getByLabelText } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Checkbox id="first" label="one" checked={false} onChange={onChange} />
        <Checkbox id="second" label="two" checked={false} onChange={onChange} />
        <Checkbox
          id="third"
          label="three"
          checked={false}
          onChange={onChange}
        />
      </ThemeProvider>
    );

    const first = getByLabelText(/one/i);
    const second = getByLabelText(/two/i);
    const third = getByLabelText(/three/i);

    // Clicking checkbox changes state

    userEvent.click(first);
    expect(onChange).toHaveBeenCalledTimes(1);
    // expect(first).toBeChecked();

    // Clicking checkbox does NOT change state of other checkboxes

    // expect(second).not.toBeChecked();
    // expect(third).not.toBeChecked();

    // Multi-select is possible

    userEvent.click(second);
    expect(onChange).toHaveBeenCalledTimes(2);

    // expect(first).toBeChecked();
    // expect(second).toBeChecked();
    // expect(third).not.toBeChecked();
  });

  test('Checkbox props are passed correctly', () => {
    const { getByRole } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Checkbox
          id="example"
          label="test"
          checked={false}
          onChange={() => jest.fn()}
        />
      </ThemeProvider>
    );

    const checkbox = getByRole('checkbox');

    expect(checkbox).toHaveAttribute('id', 'example');
  });

  //   test('Checkbox is accessible and focusable', () => {
  //     const { getByText, getByPlaceholderText } = render(
  //       <ThemeProvider theme={customMuiTheme}>
  //         <Textarea
  //           id="accessible-textarea"
  //           label="accessibleTextarea"
  //           placeholder="Type here"
  //           handleChange={() => {}}
  //         />
  //       </ThemeProvider>
  //     );

  //     // label is associated with the textarea
  //     const label = getByText('accessibleTextarea');
  //     expect(label).toBeInTheDocument();
  //     expect(label).toHaveAttribute('for', 'accessible-textarea');

  //     // using spacebar changes state
  //     const input = getByPlaceholderText('Type here');
  //     userEvent.tab();
  //     expect(label).toHaveFocus();
  //     userEvent.tab();
  //     expect(input).toHaveFocus();

  //     // checkbox is focusable
  //     userEvent.click(input);
  //     expect(input).toHaveFocus();

  //     // checkbox does not trap focus
  //     userEvent.tab();
  //     expect(input).not.toHaveFocus();

  // passed disabled state correctly
  //   rerender(
  //     <ThemeProvider theme={customMuiTheme}>
  //       <Textarea
  //         id="test"
  //         label="label"
  //         handleChange={() => {}}
  //         defaultValue="Type here"
  //         rows={3}
  //         disabled
  //       />
  //     </ThemeProvider>
  //   );

  //   expect(textarea).toBeDisabled();
  //   });
});
