import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import CocktailDbAPI from '../../service/CocktailDbAPI';
import { mapCocktailDBResponse } from '../../utils/common';

const useSearchResults = () => {
  const { search } = useLocation();

  return useQuery(
    ['search', search],
    async () => {
      const response = await CocktailDbAPI.searchCocktail(search);
      if (response.drinks) {
        return response.drinks.map(mapCocktailDBResponse);
      }
      return [];
    },
    { staleTime: Infinity },
  );
};

export default useSearchResults;
