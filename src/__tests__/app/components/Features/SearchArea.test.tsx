import { renderWithProviders } from '../../../../config/test-utils';
import SearchArea from '../../../../app/components/Features/SearchArea/SearchArea';
import { fireEvent, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';
import React from 'react';

describe('test SearchArea', () => {
  it('should show the value in url query param in the search input box', () => {
    renderWithProviders(<SearchArea />, {
      memoryRouterProps: {
        initialEntries: ['/search?s=query2'],
      },
    });

    expect(screen.getByRole('textbox')).toHaveValue('query2');
  });

  it('should set the url query param on search button click', async () => {
    let testLocation;
    renderWithProviders(
      <>
        <SearchArea />
        <Route
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </>,
    );

    const searchBox = await screen.findByRole('textbox');
    fireEvent.change(searchBox, { target: { value: 'new-search-term' } });

    expect(screen.getByRole('textbox')).toHaveValue('new-search-term');
    fireEvent.click(screen.getByRole('button'));

    // @ts-ignore
    const searchParams = new URLSearchParams(testLocation?.search);
    expect(searchParams.get('s')).toEqual('new-search-term');
  });

  it('should set the url query param on enter button pressed', async () => {
    let testLocation;
    renderWithProviders(
      <>
        <SearchArea />
        <Route
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </>,
    );

    const searchBox = await screen.findByRole('textbox');
    fireEvent.change(searchBox, { target: { value: 'enter-key-pressed' } });
    fireEvent.keyDown(searchBox, { key: 'Enter' });

    // @ts-ignore
    const searchParams = new URLSearchParams(testLocation?.search);
    expect(searchParams.get('s')).toEqual('enter-key-pressed');
  });

  it('should set the query param only if the input text is valid (not empty)', async () => {
    let testLocation;
    renderWithProviders(
      <>
        <SearchArea />
        <Route
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </>,
    );

    const searchBox = await screen.findByRole('textbox');
    fireEvent.change(searchBox, { target: { value: '' } });
    fireEvent.keyDown(searchBox, { key: 'Enter' });

    // @ts-ignore
    const searchParams = new URLSearchParams(testLocation?.search);
    expect(searchParams.get('s')).toBeNull();
  });
});
