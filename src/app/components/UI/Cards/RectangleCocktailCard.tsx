import React from 'react';
import { Link } from 'react-router-dom';

import { Cocktail } from '../../../defs/cocktail';
import ImageLoader from '../ImageLoader/ImageLoader';
import Loader from '../Loader/Loader';
import './RectangleCocktailCard.style.scss';

type RectangleCocktailCardProps = {
  cocktail?: Cocktail;
  isLoading: boolean;
  addonActions?: JSX.Element;
  isError?: boolean;
};

const RectangleCocktailCard = ({ cocktail, isLoading, addonActions, isError }: RectangleCocktailCardProps) => {
  return (
    <div className="cb-card-wrapper">
      {isLoading && <Loader />}
      {isError && <div className="cb-card-load-error">Loading Error</div>}
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
