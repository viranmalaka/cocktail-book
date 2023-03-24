import { renderWithProviders } from '../../config/test-utils';
import Search from '../../pages/Search';
import { screen } from '@testing-library/react';

describe('test Search Page', () => {
  it('should render the A-Z link', () => {
    renderWithProviders(<Search />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(26);
    expect(links[0]).toHaveAttribute('href', '/search?f=A');
    expect(links[1]).toHaveAttribute('href', '/search?f=B');
  });
});
