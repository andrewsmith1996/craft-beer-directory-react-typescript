import axios, { AxiosResponse } from 'axios';

export class APIUtils {
  public static async get<T>(URL: string) {
    try {
      const response: AxiosResponse = await axios.get(URL);
      if (response.status === 200) return response.data as T;
      return null
    } catch (e) {
      console.log(e);
    }
  }
} 