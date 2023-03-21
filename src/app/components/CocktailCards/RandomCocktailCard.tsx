import React from 'react';
import RectangleCocktailCard from './RectangleCocktailCard';
import { useFetchRandomCocktail } from '../../hooks/react-query/useFetchRandomCocktail';

type RandomCocktailCardProps = {
  index: string;
};

const RandomCocktailCard = ({ index }: RandomCocktailCardProps) => {
  const { data, isFetching } = useFetchRandomCocktail(index);

  return <RectangleCocktailCard cocktail={data} isLoading={isFetching} />;
};

export default RandomCocktailCard;
