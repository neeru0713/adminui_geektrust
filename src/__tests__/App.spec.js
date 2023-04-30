import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

it('renders Admin Page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
