import React from 'react';
import { Cocktail } from '../../defs/cocktail';
import './RectangleCocktailCard.style.scss';

type RectangleCocktailCardProps = {
  cocktail: Cocktail;
};

const RectangleCocktailCard = ({ cocktail }: RectangleCocktailCardProps) => {
  return (
    <div className="rectangle-cocktail-card-wrapper">
      <div className="image">
        <img src={cocktail.image} alt={cocktail.name} />
      </div>
      <div className="content">
        <h3 className="name">{cocktail.name}</h3>
        <h4 className="category">{cocktail.category}</h4>
      </div>
    </div>
  );
};

export default RectangleCocktailCard;
