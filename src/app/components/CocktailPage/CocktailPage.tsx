import React from 'react';
import useCocktailDetailsById from '../../hooks/react-query/useCocktailDetailsById';
import Loader from '../Loader/Loader';
import './CocktailPageStyles.scss';
import FlexBox from '../FlexBox';
import ImageLoader from '../ImageLoader/ImageLoader';
import FavouriteIconWrapper from '../FavouriteIconWrapper';

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
