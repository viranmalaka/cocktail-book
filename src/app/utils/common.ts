import { CocktailDrink } from '../defs/CocktailDBResponse';
import { Cocktail } from '../defs/cocktail';

const LETTER_A_CODE = 65;

export const getGivenIdAlreadyLoaded = (loadedIds: { [key: string]: string | null }, currentId: string) => {
  return Object.values(loadedIds).some((id) => id === currentId);
};

export const mapCocktailDBResponse = (drink: CocktailDrink) => {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    category: drink.strCategory,
  } as Cocktail;
};

export const getEnglishAlphabet = () =>
  Array(26)
    .fill('')
    .map((_, index) => String.fromCharCode(index + LETTER_A_CODE));
