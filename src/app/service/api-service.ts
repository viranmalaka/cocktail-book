import axios, { AxiosInstance } from 'axios';

class ApiService {
  static axiosInstance: AxiosInstance | null = null;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!this.axiosInstance) {
      ApiService.axiosInstance = axios.create({
        baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
      });
    }
    return this.axiosInstance!;
  }
}

export default ApiService;
