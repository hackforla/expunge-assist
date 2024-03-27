import React from 'react'; // necessary to render components
import { render, screen } from '@testing-library/react';
import App from '../App';

it('Tests execute', () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValue(true);

  expect(mockFn()).toBe(true);
  expect(mockFn()).not.toBe(false);
});
