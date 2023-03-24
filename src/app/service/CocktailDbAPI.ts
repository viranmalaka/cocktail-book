import ApiService from './api-service';
import { CocktailDBResponse } from '../defs/CocktailDBResponse';

class CocktailDbAPI {
  static getRandomCocktail() {
    const api = ApiService.getInstance();

    return api.get<CocktailDBResponse>('random.php').then((result) => result.data);
  }

  static searchCocktail(query: string) {
    const api = ApiService.getInstance();

    return api.get<CocktailDBResponse>(`search.php${query}`).then((result) => result.data);
  }

  static getCocktailDetailsById(id: string) {
    const api = ApiService.getInstance();

    return api.get<CocktailDBResponse>(`lookup.php?i=${id}`).then((result) => result.data);
  }
}

export default CocktailDbAPI;
