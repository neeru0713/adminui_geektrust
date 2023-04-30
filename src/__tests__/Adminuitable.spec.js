/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Adminuitable from '../components/Adminuitable';
import '@testing-library/jest-dom/extend-expect';

describe('Admintable', () => {
  it('renders the main display', () => {
    render(<Adminuitable />);
    const linkElement = screen.getByText(/Name/i);
    expect(linkElement).toBeInTheDocument();
  });
});
