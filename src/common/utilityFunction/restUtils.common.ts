import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Agent } from 'https';

@Injectable()
export class RestServiceUtils {
  private readonly httpAgent: Agent;

  constructor() {
    this.httpAgent = new Agent({ keepAlive: true });
  }

  async get<T>(url: string, headers: any = []): Promise<T> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        ...headers,
      },
      httpsAgent: this.httpAgent,
      params: {
        cb: Date.now(),
        ...headers.params,
      },
    };

    try {
      const response: AxiosResponse<T> = await axios.get(url, requestConfig);
      return response.data;
    } catch (error) {
      console.error(`Get RestServiceUtils exception occurred:\nURL: ${url}`);
      throw error;
    }
  }

  async post<T>(url: string, data: any, headers: any = []): Promise<T> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        ...headers,
      },
      httpsAgent: this.httpAgent,
      params: {
        cb: Date.now(),
        ...headers.params,
      },
    };

    try {
      const response: AxiosResponse<T> = await axios.post(
        url,
        JSON.stringify(data),
        requestConfig,
      );
      return response.data;
    } catch (error) {
      console.error(`Post RestServiceUtils exception occurred:\nURL: ${url}`);
      throw error;
    }
  }
}
