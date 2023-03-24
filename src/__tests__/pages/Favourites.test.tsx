import { setupStore } from '../../app/store';
import { getMockedServer, renderWithProviders } from '../../config/test-utils';
import Favourites from '../../pages/Favourites';
import { screen } from '@testing-library/react';

const server = getMockedServer('lookup.php', {
  drinks: [
    {
      idDrink: '11111',
      strDrink: 'Mock Drink Name',
      strDrinkThumb: 'https://www.example.com/img/12345',
      strCategory: 'Mock shot',
      strInstructions: 'this is how this made',
    },
  ],
});

describe('favourite page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('should show the number of cards according to the selected favourites ids in the store', async () => {
    const store = setupStore({
      favourite: {
        selectedFav: {
          '11111': true,
          '22222': true,
        },
      },
    });

    renderWithProviders(<Favourites />, { store });

    expect(screen.getAllByTestId('loader')).toHaveLength(2);
    // await waitFor(() => screen.findByText(/Mock Drink Name/i));
    const cards = await screen.findAllByText('Mock Drink Name');
    expect(cards).toHaveLength(2);
  });
});
