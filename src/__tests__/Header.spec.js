import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../components/Header';

describe('Header', () => {
  const constData = [
    { name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { name: 'Bob', email: 'bob@example.com', role: 'user' },
  ];

  const getPages = jest.fn();
  const updateData = jest.fn();
  
  beforeEach(() => {
    render(
      <Header
        constData={constData} 
        getPages={getPages} 
        updateData={updateData}
      ></Header>
    );
  });

  it('renders without crashing', () => {
    const input = screen.getByPlaceholderText('Please enter a Search term');
    expect(input).toBeInTheDocument()
  });

  it('calls getPages and updateData with filtered array when input changes', () => {
    
    const input = screen.getByPlaceholderText('Please enter a Search term');
    fireEvent.change(input, { target: { value: 'alice' } });
    expect(getPages).toHaveBeenCalledWith([{ name: 'Alice', email: 'alice@example.com', role: 'admin' }]);
    expect(updateData).toHaveBeenCalledWith([{ name: 'Alice', email: 'alice@example.com', role: 'admin' }]);
  });


  it('filters data by name, email, and role', () => {
    
    const input = screen.getByPlaceholderText('Please enter a Search term');
    fireEvent.change(input, { target: { value: 'example' } });
    expect(getPages).toHaveBeenCalledWith([
      { name: 'Alice', email: 'alice@example.com', role: 'admin' },
      { name: 'Bob', email: 'bob@example.com', role: 'user' },
    ]);
    expect(updateData).toHaveBeenCalledWith([
      { name: 'Alice', email: 'alice@example.com', role: 'admin' },
      { name: 'Bob', email: 'bob@example.com', role: 'user' },
    ]);
    fireEvent.change(input, { target: { value: 'admin' } });
    expect(getPages).toHaveBeenCalledWith([{ name: 'Alice', email: 'alice@example.com', role: 'admin' }]);
    expect(updateData).toHaveBeenCalledWith([{ name: 'Alice', email: 'alice@example.com', role: 'admin' }]);
    fireEvent.change(input, { target: { value: 'user' } });
    expect(getPages).toHaveBeenCalledWith([{ name: 'Bob', email: 'bob@example.com', role: 'user' }]);
    expect(updateData).toHaveBeenCalledWith([{ name: 'Bob', email: 'bob@example.com', role: 'user' }]);
  });

});
