import React from 'react';
import { Cocktail } from '../../defs/cocktail';
import './RectangleCocktailCard.style.scss';
import ImageLoader from '../ImageLoader/ImageLoader';
import Loader from '../Loader/Loader';

type RectangleCocktailCardProps = {
  cocktail?: Cocktail;
  isLoading: boolean;
};

const RectangleCocktailCard = ({ cocktail, isLoading }: RectangleCocktailCardProps) => {
  return (
    <div className="rectangle-cocktail-card-wrapper">
      {isLoading && <Loader />}
      {cocktail && !isLoading && (
        <>
          <div className="image">
            <ImageLoader wrapperClass="loader" src={cocktail.image} alt={cocktail.name} />
          </div>
          <div className="content">
            <h3 className="name">{cocktail.name}</h3>
            <h4 className="category">{cocktail.category}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default RectangleCocktailCard;
