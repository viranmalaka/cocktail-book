import { useQuery } from 'react-query';
import CocktailDbAPI from '../../service/CocktailDbAPI';
import { CocktailDrink } from '../../defs/CocktailDBResponse';
import { Cocktail } from '../../defs/cocktail';

const mapCocktailDBResponse = (drink: CocktailDrink) => {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    category: drink.strCategory,
  } as Cocktail;
};

const useRandomCocktailDetails = (index: string) => {
  return useQuery(
    ['cocktail', index],
    async () => {
      const response = await CocktailDbAPI.getRandomCocktail();
      return mapCocktailDBResponse(response.drinks[0]);
    },
    { staleTime: Infinity },
  );
};

export default useRandomCocktailDetails;
