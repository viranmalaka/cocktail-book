import React from 'react';

import { Cocktail } from '../../../defs/cocktail';
import FavouriteIconWrapper from '../../Features/FavouriteIconWrapper/FavouriteIconWrapper';
import RectangleCocktailCard from './RectangleCocktailCard';

type CocktailDetailsCardWithFavProps = {
  cocktail?: Cocktail;
  loading: boolean;
  isError?: boolean;
};

const CocktailDetailsCardWithFav = ({ cocktail, loading, isError }: CocktailDetailsCardWithFavProps) => {
  const cocktailId = cocktail?.id;

  return (
    <RectangleCocktailCard
      cocktail={cocktail}
      isError={isError}
      isLoading={loading}
      addonActions={<FavouriteIconWrapper cocktailId={cocktailId} />}
    />
  );
};

export default CocktailDetailsCardWithFav;
