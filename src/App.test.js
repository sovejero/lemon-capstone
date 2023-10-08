import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon headlines', () => {
  render(<App />);
  const reserveButton = screen.getAllByText(/Little Lemon/i, { selector: 'h1' });
  expect(reserveButton[0]).toBeInTheDocument();
});
