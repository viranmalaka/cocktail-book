import { getMockedServer, renderWithProviders } from '../../../../config/test-utils';
import CocktailDetailsCard from '../../../../app/components/Features/Cards/CocktailDetailsCard';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { setupStore } from '../../../../app/store';

const server = getMockedServer('lookup.php', {
  drinks: [
    {
      idDrink: '12345',
      strDrink: 'Mock Drink Name',
      strDrinkThumb: 'https://www.example.com/img/12345',
      strCategory: 'shot',
      strInstructions: 'this is how this made',
    },
  ],
});

describe('test CocktailDetailCard', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('should render loader until the data is fetched', async () => {
    renderWithProviders(<CocktailDetailsCard id="12345" />);

    await waitFor(() => screen.findByTestId('loader'));

    expect(screen.getByTestId('loader')).toHaveAttribute('class', 'cb-loader-container');
    await waitFor(() => screen.findByRole('img', { hidden: true }));
  });

  it('should render image after data is fetched', async () => {
    renderWithProviders(<CocktailDetailsCard id="12345" />);

    await waitFor(() => screen.findByRole('img', { hidden: true }));
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute('src', 'https://www.example.com/img/12345');
  });

  it('should render name/ category after data is fetched', async () => {
    renderWithProviders(<CocktailDetailsCard id="12345" />);

    await screen.findByRole('img', { hidden: true });
    expect(screen.getByText('Mock Drink Name')).toBeInTheDocument();
    expect(screen.getByText('shot')).toBeInTheDocument();
  });

  it('should show the favIcon', async () => {
    renderWithProviders(<CocktailDetailsCard id="12345" />);
    await screen.findByRole('img', { hidden: true });

    const favIcon = await screen.findByTestId('heart-icon');
    expect(favIcon).toBeInTheDocument();
  });

  it('should add the cocktailId to the store fav section if user clicks on favIcon', async () => {
    const { store } = renderWithProviders(<CocktailDetailsCard id="12345" />);
    await screen.findByRole('img', { hidden: true });

    const favIcon = await screen.findByTestId('heart-icon');

    fireEvent.click(favIcon);
    expect(store?.getState().favourite.selectedFav).toEqual({
      '12345': true,
    });
  });

  it('should show the filled heart icon if user already selected 12345 id as fav', async () => {
    const store = setupStore({ favourite: { selectedFav: { '12345': true } } });

    renderWithProviders(<CocktailDetailsCard id="12345" />, { store });

    const favFilledIcon = await screen.findByTestId('filled-heart-icon');

    expect(screen.queryByTestId('heart-icon')).not.toBeInTheDocument();
    expect(favFilledIcon).toBeInTheDocument();
  });
});
