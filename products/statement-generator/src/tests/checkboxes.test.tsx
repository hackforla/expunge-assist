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
    // need to figure out how to control state in test file

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

    // clicking checkbox changes state

    userEvent.click(first);
    expect(onChange).toHaveBeenCalledTimes(1);
    // expect(first).toBeChecked();

    // clicking checkbox does NOT change state of other checkboxes

    // expect(second).not.toBeChecked();
    // expect(third).not.toBeChecked();

    // multi-select is possible

    userEvent.click(second);
    expect(onChange).toHaveBeenCalledTimes(2);

    // expect(first).toBeChecked();
    // expect(second).toBeChecked();
    // expect(third).not.toBeChecked();
  });

  test('Checkbox props are passed correctly', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={customMuiTheme}>
        <Checkbox
          id="example"
          label="test"
          checked={false}
          onChange={() => jest.fn()}
        />
      </ThemeProvider>
    );

    // label passed correctly
    const checkbox = getByLabelText('test');

    // id passed correctly
    expect(checkbox).toHaveAttribute('id', 'example');
  });

  test('Checkbox is accessible and focusable', async () => {
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

    // checkbox is focusable
    userEvent.click(checkbox);
    expect(checkbox).toHaveFocus();

    // using spacebar changes state
    await userEvent.type(checkbox, '{space}');

    expect(checkbox).toBeChecked();

    // checkbox does not trap focus
    userEvent.tab();
    expect(checkbox).not.toHaveFocus();

    // passed disabled state correctly
    // rerender(
    //   <ThemeProvider theme={customMuiTheme}>
    //     <Checkbox
    //       id="example"
    //       label="test"
    //       checked={false}
    //       onChange={() => jest.fn()}
    //     />
    //   </ThemeProvider>
    // );

    // expect(textarea).toBeDisabled();
  });
});
