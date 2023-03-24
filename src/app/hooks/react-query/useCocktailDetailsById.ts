import { useQuery } from 'react-query';

import CocktailDbAPI from '../../service/CocktailDbAPI';
import { mapCocktailDBResponse } from '../../utils/common';

const useCocktailDetailsById = (id: string) => {
  return useQuery(
    ['cocktail', 'id', id],
    async () => {
      const response = await CocktailDbAPI.getCocktailDetailsById(id);
      return mapCocktailDBResponse(response.drinks[0]);
    },
    { staleTime: Infinity }, // TODO if stale time is same across the app move this to the app component
  );
};

export default useCocktailDetailsById;
