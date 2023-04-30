import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Admintable from '../components/Admintable';
import '@testing-library/jest-dom/extend-expect';

describe('Admintable', () => {
  it('renders the main display', () => {
    render(<Admintable />);
    const linkElement = screen.getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
