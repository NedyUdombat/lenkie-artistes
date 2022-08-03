import axios, { AxiosInstance } from "axios";

import config from "../config";

const http: AxiosInstance = axios.create({
  baseURL: `${config?.PROXY_URL}/${config?.BASE_URL}`,

  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export { http };
