import React from 'react';
import { useHistory } from 'react-router-dom';

import useSearch from '../../../hooks/useSearch';
import { SEARCH_QUERY_PARAM_KEY } from '../../../utils/consts';
import SearchInput from '../SearchInput/SearchInput';

// I used same set of query param patterns in web browser as the API.
// it'll help to extend the functionality here if the api support more query.
const SearchArea = () => {
  const history = useHistory();
  const search = useSearch();

  const handleOnSubmit = (value: string) => {
    history.push({ pathname: '/search', search: `?${SEARCH_QUERY_PARAM_KEY}=${value}` });
  };

  const initialValue = search.get(SEARCH_QUERY_PARAM_KEY) || '';

  return <SearchInput onSubmit={handleOnSubmit} initialValue={initialValue} />;
};

export default SearchArea;
