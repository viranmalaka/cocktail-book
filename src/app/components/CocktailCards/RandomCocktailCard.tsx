import React from 'react';
import RectangleCocktailCard from './RectangleCocktailCard';
import useRandomCocktailDetails from '../../hooks/react-query/useRandomCocktailDetails';

type RandomCocktailCardProps = {
  index: string;
};

const RandomCocktailCard = ({ index }: RandomCocktailCardProps) => {
  const { data, isFetching } = useRandomCocktailDetails(index);

  if (isFetching) {
    return <div>'loading'</div>;
  }

  if (!data) {
    return <div>no data</div>;
  }

  console.log({ data });
  return <RectangleCocktailCard cocktail={data} />;
};

export default RandomCocktailCard;
