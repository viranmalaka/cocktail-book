import React from 'react';
import FlexBox from '../app/components/FlexBox';
import { useAppSelector } from '../app/hooks/store-hooks';
import { getAllSelectedFavourites } from '../app/store/favourite.store';
import CocktailDetailsCard from '../app/components/CocktailCards/CocktailDetailsCard';
import NoDataView from '../app/components/NoDataView/NoDataView';

const Favourites = () => {
  const favIds = useAppSelector(getAllSelectedFavourites);

  if (favIds.length === 0) {
    return <NoDataView text="You haven't selected any Favourites" />;
  }

  return (
    <FlexBox direction="column">
      <FlexBox justifyContent="center" direction="row" wrap>
        {favIds.map((id) => (
          <CocktailDetailsCard key={id} id={id} />
        ))}
      </FlexBox>
    </FlexBox>
  );
};

export default Favourites;
