import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import App, { LocationDisplay } from '../App';

describe('Routing Tests', () => {
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

    // tests that the start now button the landing page navigates to welcome
    const startNowButton = screen.getByTestId('start-now-button');
    fireEvent.click(startNowButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/welcome'
    );

    // tests that the welcome page navigates to BYB
    const welcomeNextButton = screen.getByText(/next/i);
    fireEvent.click(welcomeNextButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/before-you-begin'
    );

    // tests that the BYB navigates to advice
    const bybNextButton = screen.getByText(/next/i);
    fireEvent.click(bybNextButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent('/advice');

    // tests that the advice page navigates to intro
    const adviceNextButton = screen.getByText(/next/i);
    fireEvent.click(adviceNextButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent('/intro');

    // tests that intro page navigates to intro preview
    const fullNameInput = screen.getByPlaceholderText(
      'introduction_form.fullName_input_placeholder'
    );
    const ageInput = screen.getByPlaceholderText('0');
    const radioButtons = screen.getAllByRole('radio');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(ageInput, { target: { value: 30 } });
    fireEvent.click(radioButtons[0]);

    const introNextButton = screen.getByText(/next/i);
    fireEvent.click(introNextButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/introduction/preview'
    );

    // tests that the intro preview navigates to involvement
    const introPreview = screen.getByText(/next/i);
    expect(introPreview).toBeInTheDocument();
    fireEvent.click(introPreview);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/involvement'
    );

    const popupButton = screen.getByText(/continue/i);
    fireEvent.click(popupButton);

    // tests that the involvement page navigates to future goals
    const jobCheckbox = screen.getByLabelText(/job/i);
    fireEvent.click(jobCheckbox);
    const involvementNext = screen.getByText(/next/i);
    fireEvent.click(involvementNext);
    expect(screen.getByTestId('location-display')).toHaveTextContent('/job');

    // tests that the involvement page navigates to employment
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

    const jobNext = screen.getByText(/next/i);
    fireEvent.click(jobNext);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/job/preview'
    );

    // tests that the involvement second step navigates to goals
    const secondInvolvementButton = screen.getByText(/next/i);
    fireEvent.click(secondInvolvementButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent('/goals');

    const involvementPopupButton = screen.getByText(/continue/i);
    fireEvent.click(involvementPopupButton);

    // tests that future goals navigates to goals preview
    const goals = screen.getByPlaceholderText(
      'goals_form.goals_input_placeholder'
    );
    const steps = screen.getByPlaceholderText(
      'goals_form.goalsHow_input_placeholder'
    );

    fireEvent.change(goals, { target: { value: 'Goals' } });
    fireEvent.change(steps, { target: { value: 'Steps' } });

    const goalsButton = screen.getByText(/next/i);
    fireEvent.click(goalsButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/goals/preview'
    );

    // tests goals preview navigates to why
    const goalsPreviewButton = screen.getByText(/next/i);
    fireEvent.click(goalsPreviewButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent('/why');

    const whyPopupButton = screen.getByText(/continue/i);
    fireEvent.click(whyPopupButton);

    // tests why navigates to
    const whyClear = screen.getByPlaceholderText(
      'why_form.clearRecordWhy_input_placeholder'
    );
    const clearHow = screen.getByPlaceholderText(
      'why_form.clearRecordHow_input_placeholder'
    );

    fireEvent.change(whyClear, { target: { value: 'The why' } });
    fireEvent.change(clearHow, { target: { value: 'The how' } });

    const whyButton = screen.getByText(/next/i);
    fireEvent.click(whyButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/why/preview'
    );

    // tests why preview navigates to finalize
    const whyPreviewButton = screen.getByText(/next/i);
    fireEvent.click(whyPreviewButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/finalize'
    );

    // tests finalize navigates to finalize preview
    const finalizeButton = screen.getByText(/next/i);
    fireEvent.click(finalizeButton);
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      '/finalize/preview'
    );
  });
});
