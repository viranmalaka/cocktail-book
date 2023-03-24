import axios, { AxiosInstance } from 'axios';

import { COCKTAIL_DB_BASE_URL } from '../utils/consts';

class ApiService {
  static axiosInstance: AxiosInstance | null = null;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!this.axiosInstance) {
      ApiService.axiosInstance = axios.create({
        baseURL: COCKTAIL_DB_BASE_URL,
      });
    }
    return this.axiosInstance!;
  }
}

export default ApiService;
