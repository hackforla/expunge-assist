import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from 'components/ProgressBar';

describe('Progress Bar', () => {
  // tests that progress bar renders correctly
  test('renders the progress bar component', () => {
    render(<ProgressBar percentage={16.67} />);
    const progressBarElement = screen.getByRole('progressbar');
    expect(progressBarElement).toBeInTheDocument();
  });

  // tests that progress bar renders the percentage that it's passed
  test('progress bar displays the correct percentage', () => {
    render(<ProgressBar percentage={50} />);
    const progressBarElement = screen.getByRole('progressbar');
    expect(progressBarElement).toHaveAttribute('aria-valuenow', '50');
  });

  // tests that progress bar renders the percentage its passed when completed
  test('progress bar displays the correct max percentage', () => {
    render(<ProgressBar percentage={100} />);
    const progressBarElement = screen.getByRole('progressbar');
    expect(progressBarElement).toHaveAttribute('aria-valuenow', '100');
  });
});
