import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import cocktailReducer from './cocktail.store';
import favouriteReducer from './favourite.store';

const reducers = combineReducers({
  cocktail: cocktailReducer,
  favourite: favouriteReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourite'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: reducers,
    preloadedState,
  });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
