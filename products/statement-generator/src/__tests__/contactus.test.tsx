import React from 'react';
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ContactUs from '../pages/ContactUs';
import customMuiTheme from '../styles/customMuiTheme';

jest.mock('@material-ui/core/useMediaQuery', () => jest.fn());

const mockedUseMediaQuery = useMediaQuery as jest.Mock;

const renderContactUs = () =>
  render(
    <ThemeProvider theme={customMuiTheme}>
      <ContactUs />
    </ThemeProvider>
  );

const getFormControls = () => {
  const nameInput = screen.getByPlaceholderText(
    'contact_us_page.name_placeholder'
  );
  const emailInput = screen.getByPlaceholderText(
    'contact_us_page.email_placeholder'
  );
  const messageInput = screen.getByPlaceholderText(
    'contact_us_page.message_placeholder'
  );
  const submitButton = screen.getByRole('button', {
    name: 'contact_us_page.submit_button',
  });

  return { nameInput, emailInput, messageInput, submitButton };
};

const fillValidForm = async ({
  nameInput,
  emailInput,
  messageInput,
}: ReturnType<typeof getFormControls>) => {
  await act(async () => {
    await userEvent.type(nameInput, 'Test User');
    await userEvent.type(emailInput, 'user@example.com');
    await userEvent.type(messageInput, 'This is a test message.');
  });
};

describe('ContactUs contact form', () => {
  beforeEach(() => {
    mockedUseMediaQuery.mockReturnValue(false);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('shows validation errors for invalid inputs and keeps submit disabled', async () => {
    renderContactUs();

    const { nameInput, emailInput, messageInput, submitButton } =
      getFormControls();

    await act(async () => {
      await userEvent.click(nameInput);
    });
    fireEvent.blur(nameInput);

    await act(async () => {
      await userEvent.type(emailInput, 'not-an-email');
    });
    fireEvent.blur(emailInput);

    await act(async () => {
      await userEvent.type(messageInput, 'short');
    });
    fireEvent.blur(messageInput);

    expect(
      await screen.findByText('contact_us_page.errors.name_required')
    ).toBeVisible();
    expect(
      await screen.findByText('contact_us_page.errors.invalid_email')
    ).toBeVisible();
    expect(
      await screen.findByText('contact_us_page.errors.message_too_short')
    ).toBeVisible();

    expect(submitButton).toBeDisabled();
  });

  test('enables submit when the form is valid', async () => {
    renderContactUs();

    const controls = getFormControls();

    await fillValidForm(controls);

    expect(
      screen.queryByText('contact_us_page.errors.name_required')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('contact_us_page.errors.invalid_email')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('contact_us_page.errors.message_too_short')
    ).not.toBeInTheDocument();

    await waitFor(() => expect(controls.submitButton).toBeEnabled());
  });

  test('shows thank you message after submit and returns to the form', async () => {
    jest.useFakeTimers();
    renderContactUs();

    const controls = getFormControls();

    await fillValidForm(controls);
    await waitFor(() => expect(controls.submitButton).toBeEnabled());

    await act(async () => {
      await userEvent.click(controls.submitButton);
    });

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() =>
      expect(
        screen.getByRole('heading', {
          name: 'contact_us_page.success_header',
        })
      ).toBeInTheDocument()
    );

    await act(async () => {
      await userEvent.click(
        screen.getByRole('button', { name: 'contact_us_page.return_button' })
      );
    });

    expect(
      screen.getByRole('button', { name: 'contact_us_page.submit_button' })
    ).toBeInTheDocument();
    expect(
      (
        screen.getByPlaceholderText(
          'contact_us_page.name_placeholder'
        ) as HTMLInputElement
      ).value
    ).toBe('');
    expect(
      (
        screen.getByPlaceholderText(
          'contact_us_page.email_placeholder'
        ) as HTMLInputElement
      ).value
    ).toBe('');
    expect(
      (
        screen.getByPlaceholderText(
          'contact_us_page.message_placeholder'
        ) as HTMLTextAreaElement
      ).value
    ).toBe('');
  });
});
