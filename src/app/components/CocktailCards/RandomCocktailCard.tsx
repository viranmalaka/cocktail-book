import React from 'react';
import { useFetchRandomCocktail } from '../../hooks/react-query/useFetchRandomCocktail';
import CocktailDetailsCardWithFav from './CocktailDetailsCardWithFav';

type RandomCocktailCardProps = {
  index: string;
};

const RandomCocktailCard = ({ index }: RandomCocktailCardProps) => {
  const { data, isFetching } = useFetchRandomCocktail(index);

  return <CocktailDetailsCardWithFav cocktail={data} loading={isFetching} />;
};

export default RandomCocktailCard;
