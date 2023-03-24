import { getMockedServer, renderWithProviders } from '../../../../config/test-utils';
import RandomCocktailDetailsCard from '../../../../app/components/Features/Cards/RandomCocktailDetailsCard';
import { fireEvent, screen, waitFor } from '@testing-library/react';

const server = getMockedServer('random.php', {
  drinks: [
    {
      idDrink: '11111',
      strDrink: 'Random Drink Name',
      strDrinkThumb: 'https://www.example.com/img/random/12345',
      strCategory: 'random shot',
      strInstructions: 'this is how this made',
    },
  ],
});

describe('test RandomCocktailDetailsCard', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('should render until random data is fetched', async () => {
    renderWithProviders(<RandomCocktailDetailsCard index="key-1" />);

    await waitFor(() => screen.findByTestId('loader'));

    expect(screen.getByTestId('loader')).toHaveAttribute('class', 'cb-loader-container');
    await waitFor(() => screen.findByRole('img', { hidden: true }));
  });

  it('should render data after the random api call is success', async () => {
    renderWithProviders(<RandomCocktailDetailsCard index="key-1" />);

    await waitFor(() => screen.findByRole('img', { hidden: true }));
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      'https://www.example.com/img/random/12345',
    );
    expect(screen.getByText('Random Drink Name')).toBeInTheDocument();
    expect(screen.getByText('random shot')).toBeInTheDocument();
  });

  it('should save the random cocktail id in the redux store', async () => {
    const { store } = renderWithProviders(<RandomCocktailDetailsCard index="key-2" />);
    await waitFor(() => screen.findByRole('img', { hidden: true }));

    expect(store?.getState().cocktail.randomCocktailIds).toEqual({ 'key-2': '11111' });
  });

  it('should be able to make a cocktail as fav in random cocktail details card', async () => {
    const { store } = renderWithProviders(<RandomCocktailDetailsCard index="key-2" />);
    await screen.findByRole('img', { hidden: true });

    const favIcon = await screen.findByTestId('heart-icon');

    fireEvent.click(favIcon);
    expect(store?.getState().favourite.selectedFav).toEqual({
      '11111': true,
    });
  });
});
