import React from 'react';
import { getEnglishAlphabet } from '../../utils/common';
import { Link } from 'react-router-dom';

import './SearchByFirstLetterStyles.scss';

const SearchByFirstLetter = () => {
  const englishAlphabet = getEnglishAlphabet();
  return (
    <div className="filter-by-first-letter-wrapper">
      <div className="title">Filter By Fist Letter: </div>
      {englishAlphabet.map((letter) => (
        <Link to={{ pathname: '/search', search: `f=${letter}` }} key={letter} className="link">
          {letter}
        </Link>
      ))}
    </div>
  );
};

export default SearchByFirstLetter;
