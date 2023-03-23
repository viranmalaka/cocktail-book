import React from 'react';
import useSearchResults from '../../../hooks/react-query/useSearchResults';
import Loader from '../../UI/Loader/Loader';
import NoDataView from '../../UI/NoDataView/NoDataView';
import FlexBox from '../../UI/FlexBox';
import CocktailDetailsCardWithFav from '../../UI/Cards/CocktailDetailsCardWithFav';

const SearchResults = () => {
  const { data, isLoading } = useSearchResults();

  if (isLoading) {
    return <Loader helperText="Please Wait, We are searching..." />;
  }

  if (data?.length === 0) {
    return <NoDataView />;
  }

  return (
    <FlexBox wrap justifyContent="center">
      {data?.map((cocktail) => (
        <CocktailDetailsCardWithFav key={cocktail.id} cocktail={cocktail} loading={false} />
      ))}
    </FlexBox>
  );
};

export default SearchResults;
