import React from 'react';
import RectangleCocktailCard from './RectangleCocktailCard';
import FavouriteIconWrapper from '../FavouriteIconWrapper';
import { Cocktail } from '../../defs/cocktail';

type CocktailDetailsCardWithFavProps = {
  cocktail?: Cocktail;
  loading: boolean;
};

const CocktailDetailsCardWithFav = ({ cocktail, loading }: CocktailDetailsCardWithFavProps) => {
  const cocktailId = cocktail?.id;

  return (
    <RectangleCocktailCard
      cocktail={cocktail}
      isLoading={loading}
      addonActions={<FavouriteIconWrapper cocktailId={cocktailId} />}
    />
  );
};

export default CocktailDetailsCardWithFav;
