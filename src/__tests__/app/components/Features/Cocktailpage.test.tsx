import { getMockedServer, renderWithProviders } from '../../../../config/test-utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import CocktailPage from '../../../../app/components/Features/CocktailPage/CocktailPage';

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

describe('test CocktailPage', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('should show loader until the data is fetched', async () => {
    renderWithProviders(<CocktailPage id="11111" />);

    await waitFor(() => screen.findByTestId('loader'));

    expect(screen.getByTestId('loader')).toHaveAttribute('class', 'cb-loader-container');
    await waitFor(() => screen.findByRole('img', { hidden: true }));
  });

  it('should render cocktail details after data is fetched', async () => {
    renderWithProviders(<CocktailPage id="11111" />);
    await waitFor(() => screen.findByRole('img', { hidden: true }));

    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', 'https://www.example.com/img/12345');

    expect(screen.getByText(/Mock Drink Name/i)).toBeInTheDocument();
    expect(screen.getByText('11111')).toBeInTheDocument();
    expect(screen.getByText('Mock shot')).toBeInTheDocument();
    expect(screen.getByText('this is how this made')).toBeInTheDocument();
  });

  it('should be able to make a cocktail as fav from the details page', async () => {
    const { store } = renderWithProviders(<CocktailPage id="11111" />);
    await screen.findByRole('img', { hidden: true });

    const favIcon = await screen.findByTestId('heart-icon');

    fireEvent.click(favIcon);
    expect(store?.getState().favourite.selectedFav).toEqual({
      '11111': true,
    });
  });
});
