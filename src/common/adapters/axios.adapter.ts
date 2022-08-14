import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

import { IHttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements IHttpAdapter {
  private axios: AxiosInstance = axios;

  public async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('This is an error in the Axios Adapter');
    }
  }
}
