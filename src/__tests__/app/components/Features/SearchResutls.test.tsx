import { renderWithProviders } from '../../../../config/test-utils';
import SearchResults from '../../../../app/components/Features/SearchResults/SearchResults';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php`, (req, res, ctx) => {
    return res(
      ctx.json({
        drinks: [
          {
            idDrink: '123456',
            strDrink: 'Mock Drink Name 123456',
            strDrinkThumb: 'https://www.example.com/img/123456',
            strCategory: 'Mock shot',
          },
          {
            idDrink: '123457',
            strDrink: 'Mock Drink Name 123457',
            strDrinkThumb: 'https://www.example.com/img/123457',
            strCategory: 'Mock shot',
          },
          {
            idDrink: '123458',
            strDrink: 'Mock Drink Name 123458',
            strDrinkThumb: 'https://www.example.com/img/123458',
            strCategory: 'Mock shot',
          },
        ],
      }),
    );
  }),
);

describe('test SearchResults', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.restoreHandlers());
  afterAll(() => server.close());

  it('should render the search results', async () => {
    renderWithProviders(<SearchResults />, {
      memoryRouterProps: {
        initialEntries: ['/search?s=something'],
      },
    });
    expect(screen.getByText(/Please Wait, We are searching.../i)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText(/Please Wait, We are searching.../i));

    expect(screen.getAllByTestId('loader')).toHaveLength(3);
  });

  it('should show no data view if the results set is empty', async () => {
    server.use(
      rest.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', (req, res, ctx) => {
        return res(ctx.json({ drinks: [] }));
      }),
    );

    renderWithProviders(<SearchResults />, {
      memoryRouterProps: {
        initialEntries: ['/search?s=nothing'],
      },
    });
    expect(screen.getByText(/Please Wait, We are searching.../i)).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText(/Please Wait, We are searching.../i));

    expect(screen.getByText('No Results')).toBeInTheDocument();
  });
});
