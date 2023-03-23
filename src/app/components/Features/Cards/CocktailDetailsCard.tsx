import React from 'react';
import useCocktailDetailsById from '../../../hooks/react-query/useCocktailDetailsById';
import CocktailDetailsCardWithFav from '../../UI/Cards/CocktailDetailsCardWithFav';

type CocktailDetailsCardProps = {
  id: string;
};

const CocktailDetailsCard = ({ id }: CocktailDetailsCardProps) => {
  const { data, isFetching } = useCocktailDetailsById(id);

  return <CocktailDetailsCardWithFav cocktail={data} loading={isFetching} />;
};

export default CocktailDetailsCard;
