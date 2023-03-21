import React from 'react';
import FavouriteIcon from './FavouriteIcon/FavouriteIcon';
import { useAppDispatch, useAppSelector } from '../hooks/store-hooks';
import { getIsSelectedGivenIdAsFavourite, setFavourite } from '../store/favourite.store';

type FavouriteIconWrapperProp = {
  cocktailId?: string;
};

const FavouriteIconWrapper = ({ cocktailId }: FavouriteIconWrapperProp) => {
  const isSelectedAsFav = useAppSelector(getIsSelectedGivenIdAsFavourite)(cocktailId);
  const dispatch = useAppDispatch();

  if (!cocktailId) {
    return null;
  }

  return (
    <FavouriteIcon
      isSelected={isSelectedAsFav}
      onClick={(value) => dispatch(setFavourite({ id: cocktailId, isSelected: value }))}
    />
  );
};

export default FavouriteIconWrapper;
