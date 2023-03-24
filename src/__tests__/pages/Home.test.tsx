import { fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home from '../../pages/Home';
import { renderWithProviders } from '../../config/test-utils';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`, (req, res, ctx) => {
    return res(
      ctx.json({
        drinks: [
          {
            idDrink: '123456' + Math.random(),
            strDrink: 'Mock Drink Name 123456',
            strDrinkThumb: 'https://www.example.com/img/123456',
            strCategory: 'Mock shot',
          },
        ],
      }),
    );
  }),
);

describe('Home page', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('should render 5 Random Cards in loading state before the api calls get success', async () => {
    renderWithProviders(<Home />);
    expect(screen.queryAllByTestId('loader')).toHaveLength(5);
    await waitForElementToBeRemoved(screen.queryAllByTestId('loader'));
  });

  it('should render 5 cards after api call get success', async () => {
    renderWithProviders(<Home />);

    await waitForElementToBeRemoved(screen.queryAllByTestId('loader'));
    expect(screen.getAllByRole('img', { hidden: true })).toHaveLength(5);
  });

  it('should set the random cocktail ids in the store', async () => {
    const { store } = renderWithProviders(<Home />);

    await waitForElementToBeRemoved(screen.queryAllByTestId('loader'));

    expect(Object.keys(store?.getState().cocktail.randomCocktailIds)).toHaveLength(5);
  });

  it('should clear the store and reload when user press refresh button', async () => {
    const { store } = renderWithProviders(<Home />);

    await waitForElementToBeRemoved(screen.queryAllByTestId('loader'));
    fireEvent.click(screen.getByRole('button'));

    expect(Object.keys(store?.getState().favourite.selectedFav)).toHaveLength(0);
  });
});
