import { useAppDispatch, useAppSelector } from '../store-hooks';
import { getRandomCocktailIdInGivenIndex, getRandomCocktailIds, setRandomCocktailId } from '../../store/cocktail.store';
import useRandomCocktailDetails from './useRandomCocktailDetails';
import { useEffect } from 'react';
import { getGivenIdAlreadyLoaded } from '../../utils/common';

export const useFetchRandomCocktail = (index: string) => {
  const cocktailId = useAppSelector(getRandomCocktailIdInGivenIndex)(index);
  const loadedRandomCocktailIds = useAppSelector(getRandomCocktailIds);
  const { data, isFetching, refetch, isRefetching } = useRandomCocktailDetails(index, !cocktailId);

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
  }, [data]);

  useEffect(() => {
    (async () => {
      if (!cocktailId) {
        await refetch();
      }
    })();
  }, [cocktailId]);

  return { data, isFetching: isFetching || isRefetching };
};
