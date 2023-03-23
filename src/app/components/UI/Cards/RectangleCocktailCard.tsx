import React from 'react';
import { Cocktail } from '../../../defs/cocktail';
import './RectangleCocktailCard.style.scss';
import ImageLoader from '../ImageLoader/ImageLoader';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

type RectangleCocktailCardProps = {
  cocktail?: Cocktail;
  isLoading: boolean;
  addonActions?: JSX.Element;
};

const RectangleCocktailCard = ({ cocktail, isLoading, addonActions }: RectangleCocktailCardProps) => {
  return (
    <div className="cb-card-wrapper">
      {isLoading && <Loader />}
      {cocktail && !isLoading && (
        <Link to={`/cocktail/${cocktail.id}`} className="link">
          <div className="image">
            <ImageLoader wrapperClass="loader" src={cocktail.image} alt={cocktail.name} />
            {addonActions && <div className="addon-actions">{addonActions}</div>}
          </div>
          <div className="content">
            <h3 className="name">{cocktail.name}</h3>
            <h4 className="category">{cocktail.category}</h4>
          </div>
        </Link>
      )}
    </div>
  );
};

export default RectangleCocktailCard;
