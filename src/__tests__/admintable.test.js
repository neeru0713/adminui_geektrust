import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Admintable from '../components/Admintable';

describe('Admintable', () => {
  test('renders the main display', () => {
    const { getByTestId } = render(<Admintable />);
    // expect(getByTestId('main-display')).toBeInTheDocument();
  });
});
