import React from 'react';
import { useHistory } from 'react-router-dom';

import useSearch from '../../../hooks/useSearch';
import SearchInput from '../SearchInput/SearchInput';

// TODO move all the query param keys to constants
// I used same set of query param patterns in web browser as the API.
// it'll help to extend the functionality here if the api support more query.
const SearchArea = () => {
  const history = useHistory();
  const search = useSearch();

  const handleOnSubmit = (value: string) => {
    history.push({ pathname: '/search', search: `?s=${value}` });
  };

  const initialValue = search.get('s') || '';

  return <SearchInput onSubmit={handleOnSubmit} initialValue={initialValue} />;
};

export default SearchArea;
