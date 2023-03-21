import React from 'react';
import SearchResults from '../app/components/SearchResults';
import SearchByFirstLetter from '../app/components/SearchByFirstLetter/SearchByFirstLetter';

const Search = () => {
  return (
    <div>
      <SearchByFirstLetter />
      <SearchResults />
    </div>
  );
};

export default Search;
