import { renderWithProviders } from '../../../../config/test-utils';
import FavouriteIconWrapper from '../../../../app/components/Features/FavouriteIconWrapper/FavouriteIconWrapper';
import { fireEvent, screen } from '@testing-library/react';
import { setupStore } from '../../../../app/store';

describe('test FavouriteIconWrapper', () => {
  it('should not render anything if the id is not given', () => {
    renderWithProviders(<FavouriteIconWrapper />);

    expect(screen.queryByTestId('heart-icon')).not.toBeInTheDocument();
    expect(screen.queryByTestId('filled-heart-icon')).not.toBeInTheDocument();
  });

  it('should show the heart icon if the id is given and id is not set as fav in store', () => {
    const store = setupStore({ favourite: { selectedFav: { '22222': false } } });
    renderWithProviders(<FavouriteIconWrapper cocktailId="22222" />, { store });

    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('filled-heart-icon')).not.toBeInTheDocument();
  });

  it('should show the filled heart icon if the id is given and id is set as fav in store', () => {
    const store = setupStore({ favourite: { selectedFav: { '22222': true } } });
    renderWithProviders(<FavouriteIconWrapper cocktailId="22222" />, { store });

    expect(screen.getByTestId('filled-heart-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('heart-icon')).not.toBeInTheDocument();
  });

  it('should clear the store if product is set as non fav.', () => {
    const store = setupStore({ favourite: { selectedFav: { '22222': true } } });
    renderWithProviders(<FavouriteIconWrapper cocktailId="22222" />, { store });

    fireEvent.click(screen.getByTestId('filled-heart-icon'));

    expect(store.getState().favourite.selectedFav).toEqual({});
  });
});
