import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add a Property/i);
  expect(linkElement).toBeInTheDocument();
});
