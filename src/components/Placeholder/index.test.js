import { render, screen } from '@testing-library/react';
import Placeholder from '.';

test('renders placeholder message', () => {
  render(<Placeholder />);

  expect(screen.getByText(/em desenvolvimento/i)).toBeInTheDocument();
});
