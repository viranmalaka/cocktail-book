import { useQuery } from 'react-query';

import CocktailDbAPI from '../../service/CocktailDbAPI';
import { mapCocktailDBResponse } from '../../utils/common';

const useRandomCocktailDetails = (index: string, enabled: boolean) => {
  return useQuery(
    ['cocktail', index],
    async () => {
      const response = await CocktailDbAPI.getRandomCocktail();
      return mapCocktailDBResponse(response.drinks[0]);
    },
    { enabled },
  );
};

export default useRandomCocktailDetails;
