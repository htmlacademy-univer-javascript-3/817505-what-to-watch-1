import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './api.token';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const SERVER_TIMEOUT = 5000;

export const configureAxios = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: SERVER_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};

