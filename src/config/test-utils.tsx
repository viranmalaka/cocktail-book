import React, { PropsWithChildren } from 'react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import type { AppStore, RootState } from '../app/store';
// As a basic setup, import your same slice reducers
import { setupStore } from '../app/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouterProps } from 'react-router';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  memoryRouterProps?: MemoryRouterProps;
}

const queryClient = new QueryClient();

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(),
    memoryRouterProps = {},
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter {...memoryRouterProps}>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      </QueryClientProvider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export const getMockedServer = (url: string, response: any) => {
  return setupServer(
    rest.get(`https://www.thecocktaildb.com/api/json/v1/1/${url}`, (req, res, ctx) => {
      return res(ctx.json(response));
    }),
  );
};
