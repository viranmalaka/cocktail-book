import ApiService from './api-service';
import { CocktailDBResponse } from '../defs/CocktailDBResponse';

class CocktailDbAPI {
  static getRandomCocktail() {
    // const controller = new AbortController();
    const api = ApiService.getInstance();
    // const promise = api
    //   .get<CocktailDBResponse>('random.php', { signal: controller.signal })
    //   .then((result) => result.data);
    // return [promise, controller.abort];
    return api.get<CocktailDBResponse>('random.php').then((result) => result.data);
  }
}

export default CocktailDbAPI;
