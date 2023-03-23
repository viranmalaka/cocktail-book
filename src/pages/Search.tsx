import React from 'react';
import SearchResults from '../app/components/Features/SearchResults/SearchResults';
import SearchByFirstLetter from '../app/components/UI/SearchByFirstLetter/SearchByFirstLetter';

const Search = () => {
  return (
    <div>
      <SearchByFirstLetter />
      <SearchResults />
    </div>
  );
};

export default Search;
