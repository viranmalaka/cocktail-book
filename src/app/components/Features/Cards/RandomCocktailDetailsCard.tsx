import React from 'react';

import { useFetchRandomCocktail } from '../../../hooks/react-query/useFetchRandomCocktail';
import CocktailDetailsCardWithFav from '../../UI/Cards/CocktailDetailsCardWithFav';

type RandomCocktailCardProps = {
  index: string;
};

const RandomCocktailDetailsCard = ({ index }: RandomCocktailCardProps) => {
  const { data, isFetching, isError } = useFetchRandomCocktail(index);

  return <CocktailDetailsCardWithFav cocktail={data} loading={isFetching} isError={isError} />;
};

export default RandomCocktailDetailsCard;
