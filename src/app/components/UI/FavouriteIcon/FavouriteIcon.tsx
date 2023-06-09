import React from 'react';

import './FavouriteIconStyles.scss';

import { ReactComponent as HeartIcon } from '../../../../assets/heart.svg';
import { ReactComponent as HeartFillIcon } from '../../../../assets/heart-fill.svg';

type FavouriteIconType = {
  isSelected: boolean;
  onClick?: (newValue: boolean) => void;
};

const FavouriteIcon = ({ isSelected, onClick }: FavouriteIconType) => {
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick(!isSelected);
    }
  };
  return (
    <div className="cb-fav-icon-wrapper" onClick={handleOnClick}>
      {isSelected ? <HeartFillIcon data-testid="filled-heart-icon" /> : <HeartIcon data-testid="heart-icon" />}
    </div>
  );
};

export default FavouriteIcon;
