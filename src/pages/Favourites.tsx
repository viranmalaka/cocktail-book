import React from 'react';
import FlexBox from '../app/components/FlexBox';
import { useAppSelector } from '../app/hooks/store-hooks';
import { getAllSelectedFavourites } from '../app/store/favourite.store';
import CocktailDetailsCard from '../app/components/CocktailCards/CocktailDetailsCard';

const Favourites = () => {
  const favIds = useAppSelector(getAllSelectedFavourites);
  console.log({ favIds });

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
