import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import CocktailDbAPI from '../../service/CocktailDbAPI';
import { mapCocktailDBResponse } from '../../utils/common';

const useSearchResults = () => {
  const { search } = useLocation();

  return useQuery(
    ['search', search],
    async () => {
      try {
        const response = await CocktailDbAPI.searchCocktail(search);
        if (response.drinks) {
          return response.drinks.map(mapCocktailDBResponse);
        } else {
          return [];
        }
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    { staleTime: Infinity },
  );
};

export default useSearchResults;
