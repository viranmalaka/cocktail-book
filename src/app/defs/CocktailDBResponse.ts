export interface CocktailDrink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

export interface CocktailDBResponse {
  drinks: CocktailDrink[];
}
