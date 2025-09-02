import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';
import LocationDisplay from '../App';

const MODAL_FADE_MS = 500;

/** Helpers */
// Click the modal confirmation button and advance timers to simulate the fade-out finishing
const confirmModalAndFFW = (text = 'continue', ms = MODAL_FADE_MS) => {
  fireEvent.click(screen.getByText(new RegExp(text, 'i')));
  act(() => {
    jest.advanceTimersByTime(ms);
  });
};

describe('Routing Tests', () => {
  beforeAll(() => {
    // Control time so we can fastforward MUI transition durations
    jest.useFakeTimers();
    console.warn = jest.fn();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    // mock the scrollTo component
    window.scrollTo = jest.fn();
  });

  test('it can render a component that uses useLocation', () => {
    const route = '/';

    // using <MemoryRouter> when you want to manually control the history
    render(
      <Router initialEntries={[route]}>
        <LocationDisplay />
      </Router>
    );

    // to verify location display is rendered
    expect(screen.getByTestId('location-display')).toHaveTextContent(route);
  });

  test('the static pre-form pages route correctly', async () => {
    render(<App />, { wrapper: Router });

    // Landing page -> Welcome
    const startNowButton = screen.getByTestId('start-now-button');
    fireEvent.click(startNowButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/welcome'
    );

    // Welcome -> Before You Begin
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/before-you-begin'
    );

    // Before You Begin -> Advice
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent('/advice');

    // Advice -> Introduction
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent('/intro');

    // Fill out introduction form
    const fullNameInput = screen.getByPlaceholderText(
      'introduction_form.fullName_input_placeholder'
    );
    const ageInput = screen.getByPlaceholderText('0');
    const radioButtons = screen.getAllByRole('radio');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(ageInput, { target: { value: 30 } });
    fireEvent.click(radioButtons[0]);

    // Introduction -> Introduction Preview
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/introduction/preview'
    );

    // Introduction Preview -> Modal -> Involvement
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/introduction/preview'
    );

    confirmModalAndFFW();
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/involvement'
    );

    // Select job checkbox and navigate to job form
    const jobCheckbox = screen.getByLabelText(/job/i);
    fireEvent.click(jobCheckbox);
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent('/job');

    // Fill out job form
    const companyName = screen.getByPlaceholderText(
      'job_form.companyName_input_placeholder'
    );
    const currentJob = screen.getByPlaceholderText(
      'job_form.jobTitle_input_placeholder'
    );
    const jobExplanation = screen.getByPlaceholderText(
      'job_form.jobDescription_input_placeholder'
    );

    fireEvent.change(companyName, { target: { value: 'Company' } });
    fireEvent.change(currentJob, { target: { value: 'Job Title' } });
    fireEvent.change(jobExplanation, {
      target: { value: 'This is a job description' },
    });

    // Job -> Job Preview
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/job/preview'
    );

    // Job Preview -> Modal -> Goals
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/job/preview'
    );

    confirmModalAndFFW();
    expect(screen.getByTestId('location-display')).toHaveTextContent('/goals');

    // Fill out goals form
    const goals = screen.getByPlaceholderText(
      'goals_form.goals_input_placeholder'
    );
    const steps = screen.getByPlaceholderText(
      'goals_form.goalsHow_input_placeholder'
    );

    fireEvent.change(goals, { target: { value: 'Goals' } });
    fireEvent.change(steps, { target: { value: 'Steps' } });

    // Goals -> Goals Preview
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/goals/preview'
    );

    // Goals Preview -> Modal -> Why
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/goals/preview'
    );

    confirmModalAndFFW();
    expect(screen.getByTestId('location-display')).toHaveTextContent('/why');

    // Fill out why form
    const whyClear = screen.getByPlaceholderText(
      'why_form.clearRecordWhy_input_placeholder'
    );
    const clearHow = screen.getByPlaceholderText(
      'why_form.clearRecordHow_input_placeholder'
    );

    fireEvent.change(whyClear, { target: { value: 'The why' } });
    fireEvent.change(clearHow, { target: { value: 'The how' } });

    // Why -> Why Preview
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/why/preview'
    );

    // Why Preview -> Modal -> Finalize
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/why/preview'
    );

    confirmModalAndFFW();
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/finalize'
    );

    // Finalize -> Finalize Preview
    fireEvent.click(screen.getByText(/next/i));
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/finalize/preview'
    );

    // Finalize Preview -> Modal -> Home
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByText(/return home/i));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    confirmModalAndFFW('return home');
    expect(screen.getByTestId('location-display')).toHaveTextContent('/');
  });
});
