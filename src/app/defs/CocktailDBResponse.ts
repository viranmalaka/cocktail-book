export interface CocktailDrink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  strInstructions?: string;
}

export interface CocktailDBResponse {
  drinks: CocktailDrink[];
}
