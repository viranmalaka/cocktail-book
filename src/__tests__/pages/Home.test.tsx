import { screen } from '@testing-library/react';
import Home from '../../pages/Home';
import { renderWithProviders } from '../../config/test-utils';

describe('Home page', () => {
  it('should render 5 Random Cards', () => {
    renderWithProviders(<Home />);
    expect(screen.getByText('Refresh')).toBeInTheDocument();
  });
});
