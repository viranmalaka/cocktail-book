import { useEffect } from 'react';

import { getRandomCocktailIdInGivenIndex, getRandomCocktailIds, setRandomCocktailId } from '../../store/cocktail.store';
import { getGivenIdAlreadyLoaded } from '../../utils/common';
import { useAppDispatch, useAppSelector } from '../store-hooks';
import useRandomCocktailDetails from './useRandomCocktailDetails';

export const useFetchRandomCocktail = (index: string) => {
  const cocktailId = useAppSelector(getRandomCocktailIdInGivenIndex)(index);
  const loadedRandomCocktailIds = useAppSelector(getRandomCocktailIds);
  const { data, isFetching, refetch, isRefetching, isError } = useRandomCocktailDetails(index, !cocktailId);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      const fetchedId = data.id;
      const isGivenIdAlreadyLoaded = getGivenIdAlreadyLoaded(loadedRandomCocktailIds, fetchedId);
      if (isGivenIdAlreadyLoaded) {
        refetch();
      } else {
        dispatch(setRandomCocktailId({ index, cocktailId: data.id }));
      }
    }
  }, [data, index]);

  useEffect(() => {
    (async () => {
      if (!cocktailId) {
        await refetch();
      }
    })();
  }, [cocktailId]);

  return { data, isFetching: isFetching || isRefetching, isError };
};
