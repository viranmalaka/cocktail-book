import React from 'react';
import RectangleCocktailCard from './RectangleCocktailCard';
import FavouriteIconWrapper from '../FavouriteIconWrapper';
import useCocktailDetailsById from '../../hooks/react-query/useCocktailDetailsById';

type CocktailDetailsCardProps = {
  id: string;
};

const CocktailDetailsCard = ({ id }: CocktailDetailsCardProps) => {
  const { data, isFetching } = useCocktailDetailsById(id);

  const cocktailId = data?.id;

  return (
    <RectangleCocktailCard
      cocktail={data}
      isLoading={isFetching}
      addonActions={<FavouriteIconWrapper cocktailId={cocktailId} />}
    />
  );
};

export default CocktailDetailsCard;
