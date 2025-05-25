import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders main heading', () => {
  render(<Home />);
  const heading = screen.getByRole('heading', {
    name: /mental wellness\s*reimagined/i  // match the full main title
  });
  expect(heading).toBeInTheDocument();
});
