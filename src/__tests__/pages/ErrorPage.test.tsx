import { renderWithProviders } from '../../config/test-utils';
import ErrorPage from '../../pages/error-page';
import { screen } from '@testing-library/react';

describe('test ErrorPage', () => {
  it('should render the Oops error', () => {
    renderWithProviders(<ErrorPage />);
    expect(screen.getByRole('heading')).toHaveTextContent('Oops');
  });
});
