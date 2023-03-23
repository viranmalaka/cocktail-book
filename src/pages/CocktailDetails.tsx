import React from 'react';
import { useParams } from 'react-router-dom';
import CocktailPage from '../app/components/Features/CocktailPage/CocktailPage';

const CocktailDetails = () => {
  const { id } = useParams<{ id: string }>();

  return <CocktailPage id={id} />;
};

export default CocktailDetails;
