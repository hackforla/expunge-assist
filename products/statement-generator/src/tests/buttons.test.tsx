import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonComponent from 'components/Button';
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
  // tests that button text displays correctly
  test('renders the button element', () => {
    const { getByText } = render(<ButtonComponent buttonText="Click me" />);

    const button = getByText(/Click Me/i);

    expect(button).toBeTruthy();
  });

  // Test that clicking the button triggers the onClick function (if provided)
  test('Button click triggers onClick function', () => {
    const mockOnClick = jest.fn();

    const { getByText } = render(
      <ButtonComponent buttonText="Click Me" onClick={mockOnClick} />
    );

    const button = getByText(/Click Me/i);

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // Test that buttons render arrows based on the hasBackArrow and hasForwardArrow props
  test('Button renders back arrow', () => {
    const { getByText, getByTestId } = render(
      <ButtonComponent buttonText="Back" hasBackArrow />
    );

    const button = getByText(/Back/i);
    const arrow = getByTestId('back-arrow');

    expect(button).toBeTruthy();
    expect(arrow).toBeTruthy();
  });

  test('Button renders forward arrow', () => {
    const { getByText, getByTestId } = render(
      <ButtonComponent buttonText="Next" hasForwardArrow />
    );

    const button = getByText(/Next/i);
    const arrow = getByTestId('forward-arrow');

    expect(button).toBeTruthy();
    expect(arrow).toBeTruthy();
  });

  // Test that the button is disabled when the disabled prop is true
  test('Button is disabled when disabled prop is true', () => {
    const { getByRole } = render(
      <ButtonComponent buttonText="Disabled Button" disabled={true} />
    );

    const button = getByRole('button', { name: /Disabled Button/i });

    if (button) {
      expect(button).toBeDisabled();
    }
  });

  // Test that the button is not disabled when the disabled prop is false
  test('Button is re-enabled when disabled prop is false', () => {
    const { getByRole } = render(
      <ButtonComponent buttonText="Enabled Button" disabled={false} />
    );

    const button = getByRole('button', { name: /Enabled Button/i });

    if (button) {
      expect(button).not.toBeDisabled();
    }
  });

  // Test that the button has appropriate styles when disabled
  test('Disabled button has appropriate styles', () => {
    const { getByRole } = render(
      <ButtonComponent buttonText="Disabled Button" disabled={true} />
    );

    const button = getByRole('button', { name: /Disabled Button/i });

    expect(button).toHaveStyle({ color: 'rgba(0, 0, 0, 0.26)' });
    expect(button).toHaveStyle({ background: 'rgb(197, 179, 209)' });
  });

  // Test that the button has appropriate styles when not disabled
  test('Non-disabled button has appropriate styles', () => {
    const { getByRole } = render(
      <ButtonComponent buttonText="Enabled Button" disabled={false} />
    );

    const button = getByRole('button', { name: /Enabled Button/i });

    expect(button).not.toHaveStyle({ color: 'rgba(0, 0, 0, 0.26)' });
    expect(button).not.toHaveStyle({ background: 'rgb(197, 179, 209)' });
  });

  // Test that the button is at least 44px wide
  test('Button is at least 44px', () => {
    const { getByRole } = render(<ButtonComponent buttonText="Click me" />);

    const button = getByRole('button', { name: /Click me/i });

    expect(button).toHaveStyle({ minHeight: '44px' });
  });

  // Test that the button is focusable
  test('Button can receive focus', () => {
    const { getByRole } = render(<ButtonComponent buttonText="Click me" />);

    const button = getByRole('button', { name: /Click me/i });

    fireEvent.focus(button);

    expect(button).toHaveClass('Mui-focusVisible');
  });

  // Test that button doesn't trap focus - pressing tab moves focus to next element
  test('Button does not trap focus and moves focus to next element on Tab', () => {
    const { getByRole, getByTestId } = render(
      <>
        <ButtonComponent buttonText="Click me" />
        <input type="text" data-testid="next-element" />
      </>
    );

    const button = getByRole('button', { name: /Click me/i });
    const nextElement = getByTestId('next-element');

    button.focus();
    userEvent.tab();

    expect(nextElement).toHaveFocus();
  });
});
