import React from 'react';

import useCocktailDetailsById from '../../../hooks/react-query/useCocktailDetailsById';
import Loader from '../../UI/Loader/Loader';
import FlexBox from '../../UI/FlexBox';
import ImageLoader from '../../UI/ImageLoader/ImageLoader';
import FavouriteIconWrapper from '../FavouriteIconWrapper/FavouriteIconWrapper';

import './CocktailPageStyles.scss';

type CocktailPageProps = {
  id: string;
};

const CocktailPage = ({ id }: CocktailPageProps) => {
  const { isLoading, data: cocktail } = useCocktailDetailsById(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FlexBox className="cb-drink-page" gap="2em">
      <div className="drink-page-image">
        <ImageLoader src={cocktail?.image} alt={cocktail?.name} />
        <div className="fav-icon">
          <FavouriteIconWrapper cocktailId={cocktail?.id} />
        </div>
      </div>
      <div className="drink-page-content">
        <h1 className="name">{cocktail?.name}</h1>
        <div className="id">{cocktail?.id}</div>

        <div className="category">{cocktail?.category}</div>
        <div className="instruction">{cocktail?.instruction}</div>
      </div>
    </FlexBox>
  );
};

export default CocktailPage;
