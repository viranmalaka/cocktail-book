import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { RootState } from './index';

export interface FavouriteStore {
  selectedFav: { [key: string]: boolean };
}

const initialState: FavouriteStore = {
  selectedFav: {},
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    setFavourite: (state, action: PayloadAction<{ id: string; isSelected: boolean }>) => {
      const { id, isSelected } = action.payload;
      if (isSelected) {
        state.selectedFav = {
          ...state.selectedFav,
          [id]: isSelected,
        };
      } else {
        // if we don't delete the keys, non-fav item store will grow unnecessarily.
        delete state.selectedFav[id];
      }
    },
  },
});

export const { setFavourite } = favouriteSlice.actions;

const getStore = (store: RootState): FavouriteStore => store.favourite;

export const getSelectedFavourites = createSelector(getStore, (store) => store.selectedFav);
export const getIsSelectedGivenIdAsFavourite = createSelector(getSelectedFavourites, (ids) => {
  return (key?: string) => {
    if (key) {
      return ids[key];
    }
    return false;
  };
});
export const getAllSelectedFavourites = createSelector(getSelectedFavourites, (favourites) => {
  console.log(favourites);
  return Object.keys(favourites).filter((value) => !!value);
});

export default favouriteSlice.reducer;
