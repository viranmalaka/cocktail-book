import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  randomCocktailIds: { [key: string]: string };
}

const initialState: CounterState = {
  randomCocktailIds: {},
};

export const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {
    setRandomCocktailId: (state, action: PayloadAction<{ index: number; cocktailId: string }>) => {
      const { index, cocktailId } = action.payload;
      state.randomCocktailIds = {
        ...state.randomCocktailIds,
        [index]: cocktailId,
      };
    },
  },
});

export default cocktailSlice.reducer;
