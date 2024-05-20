import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dress message', () => {
  render(<App />);
  const textElement = screen.getByText(/I love Old Dresses!/i);
  expect(textElement).toBeInTheDocument();
});