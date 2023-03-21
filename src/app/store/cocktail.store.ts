import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface CocktailState {
  randomCocktailIds: { [key: string]: string | null };
}

const initialState: CocktailState = {
  randomCocktailIds: {},
};

export const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    setRandomCocktailId: (state, action: PayloadAction<{ index: string; cocktailId: string | null }>) => {
      const { index, cocktailId } = action.payload;
      state.randomCocktailIds = {
        ...state.randomCocktailIds,
        [index]: cocktailId,
      };
    },
    clearAllRandomCocktailIds: (state) => {
      state.randomCocktailIds = {};
    },
  },
});

export const { setRandomCocktailId, clearAllRandomCocktailIds } = cocktailSlice.actions;

const getStore = (store: RootState): CocktailState => store.cocktail;
export const getRandomCocktailIds = createSelector(getStore, (store) => store.randomCocktailIds);

export const getRandomCocktailIdInGivenIndex = createSelector(getRandomCocktailIds, (ids) => {
  return (key: string) => ids[key];
});

export default cocktailSlice.reducer;
