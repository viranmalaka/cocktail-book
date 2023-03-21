import React from 'react';
import useSearchResults from '../hooks/react-query/useSearchResults';
import Loader from './Loader/Loader';
import NoDataView from './NoDataView/NoDataView';
import FlexBox from './FlexBox';
import RectangleCocktailCard from './CocktailCards/RectangleCocktailCard';

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
        <RectangleCocktailCard key={cocktail.id} cocktail={cocktail} isLoading={false} />
      ))}
    </FlexBox>
  );
};

export default SearchResults;
